/*
 * @Author: HxB
 * @Date: 2022-06-22 15:40:47
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-23 15:54:47
 * @Description: test
 * @FilePath: \js-xajax\test.js
 */
// const { XAjax, HttpMethod, EVENTS } = require('js-xajax');
// import { XAjax, HttpMethod, EVENTS } from 'js-xajax';
// import XAjax from 'js-xajax';
const { XAjax, HttpMethod, EVENTS } = require('./dist/xajax');

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
