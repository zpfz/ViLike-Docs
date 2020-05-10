module.exports = {
  title: 'ViLike JS',
  tagline: '一款基于Bmob后端云轻量级的访问量&点赞插件',
  url: 'https://vilike.seeyoz.cn/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'SEEYOZ', // Usually your GitHub org/user name.
  projectName: 'ViLikeJS', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ViLike JS',
      logo: {
        alt: 'ViLike JS',
        src: 'img/logo.png',
        srcDark: '/img/logo-white.png',
      },
      links: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {
          href: 'https://github.com/zpfz/ViLikeJS',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/doc1',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      // logo: {
      //   alt: "ViLikeJS",
      //   src: "/img/logo-white.png",
      //   href: "https://opensource.facebook.com/"
      // },
      copyright: `MIT Licensed | Copyright © ${new Date().getFullYear()} Feng Left-Handed.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/zpfz/ViLikeJS-Docs/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
