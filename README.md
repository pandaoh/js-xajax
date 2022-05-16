# js-xajax

> JavaScript XMLHttpRequest(xhr) 的封装，方便需要使用原生 ajax 的项目使用。

* 方便全局管理请求
* 拆箱即用解决了原生 xhr 使用复杂的问题。
* 支持请求超时设置
* 支持自定义请求/响应数据处理
* 支持异常处理与特定事件监听
* 增加请求/响应/错误拦截功能
* 请求头拦截处理(Headers)
* 日志输出，请求完成时的回调(无论是否成功) Hooks。
* 提供实例默认配置修改方法(timeout/baseUrl...)

## Install

```bash
npm install js-xajax -S
```

## Import

```javascript
// Es or Node
const { XAjax, HttpMethod, EVENTS } = require('js-xajax');
import { XAjax, HttpMethod, EVENTS } from 'js-xajax';
import XAjax from 'js-xajax';

// Browser
<script src="xajax.min.js"></script>
console.log(xajax);
```

## Use

```javascript
console.log({ XAjax, HttpMethod, EVENTS });

XAjax.get('https://a.biugle.cn', { q: 'query' }, { token: 'xxx' })
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

$xhr = XAjax.create({
  dump: JSON.stringify, // 用户自定义数据 encode
  load: JSON.parse, // 用户自定义数据 decode
  xmlHttpRequest: () => new XMLHttpRequest(), // 生成 xmlHttpRequest 实例
  timeout: 30000,
  baseUrl: '',
  raw: false, // 数据按原格式发送，不进行 dump/load
  withCredentials: false, // Setting after open for compatibility with IE versions <=10
  eventsHandler: {
    [EVENTS.PROGRESS]: (xhr, xhrProgressEvent) => {
      console.log('xhr', xhr);
      console.log('progress', xhrProgressEvent);
    } // 事件监听处理
  },
  requestHandler: (request) => {
    console.log('requestHandler', request);
  },
  setRequestHeaders: (headers) => {
    console.log('setRequestHeaders', headers);
    return headers;
  },
  responseHandler: (response) => {
    console.log('responseHandler', response);
  },
  errorHandler: (error) => {
    console.log('errorHandler', error);
  },
  requestFinally: () => {
    console.log('requestFinally');
  }
});
// use $xhr
$xhr
  .post('https://a.biugle.cn/post', { data: 'data' }, { token: 'xxx' })
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
```

## API Docs

[API Docs](https://github.com/pandaoh/js-xajax/blob/main/docs/README.md)

## Others

* [Issue](https://github.com/pandaoh/js-xajax/issues)
* [Pull Request](https://github.com/pandaoh/js-xajax/pulls)
* [hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)
* [参考项目](https://github.com/radiosilence/xr)
* 待增加功能：
  * 请求重试
  * 自动转换回数据
  * 取消重复请求/取消请求/请求白名单
