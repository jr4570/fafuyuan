import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "发癫群附属综合医院",
  description: "让所有的患者健康发癫",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主頁', link: '/' },
      { text: '關於本院', link: '/info' },
      { text: '加入院群', link: '/join' }
    ],

    sidebar: [
      {
        text: '關於本院',
        items: [
          { text: '關於本院', link: '/info' },
          { text: '本院人員', link: '/team' },
          { text: '特别赞助', link: '/special-sponsorship' },
        ]
      },
      {
        text: '加入院群',
        items: [
          { text: '加入院群', link: '/join' }
        ]
      }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '由发癫群附属综合医院-汝可知jr 設計',
      copyright: 'Copyright © 2024 发癫群附属综合医院'
    },

    search: {
      provider: 'local'
    }
  }
})


