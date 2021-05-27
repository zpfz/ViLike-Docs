const path = require('path')

// Theme API.
module.exports = (options, ctx) => {
  const { sep } = path
  const { themeConfig, siteConfig, sourceDir } = ctx

  return {
    chainWebpack: config=> {
      config.module
        .rule('less')
        .oneOf('normal')
        .use('less-loader')
        .options({ javascriptEnabled: true })
        .end()
        .end()
        .oneOf('modules')
        .use('less-loader')
        .options({ javascriptEnabled: true })
    },
    alias () {
      return {
        '@docs': `${sourceDir}${sep}.vuepress${sep}styles`
      }
    },
    
    plugins: [
      ['@vuepress/last-updated',false],
      ['@vuepress/nprogress'],
      ['vuepress-plugin-smooth-scroll'],
      ['container', {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP'
        }
      }],
      ['container', {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING'
        }
      }],
      ['container', {
        type: 'danger',
        defaultTitle: {
          '/': 'WARNING'
        }
      }],
      ['container', {
        type: 'success',
        defaultTitle: {
          '/': 'SUCCESS'
        }
      }],
      ['container', {
        type: 'details',
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
        after: () => '</details>\n'
      }]
    ] 
  }
}
