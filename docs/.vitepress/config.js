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
      },
      {
        text: 'F.F.Y Network',
        items: [
          { text: '关于F.F.Y Network', link: '/FFYNetwork/' },
          { text: '人员', link: '/FFYNetwork/staff' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '特别赞助', link: '/other/sponsors' },
          { text: '版权', link: '/other/' },
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
              { text: '关于本院', link: '/about/' },
              { text: '本院人员', link: '/about/staff' },
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
          {
            text: 'F.F.Y Network',
            collapsed: false,
            items: [
              { text: '关于F.F.Y Network', link: '/FFYNetwork/' },
              { text: '人员', link: '/FFYNetwork/staff' },
            ]
          },
          {
            text: '其他',
            collapsed: false,
            items: [
              { text: '特别赞助', link: '/other/sponsors' },
              { text: '版权', link: '/other/' },
            ]
          },
          // 其他导航项...
        ]
      }
    ],
    footer: {
      message: '由发癫群附属综合医院-F.F.Y Network 汝可知jr 设计',
      copyright: 'Copyright © 2024 发癫群附属综合医院-F.F.Y Network'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '没有找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                }
              }
            }
          },
        }
      }
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bilibili</title><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>'
        },
        link: 'https://b23.tv/8vaQi4D'
      },
      { icon: 'github', link: 'https://github.com/jr4570/fafuyuan/' },
    ],
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
