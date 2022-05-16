!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).xajax={})}(this,(function(t){"use strict";var e,n=function(){return n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};function r(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((r=r.apply(t,e||[])).next())}))}function o(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}t.HttpMethod=void 0,(e=t.HttpMethod||(t.HttpMethod={})).GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.get="GET",e.post="POST",e.put="PUT",e.patch="PATCH",e.delete="DELETE",e.options="OPTIONS";var i={READY_STATE_CHANGE:"readystatechange",LOAD_START:"loadstart",PROGRESS:"progress",ABORT:"abort",ERROR:"error",LOAD:"load",TIMEOUT:"timeout",LOAD_END:"loadend"},u=new(function(){function e(t){return this._defaultConfig={dump:JSON.stringify,load:JSON.parse,xmlHttpRequest:function(){return new XMLHttpRequest},timeout:3e4,baseUrl:"",withCredentials:!1},this._timeoutPromise=function(t,e){return new Promise((function(n,r){setTimeout((function(){null==e||e.abort()}),t)}))},this._res=function(t,e){return{status:t.status,statusText:t.statusText,response:t.response,data:e,xhr:t}},this._options=n(n({},this._defaultConfig),t),this}return e.prototype.request=function(t){return r(this,void 0,void 0,(function(){var e,r,u,s,a=this;return o(this,(function(o){return e=n(n({},this._options),t),s=new Promise((function(o,s){var l,d,c,p;if(u=e.xmlHttpRequest(),void 0===e.url)throw new Error("No URL defined");var f=e.url.includes("://")?e.url:(e.baseUrl+e.url).replace(/([^\:])\/\//g,"$1/");t.params&&(f+="".concat(f.includes("?")?"&":"?").concat(new URLSearchParams(e.params).toString())),u.open(e.method,f,!0),u.withCredentials=null!==(l=e.withCredentials)&&void 0!==l&&l,u.addEventListener(i.LOAD,(function(){if(u.status>=200&&u.status<300){var t=void 0;u.responseText&&(console.log({responseText:u.responseText}),t=!0===e.raw?u.responseText:e.load(u.responseText)),o(a._res(u,t))}else s(a._res(u))})),u.addEventListener(i.ABORT,(function(){return s(a._res(u))})),u.addEventListener(i.ERROR,(function(){return s(a._res(u))})),u.addEventListener(i.TIMEOUT,(function(){return s(a._res(u))}));var h=n({Accept:"application/json","Content-Type":"application/json"},null!==(d=e.headers)&&void 0!==d?d:{});for(var v in null===(c=null==e?void 0:e.setRequestHeaders)||void 0===c||c.call(a,h),h)({}).hasOwnProperty.call(h,v)&&u.setRequestHeader(v,h[v]);if(e.eventsHandler)for(var v in e.eventsHandler)({}).hasOwnProperty.call(e.eventsHandler,v)&&u.addEventListener(v,e.eventsHandler[v].bind(null,u),!1);var T="object"!=typeof e.data||e.raw?e.data:e.dump(e.data);r=n(n({xhr:u},t),{fullUrl:f,headers:h}),null===(p=null==e?void 0:e.requestHandler)||void 0===p||p.call(a,r),u.send(void 0!==T?T:null)})),[2,Promise.race([this._timeoutPromise(e.timeout,u),s]).then((function(t){var o;return null===(o=null==e?void 0:e.responseHandler)||void 0===o||o.call(a,n({result:t},null!=r?r:{})),t})).catch((function(t){var o;return null===(o=null==e?void 0:e.errorHandler)||void 0===o?void 0:o.call(a,n({error:t},null!=r?r:{}))})).finally((function(){var t;null===(t=null==e?void 0:e.requestFinally)||void 0===t||t.call(a)}))]}))}))},e.prototype.get=function(e,n,i){return void 0===i&&(i={}),r(this,void 0,void 0,(function(){return o(this,(function(r){return[2,this.request({url:e,params:n,method:t.HttpMethod.GET,headers:i})]}))}))},e.prototype.post=function(e,n,i){return void 0===i&&(i={}),r(this,void 0,void 0,(function(){return o(this,(function(r){return[2,this.request({url:e,data:n,method:t.HttpMethod.POST,headers:i})]}))}))},e.prototype.patch=function(e,n,i){return void 0===i&&(i={}),r(this,void 0,void 0,(function(){return o(this,(function(r){return[2,this.request({url:e,data:n,method:t.HttpMethod.PATCH,headers:i})]}))}))},e.prototype.put=function(e,n,i){return void 0===i&&(i={}),r(this,void 0,void 0,(function(){return o(this,(function(r){return[2,this.request({url:e,data:n,method:t.HttpMethod.PUT,headers:i})]}))}))},e.prototype.delete=function(e,n,i){return void 0===i&&(i={}),r(this,void 0,void 0,(function(){return o(this,(function(r){return[2,this.request({url:e,data:n,method:t.HttpMethod.DELETE,headers:i})]}))}))},e.prototype.getBaseURL=function(){return this._options.baseUrl},e.prototype.setBaseURL=function(t){return this._options.baseUrl=null!=t?t:"",this},e.prototype.setRequestTimeout=function(t){return this._options.timeout=t,this},e.prototype.getInstance=function(){return this},e.prototype.create=function(t){return new e(t)},e}());t.EVENTS=i,t.XAjax=u,t.default=u,Object.defineProperty(t,"__esModule",{value:!0})}));