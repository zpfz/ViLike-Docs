---
id: getting-started
title: 开始使用
---

## 引用库
在使用之前，你需要给你的项目引入 [Bmob](https://github.com/bmob/hydrogen-js-sdk/tree/master/dist) 和 [ViLikeJS](https://github.com/zpfz/ViLikeJS/tree/master/dist) ：

```js
<script src="https://cdn.jsdelivr.net/gh/bmob/hydrogen-js-sdk@2.2.3/dist/Bmob-2.2.3.min.js"></script>
<script src="https://unpkg.com/vilike@0.1.0-beta/index.js"></script>
```
当然，你也可以以包的形式进行安装：

```sh
npm i vilike
```

或者

```sh
yarn add vilike
```

## 初始化
引用完毕后，在你项目入口文件进行以下配置：

```js
ViLike.configure({
  secretKey: 'Your Secret Key',
  safeKey: 'Your Safe Key',
  table: 'Table Name',
  key: 'Key Prop Name(Not Value)',
  visit: 'Visit Prop Name',
  like: 'Like Prop Name'
});
```

其中，相关参数说明如下：  
`secretKey`：填写你的 Secret Key ，在 Bmob 后台“设置”-“应用密钥”即可看到 Secret Key；  
`safeKey`：填写你的安全码；  
`table`：数据表名称；   
`key`：表字段名称，用于索引；    
`visit`：表字段名称，用于访问量记录；     
`like`：表字段名称，用于点赞记录；     

配置相关信息后，就可以开始进行初始化：
```js
ViLike.init();
```

很棒！接下来就尝试一下插件的功能吧！

## APIs

### ViLike.get(key,(visit,like,islike)=>{})

用于获取访问量、点赞数以及点赞状态，例如：

```js
ViLike.get('1192a75ccf48e109',(visit,like,islike)=>{
  // 依次显示 访问量、点赞数、点赞状态
  console.log(visit,like,islike)
});
```

key 是从 Bmob 后端云写入和读取的唯一标识，获取或操作访问量和点赞数都会使用到它，所以请确保 key 存入时是唯一的（建议 Bmob 后台设置好唯一键，预防错误情况产生）。  
而 islike 是用于获取点赞的状态：当用户已经点赞过时，其返回值为 True，反之为 False。一般可用于判断点赞按钮的状态，比如当用户点赞过这篇文章时，点赞按钮的状态应当是不可用。

:::note 关于周期

考虑一般情况下用户不会经常清理浏览器数据，所以插件采用 Localstorage 技术来判别访问量计数和点赞的状态，这样可以使访问量计数和点赞的状态保持较长的周期。当用户一旦清空浏览器数据，访问量计数会继续统计，点赞状态也会恢复默认状态。
:::

### ViLike.like(key,(like)=>{})

用于实现点赞计数功能，例如：
```js
ViLike.like('1192a75ccf48e109',(like)=>{
  // 显示点赞后最新的点赞数
  console.log(like)
})
```
一般用于按钮的 Click 事件：用户每点击按钮一次，点赞数就会+1。