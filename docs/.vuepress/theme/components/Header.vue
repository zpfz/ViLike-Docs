<template>
  <div class="header">
    <div class="header-navbar">
      <ul>
        <li>
          <a :href="languagePack.currentPath" target="_self">{{ languagePack.currentLang == 'en_US' ? languagePack.en_US.languages : languagePack.zh_CN.languages }}</a>
        </li>
        <li>
          <a :href="languagePack.currentLang == 'en_US' ? `#${languagePack.en_US.changelog.toLowerCase()}` : `#${languagePack.zh_CN.changelog}`" target="_self" rel="noopener noreferrer">{{ languagePack.currentLang == 'en_US' ? languagePack.en_US.changelog : languagePack.zh_CN.changelog }}</a>
        </li>
        <li>
          <a :href="$themeConfig.repo" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
      </ul>
    </div>
    <div class="header-container">
      <h1>Vilike<i>.js</i></h1>
      <h2>{{ languagePack.currentLang == 'en_US' ? languagePack.en_US.description : languagePack.zh_CN.description }}</h2>
      <div class="header-badge">
        <img src="https://img.shields.io/badge/build-passing-brightgreen?style=flat-square" />
        <img src="https://img.shields.io/npm/dt/vilike?style=flat-square&color=blueviolet" />
        <img src="https://img.shields.io/github/package-json/v/zpfz/Vilike.js?style=flat-square&color=orange" />
        <img src="https://img.shields.io/github/license/zpfz/Vilike.js?style=flat-square&color=blue" />
        <iframe src="https://ghbtns.com/github-btn.html?user=zpfz&repo=Vilike.js&type=star&count=true" frameborder="0" scrolling="0" width="96" height="20" title="GitHub"></iframe>
      </div>
      <div>
        <div class="global-btn btn-1" style="margin-right:13px;" @click="Likes()">{{ languagePack.currentLang == 'en_US' ? `${likes} ${languagePack.en_US.likes}` : `${likes} ${languagePack.zh_CN.likes}` }}</div>
        <a href="#main">
          <div class="global-btn btn-2">
            {{ languagePack.currentLang == 'en_US' ? languagePack.en_US.start : languagePack.zh_CN.start }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      languagePack: {
        zh_CN: {
          changelog: '更新日志',
          languages: 'English',
          description: '一款轻量级访问量&点赞插件',
          likes: '喜欢',
          start: '快速上手',
          tip: '你已经点过赞啦！'
        },
        en_US:{
          changelog: 'Changelog',
          languages: '简体中文',
          description: 'A lightweight counts of visit and like plugin.',
          likes: 'Likes',
          start: 'Quick Start',
          tip: 'You\'ve already clicked on it !'
        },
        currentLang: 'en_US',
        currentPath: '#'
      },
      likes: 'Loading...',
    }
  },
  mounted(){
    this.languagePack.currentPath = this.$page.path == '/' ? '/zh_CN.html':'/';
    this.languagePack.currentLang = this.$page.path == '/' ? 'en_US' : 'zh_CN';
    Vilike.info('zpfz','vilike').then((result) => {
      this.likes = result.value;
    });
  },
  methods:{
    Likes(){    
      Vilike.exec('zpfz','vilike',1).then((result) => {
        this.likes = result.value;
        if (result.isHit) alert(this.languagePack.currentLang == 'en_US' ? this.languagePack.en_US.tip : this.languagePack.zh_CN.tip)
      });
    }
  }
};
</script>

<style lang="less">
@import '../styles/palette.less';
.header {
  display: table;
  background-color: @accentColor;
  text-align: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1.875rem;
  .header-navbar{
    margin-top: 1.25rem;
    ul{
      padding: 0;
      list-style: none;
      li{
        display: inline-block;
        padding: 0 20px;
        border-right: 1px solid rgba(255, 255, 255, .5);
        &:last-child{
          border-right: none;
        }
        a{
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .header-container {
    max-width: 1170px;
    margin: 6.25rem auto;
    font-family: inter,source sans pro,sans-serif;
    color: #fff;
    h1 {
      &:not(i){
        font-size: 4.8em;
      }
      i{
        font-weight: 250;
        font-style: normal;
      }
    }
    h2{
      font-size: 1.75rem;
      margin-bottom: 1.6rem;
    }
    .header-badge{
      margin-left: 1.5625rem;
      margin-bottom: 1.8rem;
      img{
        margin-right: .25rem;
      }
    }
  }
}
</style>
