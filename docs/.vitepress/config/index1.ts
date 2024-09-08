import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh } from '.'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh },
  }
})
