---
id: vuepress
title: 在 Vuepress 中使用
---


## 安装
先在 `.vuepress/config.js` 的 `head` 字段配置以下代码：
```js
head: [
  ['script', 
  { 
    type: 'text/javascript', 
    src: 'https://cdn.jsdelivr.net/gh/bmob/hydrogen-js-sdk@2.2.3/dist/Bmob-2.2.3.min.js' 
  }],
]
```
然后给项目安装 ViLikeJS 库：
```sh
npm i vilike
```
或者
```sh
yarn add vilike
```

## 配置
在 `enhanceApp.js` 下配置以下代码：
```js {1,9,13-20,22}
import ViLike from 'vilike'

export default ({
  Vue,
  options,
  router,
  siteData,
}) => {
  Vue.use(ViLike)
}

// 请自行修改相关配置信息
ViLike.configure({
  secretKey: 'xxx',
  safeKey: 'xxx',
  table: 'xxx',
  key: 'xxx',
  visit: 'xxx',
  like: 'xxx'
});
// 初始化
ViLike.init();
```
## 使用
然后在你要实现访问量统计和点赞功能的页面参考下面的代码进行配置：
```js
<template>
  <div>
    <span>访问量：{{ this.visitNum }}</span>
    <span>点赞量：{{ this.likeNum }}</span>
    <button @click="handleLike" :disabled="isDisabled">点赞</button>
  </div>
</template>
<script>
  export default {
    name: 'Page',
    data(){
      return{
        visitNum: 0,
        likeNum: 0,
        isDisabled: false,
      }
    },
    methods:{
      handleLike(){
        ViLike.like('1192a75ccf48e109',(like)=>{
          // 点赞数即时更新
          this.likeNum = like
        })
      }
    },
    mounted() {
      ViLike.get('1192a75ccf48e109',(visit,like,islike)=>{
        // 访问量
        this.visitNum = visit
        // 点赞数
        this.likeNum = like
        // 点赞按钮逻辑
        if (islike){
          this.isDisabled = true
        }
      });
    },
    ...
  }
</script>
```
