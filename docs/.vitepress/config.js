import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "发癫群附属综合医院",
  description: "发癫群附属综合医院官方网站",
  themeConfig: {
    logo: '/vite.svg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '关于本院',
        items: [
          { text: '关于本院', link: '/about/' },
          { text: '本院人员', link: '/about/staff' },
          { text: '特别赞助', link: '/about/sponsors' },
        ]
      },
      {
        text: '最新消息',
        items: [
          { text: '最新消息', link: '/news/' },
          { text: '公告', link: '/news/announcements' }
        ]
      },
      {
        text: '加入群聊',
        items: [
          { text: '院群', link: '/join/' },
          { text: '机器人群', link: '/join/robot' },
        ]
      }
    ],
    sidebar: [
      {
        text: '导航',
        items: [
          {
            text: '关于我们',
            collapsed: false,
            items: [
              { text: '团队介绍', link: '/about/' },
              { text: '成员列表', link: '/about/staff' },
              { text: '特别赞助', link: '/about/sponsors' },
            ]
          },
          {
            text: '最新消息',
            collapsed: false,
            items: [
              { text: '最新消息', link: '/news/' },
              { text: '公告', link: '/news/announcements' },
            ]
          },
          {
            text: '加入群聊',
            collapsed: false,
            items: [
              { text: '院群', link: '/join/' },
              { text: '机器人群', link: '/join/robot' },
            ]
          },
          // 其他导航项...
        ]
      }
    ],
    footer: {
      message: '由发癫群附属综合医院-汝可知jr 設計',
      copyright: 'Copyright © 2024 发癫群附属综合医院'
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})