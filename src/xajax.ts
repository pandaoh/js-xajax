/*
 * @Author: HxB
 * @Date: 2022-06-20 18:15:03
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-23 16:03:03
 * @Description: 主程式码 xhr
 * @FilePath: \js-xajax\src\xajax.ts
 */

/**
 * Http Method
 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE',
  options = 'OPTIONS'
}

/**
 * 可监听事件 Events Interface
 */
export interface Events {
  READY_STATE_CHANGE: 'readystatechange';
  LOAD_START: 'loadstart';
  PROGRESS: 'progress';
  ABORT: 'abort';
  ERROR: 'error';
  LOAD: 'load';
  TIMEOUT: 'timeout';
  LOAD_END: 'loadend';
}

/**
 * EVENTS Object
 */
export const EVENTS = {
  READY_STATE_CHANGE: 'readystatechange',
  LOAD_START: 'loadstart',
  PROGRESS: 'progress',
  ABORT: 'abort',
  ERROR: 'error',
  LOAD: 'load',
  TIMEOUT: 'timeout',
  LOAD_END: 'loadend'
};

/**
 * 请求配置项
 */
export interface requestConfig<T = unknown> {
  url: string;
  method: HttpMethod;
  params?: any;
  data?: any;
  headers?: { [key: string]: string };
  raw?: boolean; // 数据按原格式发送，不进行 dump/load
  dump?: (data: T) => string; // 用户自定义数据 encode
  load?: (str: string) => T; // 用户自定义数据 decode
  xmlHttpRequest?: () => XMLHttpRequest; // 生成 xmlHttpRequest 实例
}

/**
 * 初始化配置项
 */
export interface XAjaxOptions<T = unknown> {
  dump?: (data: T) => string; // 用户自定义数据 encode
  load?: (str: string) => T; // 用户自定义数据 decode
  xmlHttpRequest?: () => XMLHttpRequest; // 生成 xmlHttpRequest 实例
  withCredentials?: boolean; // Setting after open for compatibility with IE versions <=10
  raw?: boolean; // 数据按原格式发送，不进行 dump/load
  eventsHandler?: { [key: string]: () => void }; // 事件监听处理
  baseUrl?: string;
  timeout?: number;
  requestHandler?: HandlerFunction;
  responseHandler?: HandlerFunction;
  errorHandler?: HandlerFunction;
  requestFinally?: () => void;
  setRequestHeaders?: HandlerFunction<object>;
}
interface HandlerFunction<T = any> {
  (data: T): T;
}
interface Response {
  status: number;
  statusText: string;
  response: Record<string, unknown>;
  data?: string | Record<string, unknown>;
  xhr: XMLHttpRequest;
}
/**
 * XAjaxClass 基础类
 */
class XAjaxClass {
  private _options: XAjaxOptions;

  /**
   * 默认配置项
   * @private
   * @type {XAjaxOptions}
   * @memberof XAjaxClass
   */
  private _defaultConfig: XAjaxOptions = {
    dump: JSON.stringify,
    load: JSON.parse,
    xmlHttpRequest: (): XMLHttpRequest => new XMLHttpRequest(),
    timeout: 30000,
    baseUrl: '',
    withCredentials: false
  };

  /**
   * 构造函数
   * @param options
   * @returns
   */
  constructor(options?: XAjaxOptions) {
    this._options = { ...this._defaultConfig, ...options };
    return this;
  }

  /**
   * 超时措施
   * @param timeout
   * @returns
   */
  private _timeoutPromise = (timeout: number, xhr: XMLHttpRequest) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        xhr?.abort();
      }, timeout);
    });
  };

  /**
   * 结果处理函数
   * @param xhr
   * @param data
   * @returns
   */
  private _res = (xhr: XMLHttpRequest, data?: string | Record<string, unknown>): Response => ({
    status: xhr.status,
    statusText: xhr.statusText,
    response: xhr.response,
    data,
    xhr
  });

  /**
   * XAjax Basic Request Function Template
   * @param config
   * @returns
   */
  async request(config: requestConfig): Promise<any> {
    const xhrOpts = { ...this._options, ...config };
    let requestInfo: any;
    let xhr: XMLHttpRequest;
    const xhrInstance = new Promise((resolve: any, reject: any) => {
      // @ts-ignore
      xhr = xhrOpts.xmlHttpRequest();

      if (xhrOpts.url === undefined) throw new Error('No URL defined');

      let reqUrl = xhrOpts.url.includes('://')
        ? xhrOpts.url
        : (xhrOpts.baseUrl + xhrOpts.url).replace(/([^\:])\/\//g, '$1/');

      if (config.params) {
        reqUrl += `${reqUrl.includes('?') ? '&' : '?'}${new URLSearchParams(xhrOpts.params).toString()}`; // 会隐式转换 string
      }

      xhr.open(xhrOpts.method, reqUrl, true);

      // setting after open for compatibility with IE versions <=10
      xhr.withCredentials = xhrOpts.withCredentials ?? false;

      xhr.addEventListener(EVENTS.LOAD, () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          let responseData: any;
          if (xhr.responseText) {
            console.log({ responseText: xhr.responseText });
            // @ts-ignore
            responseData = xhrOpts.raw === true ? xhr.responseText : xhrOpts.load(xhr.responseText);
          }
          resolve(this._res(xhr, responseData));
        } else {
          reject(this._res(xhr));
        }
      });

      xhr.addEventListener(EVENTS.ABORT, () => reject(this._res(xhr)));
      xhr.addEventListener(EVENTS.ERROR, () => reject(this._res(xhr)));
      xhr.addEventListener(EVENTS.TIMEOUT, () => reject(this._res(xhr)));

      let headers: any = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(xhrOpts.headers ?? {})
      };

      // 动态设置 headers 可添加 token 等
      xhrOpts?.setRequestHeaders?.call(this, headers);

      for (const k in headers) {
        if (!{}.hasOwnProperty.call(headers, k)) continue;
        xhr.setRequestHeader(k, headers[k]);
      }

      if (xhrOpts.eventsHandler) {
        for (const k in xhrOpts.eventsHandler) {
          if (!{}.hasOwnProperty.call(xhrOpts.eventsHandler, k)) continue;
          xhr.addEventListener(k, xhrOpts.eventsHandler[k].bind(null, xhr), false);
        }
      }

      // @ts-ignore
      const data: any = typeof xhrOpts.data === 'object' && !xhrOpts.raw ? xhrOpts.dump(xhrOpts.data) : xhrOpts.data;

      // 请求拦截
      requestInfo = { xhr, ...config, fullUrl: reqUrl, headers };
      xhrOpts?.requestHandler?.call(this, requestInfo);

      xhr.send(data !== undefined ? data : null);
    });

    // @ts-ignore
    return Promise.race([this._timeoutPromise(xhrOpts.timeout, xhr), xhrInstance])
      .then((result) => {
        // 响应拦截
        xhrOpts?.responseHandler?.call(this, { result, ...(requestInfo ?? {}) });
        return result;
      })
      .catch((error) => {
        // 错误拦截
        return xhrOpts?.errorHandler?.call(this, { error, ...(requestInfo ?? {}) });
      })
      .finally(() => {
        // finally hooks
        xhrOpts?.requestFinally?.call(this);
      });
  }

  /**
   * get
   * @param url
   * @param params
   * @param headers default[{}]
   * @returns
   */
  async get(url: string, params?: any, headers: any = {}): Promise<any> {
    return this.request({ url, params, method: HttpMethod.GET, headers });
  }

  /**
   * post
   * @param url
   * @param data
   * @param headers default[{}]
   * @returns
   */
  async post(url: string, data?: any, headers: any = {}): Promise<any> {
    return this.request({ url, data, method: HttpMethod.POST, headers });
  }

  /**
   * patch
   * @param url
   * @param data
   * @param headers default[{}]
   * @returns
   */
  async patch(url: string, data?: any, headers: any = {}): Promise<any> {
    return this.request({ url, data, method: HttpMethod.PATCH, headers });
  }

  /**
   * put
   * @param url
   * @param data
   * @param headers default[{}]
   * @returns
   */
  async put(url: string, data?: any, headers: any = {}): Promise<any> {
    return this.request({ url, data, method: HttpMethod.PUT, headers });
  }
  /**
   * delete
   * @param url
   * @param data
   * @param headers default[{}]
   * @returns
   */
  async delete(url: string, data?: any, headers: any = {}): Promise<any> {
    return this.request({ url, data, method: HttpMethod.DELETE, headers });
  }

  /**
   * 获取 baseURL
   * @returns
   */
  getBaseURL(): string | undefined {
    return this._options.baseUrl;
  }

  /**
   * 设置 baseURL
   * @param url
   * @returns
   */
  setBaseURL(url?: string): XAjaxClass {
    this._options.baseUrl = url ?? '';
    return this;
  }

  /**
   * 设置请求默认超时时间
   * @param timeout
   * @returns
   */
  setRequestTimeout(timeout: number): XAjaxClass {
    this._options.timeout = timeout;
    return this;
  }

  /**
   * 获取 XAjax 实例
   * @memberof XAjax
   */
  getInstance(): XAjaxClass {
    return this;
  }

  /**
   * 创建 XAjax 实例
   * @param options XAjax 配置
   * @returns
   */
  create(options?: XAjaxOptions): XAjaxClass {
    return new XAjaxClass(options);
  }
}

const XAjax: XAjaxClass = new XAjaxClass();
export { XAjax };
export default XAjax;
