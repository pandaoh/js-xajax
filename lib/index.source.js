'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

exports.HttpMethod = void 0;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["get"] = "GET";
    HttpMethod["post"] = "POST";
    HttpMethod["put"] = "PUT";
    HttpMethod["patch"] = "PATCH";
    HttpMethod["delete"] = "DELETE";
    HttpMethod["options"] = "OPTIONS";
})(exports.HttpMethod || (exports.HttpMethod = {}));
var EVENTS = {
    READY_STATE_CHANGE: 'readystatechange',
    LOAD_START: 'loadstart',
    PROGRESS: 'progress',
    ABORT: 'abort',
    ERROR: 'error',
    LOAD: 'load',
    TIMEOUT: 'timeout',
    LOAD_END: 'loadend'
};
var XAjaxClass = (function () {
    function XAjaxClass(options) {
        this._defaultConfig = {
            dump: JSON.stringify,
            load: JSON.parse,
            xmlHttpRequest: function () { return new XMLHttpRequest(); },
            timeout: 30000,
            baseUrl: '',
            withCredentials: false
        };
        this._timeoutPromise = function (timeout, xhr) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    xhr === null || xhr === void 0 ? void 0 : xhr.abort();
                }, timeout);
            });
        };
        this._res = function (xhr, data) { return ({
            status: xhr.status,
            statusText: xhr.statusText,
            response: xhr.response,
            data: data,
            xhr: xhr
        }); };
        this._options = __assign(__assign({}, this._defaultConfig), options);
        return this;
    }
    XAjaxClass.prototype.request = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var xhrOpts, requestInfo, xhr, xhrInstance;
            var _this = this;
            return __generator(this, function (_a) {
                xhrOpts = __assign(__assign({}, this._options), config);
                xhrInstance = new Promise(function (resolve, reject) {
                    var _a, _b, _c, _d;
                    xhr = xhrOpts.xmlHttpRequest();
                    if (xhrOpts.url === undefined)
                        throw new Error('No URL defined');
                    var reqUrl = xhrOpts.url.includes('://')
                        ? xhrOpts.url
                        : (xhrOpts.baseUrl + xhrOpts.url).replace(/([^\:])\/\//g, '$1/');
                    if (config.params) {
                        reqUrl += "".concat(reqUrl.includes('?') ? '&' : '?').concat(new URLSearchParams(xhrOpts.params).toString());
                    }
                    xhr.open(xhrOpts.method, reqUrl, true);
                    xhr.withCredentials = (_a = xhrOpts.withCredentials) !== null && _a !== void 0 ? _a : false;
                    xhr.addEventListener(EVENTS.LOAD, function () {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            var responseData = void 0;
                            if (xhr.responseText) {
                                console.log({ responseText: xhr.responseText });
                                responseData = xhrOpts.raw === true ? xhr.responseText : xhrOpts.load(xhr.responseText);
                            }
                            resolve(_this._res(xhr, responseData));
                        }
                        else {
                            reject(_this._res(xhr));
                        }
                    });
                    xhr.addEventListener(EVENTS.ABORT, function () { return reject(_this._res(xhr)); });
                    xhr.addEventListener(EVENTS.ERROR, function () { return reject(_this._res(xhr)); });
                    xhr.addEventListener(EVENTS.TIMEOUT, function () { return reject(_this._res(xhr)); });
                    var headers = __assign({ Accept: 'application/json', 'Content-Type': 'application/json' }, ((_b = xhrOpts.headers) !== null && _b !== void 0 ? _b : {}));
                    (_c = xhrOpts === null || xhrOpts === void 0 ? void 0 : xhrOpts.setRequestHeaders) === null || _c === void 0 ? void 0 : _c.call(_this, headers);
                    for (var k in headers) {
                        if (!{}.hasOwnProperty.call(headers, k))
                            continue;
                        xhr.setRequestHeader(k, headers[k]);
                    }
                    if (xhrOpts.eventsHandler) {
                        for (var k in xhrOpts.eventsHandler) {
                            if (!{}.hasOwnProperty.call(xhrOpts.eventsHandler, k))
                                continue;
                            xhr.addEventListener(k, xhrOpts.eventsHandler[k].bind(null, xhr), false);
                        }
                    }
                    var data = typeof xhrOpts.data === 'object' && !xhrOpts.raw ? xhrOpts.dump(xhrOpts.data) : xhrOpts.data;
                    requestInfo = __assign(__assign({ xhr: xhr }, config), { fullUrl: reqUrl, headers: headers });
                    (_d = xhrOpts === null || xhrOpts === void 0 ? void 0 : xhrOpts.requestHandler) === null || _d === void 0 ? void 0 : _d.call(_this, requestInfo);
                    xhr.send(data !== undefined ? data : null);
                });
                return [2, Promise.race([this._timeoutPromise(xhrOpts.timeout, xhr), xhrInstance])
                        .then(function (result) {
                        var _a;
                        (_a = xhrOpts === null || xhrOpts === void 0 ? void 0 : xhrOpts.responseHandler) === null || _a === void 0 ? void 0 : _a.call(_this, __assign({ result: result }, (requestInfo !== null && requestInfo !== void 0 ? requestInfo : {})));
                        return result;
                    })
                        .catch(function (error) {
                        var _a;
                        return (_a = xhrOpts === null || xhrOpts === void 0 ? void 0 : xhrOpts.errorHandler) === null || _a === void 0 ? void 0 : _a.call(_this, __assign({ error: error }, (requestInfo !== null && requestInfo !== void 0 ? requestInfo : {})));
                    })
                        .finally(function () {
                        var _a;
                        (_a = xhrOpts === null || xhrOpts === void 0 ? void 0 : xhrOpts.requestFinally) === null || _a === void 0 ? void 0 : _a.call(_this);
                    })];
            });
        });
    };
    XAjaxClass.prototype.get = function (url, params, headers) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request({ url: url, params: params, method: exports.HttpMethod.GET, headers: headers })];
            });
        });
    };
    XAjaxClass.prototype.post = function (url, data, headers) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request({ url: url, data: data, method: exports.HttpMethod.POST, headers: headers })];
            });
        });
    };
    XAjaxClass.prototype.patch = function (url, data, headers) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request({ url: url, data: data, method: exports.HttpMethod.PATCH, headers: headers })];
            });
        });
    };
    XAjaxClass.prototype.put = function (url, data, headers) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request({ url: url, data: data, method: exports.HttpMethod.PUT, headers: headers })];
            });
        });
    };
    XAjaxClass.prototype.delete = function (url, data, headers) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.request({ url: url, data: data, method: exports.HttpMethod.DELETE, headers: headers })];
            });
        });
    };
    XAjaxClass.prototype.getBaseURL = function () {
        return this._options.baseUrl;
    };
    XAjaxClass.prototype.setBaseURL = function (url) {
        this._options.baseUrl = url !== null && url !== void 0 ? url : '';
        return this;
    };
    XAjaxClass.prototype.setRequestTimeout = function (timeout) {
        this._options.timeout = timeout;
        return this;
    };
    XAjaxClass.prototype.getInstance = function () {
        return this;
    };
    XAjaxClass.prototype.create = function (options) {
        return new XAjaxClass(options);
    };
    return XAjaxClass;
}());
var XAjax = new XAjaxClass();

exports.EVENTS = EVENTS;
exports.XAjax = XAjax;
exports["default"] = XAjax;
