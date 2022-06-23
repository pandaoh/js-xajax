[js-xajax - v1.0.1](../README.md) / requestConfig

# Interface: requestConfig<T\>

请求配置项

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [data](requestConfig.md#data)
- [headers](requestConfig.md#headers)
- [method](requestConfig.md#method)
- [params](requestConfig.md#params)
- [raw](requestConfig.md#raw)
- [url](requestConfig.md#url)

### Methods

- [dump](requestConfig.md#dump)
- [load](requestConfig.md#load)
- [xmlHttpRequest](requestConfig.md#xmlhttprequest)

## Properties

### data

• `Optional` **data**: `any`

___

### headers

• `Optional` **headers**: `Object`

#### Index signature

▪ [key: `string`]: `string`

___

### method

• **method**: [`HttpMethod`](../enums/HttpMethod.md)

___

### params

• `Optional` **params**: `any`

___

### raw

• `Optional` **raw**: `boolean`

___

### url

• **url**: `string`

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

### xmlHttpRequest

▸ `Optional` **xmlHttpRequest**(): `XMLHttpRequest`

#### Returns

`XMLHttpRequest`
