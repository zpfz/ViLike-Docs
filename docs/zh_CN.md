---
title: Vilike.js - 一款轻量级访问量&点赞插件
---

::: success v0.2.0+ 更新说明
 v0.2.0 版本调用了 [countapi.xyz](https://countapi.xyz/) 相关 API，并且不再使用 Bmob 后端云服务。在使用本插件前，建议您仔细了解各种方法的用法。如果您单独想了解 CountAPI 服务，请直接访问 [countapi.xyz](https://countapi.xyz/)。
:::

## 安装
---

把 `Vilike.js` 添加进你的项目。

```js
<script src="https://unpkg.com/vilike/dist/Vilike.min.js"></script>
```

你可以从 [unpkg](https://unpkg.com/vilike/) or [jsdelivr](https://cdn.jsdelivr.net/gh/zpfz/Vilike.js/dist/) 获取相应的 CDN 链接。

Vilike.js 已经发布到 [npm](https://www.npmjs.com/package/vilike)，所以你也可以采用 NPM 的方式：  

```sh
npm install --save vilike
# 或者 yarn add vilike
```

## 基础用法
---
### Vilike.exec(pkey, skey, mode)  

通过 pkey 和 skey 获取返回的数据，初始值为 1。该方法每执行一次，CountAPI 服务端的数据将会自动加一。  
**备注：** 若 CountAPI 服务存在对应的 pkey 和 skey 则直接返回对应数据，否则将自动创建默认数据。

**参数说明：** 
- `pkey` : 填写需要查询的主键，不存在时自动创建并保持默认配置。
- `skey` : 填写需要查询的子键，不存在时自动创建并保持默认配置。
- `mode` : LocalStorage 模式，开启后可以通过 `isHit` 判断当前浏览器是否已经访问过。
  - `0` : 不开启 LocalStorage，请求成功后直接返回 `value` 值。
  - `1` : 开启 LocalStorage，请求成功后可返回 `isHit` 值。

**例如：**

```js
Vilike.exec('github','vilike',1).then((result) => {
  console.log(result);
});
```
**显示结果：**
```json
{
  isHit: true,
  value: 1
}
```
<br/>

## 高级用法  
---
### Vilike.create(pkey, skey, value, ctrl, upperbound)  
用于创建自定义数据，包括键值、数据可控性、数据可加性。

**参数说明：** 
- `pkey` : 主键，一般填写主域名，例如 `vilike.vercel.app` 等等。
- `skey` : 子键，填写具有唯一性的字符串，例如 Hash、MD5 等等。
- `value` : 数据初始值，默认值为 `0`。
- `ctrl` : 数据是否可更改，默认值为 `0`。
  - `0` : 数据锁定，无法使用 `Vilike.update` 方法进行更改数据。
  - `1` : 数据解锁，可使用 `Vilike.update` 方法进行更改数据。
- `upperbound` : 数据可加最大上限，默认值为 `1`。

**例如：**

```js
Vilike.create('github.zpfz','vilike', 82382, 1, 999).then((result) => {
  console.log(result);
});
```
**显示结果：**
```json
{
  key: "vilike"
  namespace: "github.zpfz"
  value: 82382
}
```

### Vilike.update(pkey, skey, value, type)
用于更新 pkey 和 skey 对应的值，前提是需要用 `Vilike.create` 方法创建数据并且保证 `ctrl` 的值为 `1`。

**参数说明：** 
- `pkey` : 填写需要查询的主键。
- `skey` : 填写需要查询的子键。
- `value` : 填写需要更新的值，默认值分两种情况：
  - `type` 为 `0` 时 : `value` 默认值为 `0`。
  - `type` 为 `1` 时 : `value` 默认值为 `1`。
- `type` : 设置数据更改类型。
  - `0` : 替换原有数据，可将原始数据进行替换。
  - `1` : 加数计数器，可在原始数据向上叠加。

**例 1：**

```js
Vilike.update('github.zpfz','vilike', 565, 0).then((result) => {
  console.log(result);
});
```

**显示结果：**
```json
{
  old_value: 82382,
  value: 565
}
```
**例 2：**

```js
Vilike.update('github.zpfz','vilike', 565, 1).then((result) => {
  console.log(result);
});
```

**显示结果：**
```json
{
  value: 1130
}
```
### Vilike.info(pkey, skey)
用于查询当前数据的所有信息。

**参数说明：** 
- `pkey` : 填写需要查询的主键。
- `skey` : 填写需要查询的子键。

**例如：**
```js
Vilike.info('github.zpfz','vilike').then((result) => {
  console.log(result);
});
```

**显示结果：**
```json
{
  created: 1622122993446
  enable_reset: true
  key: "vilike"
  namespace: "github.zpfz"
  ttl: 15769999666
  update_lowerbound: 0
  update_upperbound: 999
  value: 1130
}
```
**说明：** 上面字段依次为：创建时间、数据是否可更改、子键、主键、TTL、数据可减最大上限、数据可加最大上限、当前值。


<br/>

## 更新日志
---
### 0.2.0
  - 🌟 优化 API 服务，无需配置后端平台即可使用
  - 🌟 重构方法、属性，使用更简单

### 0.1.0
  - 🌟 支持点赞功能
  - 🌟 支持站点、文章页访问量统计

## 贡献者
---
感谢所有为该项目贡献的小伙伴哦~

![Feng L.H.](https://avatars2.githubusercontent.com/u/49757965?s=60&v=4)


## 许可
---
VilikeJS © 2020-present，左撇峰子在 [MIT License](https://mit-license.org/) 许可下发布 VilikeJS 。