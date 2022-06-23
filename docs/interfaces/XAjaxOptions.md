[js-xajax - v1.0.1](../README.md) / XAjaxOptions

# Interface: XAjaxOptions<T\>

初始化配置项

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [baseUrl](XAjaxOptions.md#baseurl)
- [errorHandler](XAjaxOptions.md#errorhandler)
- [eventsHandler](XAjaxOptions.md#eventshandler)
- [raw](XAjaxOptions.md#raw)
- [requestHandler](XAjaxOptions.md#requesthandler)
- [responseHandler](XAjaxOptions.md#responsehandler)
- [setRequestHeaders](XAjaxOptions.md#setrequestheaders)
- [timeout](XAjaxOptions.md#timeout)
- [withCredentials](XAjaxOptions.md#withcredentials)

### Methods

- [dump](XAjaxOptions.md#dump)
- [load](XAjaxOptions.md#load)
- [requestFinally](XAjaxOptions.md#requestfinally)
- [xmlHttpRequest](XAjaxOptions.md#xmlhttprequest)

## Properties

### baseUrl

• `Optional` **baseUrl**: `string`

___

### errorHandler

• `Optional` **errorHandler**: `HandlerFunction`<`any`\>

___

### eventsHandler

• `Optional` **eventsHandler**: `Object`

#### Index signature

▪ [key: `string`]: () => `void`

___

### raw

• `Optional` **raw**: `boolean`

___

### requestHandler

• `Optional` **requestHandler**: `HandlerFunction`<`any`\>

___

### responseHandler

• `Optional` **responseHandler**: `HandlerFunction`<`any`\>

___

### setRequestHeaders

• `Optional` **setRequestHeaders**: `HandlerFunction`<`object`\>

___

### timeout

• `Optional` **timeout**: `number`

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

## Methods

### dump

▸ `Optional` **dump**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`string`

___

### load

▸ `Optional` **load**(`str`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`T`

___

### requestFinally

▸ `Optional` **requestFinally**(): `void`

#### Returns

`void`

___

### xmlHttpRequest

▸ `Optional` **xmlHttpRequest**(): `XMLHttpRequest`

#### Returns

`XMLHttpRequest`
