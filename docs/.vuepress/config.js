module.exports = {
  title: 'Vilike.js',
  description: 'A lightweight counts of visit and like plugin.',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' }],
    ['meta', { name: 'keywords', content: 'vilikejs,vilike,views,view,likes,like,visit,visits' }],
    ['meta', { name: 'referrer', content: 'never' }],
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
    ['link',{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inter:200,400,700,400italic'}],
  ],
  markdown: {
    lineNumbers: false,
  },
  plugins: {
    'sitemap': {
      hostname: 'https://vilike.pages.dev'
    },
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    repo: "https://github.com/zpfz/Vilike.js",
    editLinks: false
  },
};