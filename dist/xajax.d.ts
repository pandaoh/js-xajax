export declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE",
    options = "OPTIONS"
}
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
export declare const EVENTS: {
    READY_STATE_CHANGE: string;
    LOAD_START: string;
    PROGRESS: string;
    ABORT: string;
    ERROR: string;
    LOAD: string;
    TIMEOUT: string;
    LOAD_END: string;
};
export interface requestConfig<T = unknown> {
    url: string;
    method: HttpMethod;
    params?: any;
    data?: any;
    headers?: {
        [key: string]: string;
    };
    raw?: boolean;
    dump?: (data: T) => string;
    load?: (str: string) => T;
    xmlHttpRequest?: () => XMLHttpRequest;
}
export interface XAjaxOptions<T = unknown> {
    dump?: (data: T) => string;
    load?: (str: string) => T;
    xmlHttpRequest?: () => XMLHttpRequest;
    withCredentials?: boolean;
    raw?: boolean;
    eventsHandler?: {
        [key: string]: () => void;
    };
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
export declare class XAjaxClass {
    private _options;
    private _defaultConfig;
    constructor(options?: XAjaxOptions);
    private _timeoutPromise;
    private _res;
    request(config: requestConfig): Promise<any>;
    get(url: string, params?: any, headers?: any): Promise<any>;
    post(url: string, data?: any, headers?: any): Promise<any>;
    patch(url: string, data?: any, headers?: any): Promise<any>;
    put(url: string, data?: any, headers?: any): Promise<any>;
    delete(url: string, data?: any, headers?: any): Promise<any>;
    getBaseURL(): string | undefined;
    setBaseURL(url?: string): XAjaxClass;
    setRequestTimeout(timeout: number): XAjaxClass;
    getInstance(): XAjaxClass;
    create(options?: XAjaxOptions): XAjaxClass;
}
declare const XAjax: XAjaxClass;
export { XAjax };
export default XAjax;
//# sourceMappingURL=xajax.d.ts.map