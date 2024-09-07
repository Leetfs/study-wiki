// https://vitepress.dev/guide/custom-theme
import './style.css'

import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme' // 导入默认主题

const theme: Theme = {
  ...DefaultTheme,
  // 你可以在这里扩展默认主题
}

export default theme
