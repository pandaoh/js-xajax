[js-xajax - v1.1.0](../README.md) / XAjaxClass

# Class: XAjaxClass

XAjaxClass 基础类

## Table of contents

### Constructors

- [constructor](XAjaxClass.md#constructor)

### Properties

- [\_defaultConfig](XAjaxClass.md#_defaultconfig)
- [\_options](XAjaxClass.md#_options)

### Methods

- [\_res](XAjaxClass.md#_res)
- [\_timeoutPromise](XAjaxClass.md#_timeoutpromise)
- [create](XAjaxClass.md#create)
- [delete](XAjaxClass.md#delete)
- [get](XAjaxClass.md#get)
- [getBaseURL](XAjaxClass.md#getbaseurl)
- [getInstance](XAjaxClass.md#getinstance)
- [patch](XAjaxClass.md#patch)
- [post](XAjaxClass.md#post)
- [put](XAjaxClass.md#put)
- [request](XAjaxClass.md#request)
- [setBaseURL](XAjaxClass.md#setbaseurl)
- [setRequestTimeout](XAjaxClass.md#setrequesttimeout)

## Constructors

### constructor

• **new XAjaxClass**(`options?`)

构造函数

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`XAjaxOptions`](../interfaces/XAjaxOptions.md)<`unknown`\> |

## Properties

### \_defaultConfig

• `Private` **\_defaultConfig**: [`XAjaxOptions`](../interfaces/XAjaxOptions.md)<`unknown`\>

默认配置项

**`memberof`** XAjaxClass

___

### \_options

• `Private` **\_options**: [`XAjaxOptions`](../interfaces/XAjaxOptions.md)<`unknown`\>

## Methods

### \_res

▸ `Private` **_res**(`xhr`, `data?`): `Response`

结果处理函数

#### Parameters

| Name | Type |
| :------ | :------ |
| `xhr` | `XMLHttpRequest` |
| `data?` | `string` \| `Record`<`string`, `unknown`\> |

#### Returns

`Response`

___

### \_timeoutPromise

▸ `Private` **_timeoutPromise**(`timeout`, `xhr`): `Promise`<`unknown`\>

超时措施

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |
| `xhr` | `XMLHttpRequest` |

#### Returns

`Promise`<`unknown`\>

___

### create

▸ **create**(`options?`): [`XAjaxClass`](XAjaxClass.md)

创建 XAjax 实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`XAjaxOptions`](../interfaces/XAjaxOptions.md)<`unknown`\> | XAjax 配置 |

#### Returns

[`XAjaxClass`](XAjaxClass.md)

___

### delete

▸ **delete**(`url`, `data?`, `headers?`): `Promise`<`any`\>

delete

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `data?` | `any` |  |
| `headers` | `any` | default[{}] |

#### Returns

`Promise`<`any`\>

___

### get

▸ **get**(`url`, `params?`, `headers?`): `Promise`<`any`\>

get

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `params?` | `any` |  |
| `headers` | `any` | default[{}] |

#### Returns

`Promise`<`any`\>

___

### getBaseURL

▸ **getBaseURL**(): `undefined` \| `string`

获取 baseURL

#### Returns

`undefined` \| `string`

___

### getInstance

▸ **getInstance**(): [`XAjaxClass`](XAjaxClass.md)

获取 XAjax 实例

**`memberof`** XAjax

#### Returns

[`XAjaxClass`](XAjaxClass.md)

___

### patch

▸ **patch**(`url`, `data?`, `headers?`): `Promise`<`any`\>

patch

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `data?` | `any` |  |
| `headers` | `any` | default[{}] |

#### Returns

`Promise`<`any`\>

___

### post

▸ **post**(`url`, `data?`, `headers?`): `Promise`<`any`\>

post

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `data?` | `any` |  |
| `headers` | `any` | default[{}] |

#### Returns

`Promise`<`any`\>

___

### put

▸ **put**(`url`, `data?`, `headers?`): `Promise`<`any`\>

put

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `data?` | `any` |  |
| `headers` | `any` | default[{}] |

#### Returns

`Promise`<`any`\>

___

### request

▸ **request**(`config`): `Promise`<`any`\>

XAjax Basic Request Function Template

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`requestConfig`](../interfaces/requestConfig.md)<`unknown`\> |

#### Returns

`Promise`<`any`\>

___

### setBaseURL

▸ **setBaseURL**(`url?`): [`XAjaxClass`](XAjaxClass.md)

设置 baseURL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` |

#### Returns

[`XAjaxClass`](XAjaxClass.md)

___

### setRequestTimeout

▸ **setRequestTimeout**(`timeout`): [`XAjaxClass`](XAjaxClass.md)

设置请求默认超时时间

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |

#### Returns

[`XAjaxClass`](XAjaxClass.md)
