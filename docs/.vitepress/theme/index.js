import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    if (typeof window !== 'undefined') {
      router.onBeforeRouteChange = () => {
        const content = document.querySelector('.VPContent')
        if (content) {
          content.classList.add('loading')
        }
      }
      router.onAfterRouteChanged = () => {
        const content = document.querySelector('.VPContent')
        if (content) {
          content.classList.remove('loading')
        }
      }
    }
  }
}