import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh } from './zh'
import readingTimePlugin from 'vitepress-reading-time'

export default defineConfig({
  plugins: [readingTimePlugin()],
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh }
  }
})
