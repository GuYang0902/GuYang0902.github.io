import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "顾",
  description: "A Blog Site",
  outDir: "../dist",
  base: '/dist/', // base url
  lastUpdated: true,
  head: [["meta", { name: "keywords", content: "HTML, CSS, JavaScript" }]],
  //启用深色模式
  appearance: "dark",
  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdatedText: "最近更新时间",
    // logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "🍉指南",
        items: [
          {
            // 分组标题1
            text: "介绍",
            items: [{ text: "前言", link: "/guide/preface" }],
          },
          {
            // 分组标题2
            text: "基础设置",
            items: [
              { text: "快速上手", link: "/guide/getting-started" },
              { text: "配置", link: "/guide/configuration" },
              { text: "页面", link: "/guide/page" },
              { text: "Frontmatter", link: "/guide/frontmatter" },
            ],
          },
          {
            // 分组标题3
            text: "进阶玩法",
            items: [
              { text: "Markdown", link: "/guide/markdown" },
              { text: "团队", link: "/guide/team" },
              { text: "静态部署", link: "/guide/assets" },
            ],
          },
        ],
      },
      {
        text: "😆项目",
        items: [
          {
            // 分组标题1
            text: "",
            items: [
              { text: "数据查询页", link: "http://www.guyang.site:18085" },
              { text: "单件分离", link: "http://www.guyang.site:18086/#/singleseperator/index" },
              { text: "Scada页面", link: "http://www.guyang.site:18086/#/scada1/index" },
            ],
          },
        ],
      },
      { text: "博客", link: "/blog/assets" },
      { text: "VitePress", link: "https://vitepress.dev/" },
    ],
    //侧边栏
    sidebar: {
      "/guide/": [
        {
          //分组标题1
          text: "介绍",
          collapsed: false,
          items: [{ text: "前言", link: "/guide//preface" }],
        },
        {
          //分组标题2
          text: "基础配置",
          collapsed: false,
          items: [
            { text: "快速上手", link: "/guide//getting-started" },
            { text: "配置", link: "/guide//configuration" },
            { text: "页面", link: "/guide//page" },
            { text: "Frontmatter", link: "/guide//frontmatter" },
          ],
        },
        {
          //分组标题3
          text: "进阶玩法",
          collapsed: false,
          items: [
            { text: "Markdown", link: "/guide//markdown" },
            { text: "团队", link: "/guide//team" },
            { text: "静态部署", link: "/guide//assets" },
          ],
        },
        {
          //分组标题3
          text: "其他站点",
          collapsed: false,
          items: [
            { text: "VuePress", link: "https://vuepress.yiov.top/" },
            { text: "劝学录教程", link: "https://yiov.top/" },
            { text: "个人主页", link: "https://yingyayi.com/" },
          ],
        },
      ],
      "/blog/": [
        {
          //分组标题3
          text: "进阶玩法",
          collapsed: false,
          items: [{ text: "aaaaaa啊啊", link: "/guide/assets" }],
        },
      ],
    },

    // //本地搜索
    // search: {
    //   provider: "local",
    //   options: {
    //     locales: {
    //       zh: {
    //         translations: {
    //           button: {
    //             buttonText: "搜索文档",
    //             buttonAriaLabel: "搜索文档",
    //           },
    //           modal: {
    //             noResultsText: "无法找到相关结果",
    //             resetButtonTitle: "清除查询条件",
    //             footer: {
    //               selectText: "选择",
    //               navigateText: "切换",
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: '<a href="https://beian.miit.gov.cn/">沪ICP备18037948号-1</a>',
      copyright:
        'Copyright © 2017-present Yang Gu </br><a href="http://www.baidu.com">联系方式点此</a>',
    },
    //手机端深浅模式文字修改
    darkModeSwitchLabel: "深浅模式",
    //侧边栏文字更改(移动端)
    sidebarMenuLabel: "目录",

    //返回顶部文字修改(移动端)
    returnToTopLabel: "返回顶部",

    //大纲显示2-3级标题
    outline: [2, 3],
    //大纲顶部标题
    outlineTitle: "当前页大纲",
    docFooter: { prev: "上一页", next: "下一页" },
    // editLink: {
    //   pattern: "https://www.baidu.com",
    //   text: "找我",
    // },
  },
});
