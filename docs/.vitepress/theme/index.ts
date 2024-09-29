// docs/.vitepress/theme/index.ts

import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 自定义 Footer 组件
const CustomFooter = () => {
  return h('footer', { style: { textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' } }, [
    h('p', 'Released under the MIT License.'),
    h('p', 'Copyright © 2019-present Evan You'),
  ])
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      footer: () => h(CustomFooter), // 使用自定义的 Footer 组件
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 可以在这里添加全局组件、指令等
  }
} satisfies Theme
