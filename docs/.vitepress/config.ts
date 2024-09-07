// .vitepress/config.ts
import { defineConfig } from 'vitepress'

type NavConfig = DefaultTheme.Config['nav']

const nav: NavConfig = [
  {
    text: '数据库',
    link: '/sql/',
  },
  {
    text: '网页',
    link: '/web/',
  },
  {
    text: '计算机基础',
    link: '/computer/',
  },
  {
    text: '其它',
    link: '/others/',
  },
  {
    text: '贡献指南',
    items: [
      {
        text: '课程资料投稿指南',
        link: '/contributor-guide/campus.md',
      },
      {
        text: '其他投稿指南',
        link: '/contributor-guide/other.md',
      },
      {
        text: '课程贡献模板',
        link: '/contributor-guide/CampusTemplate.md',
      },
    ],
  },
]

const baseConfig = {
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  excludeFilesByFrontmatterFieldName: true,
  collapsed: true,
  documentRootPath: '/docs',
} satisfies Partial<SidebarOptions>

const sidebarOptions = [
  // 数据库
  {
    ...baseConfig,
    scanStartPath: 'sql',
    resolvePath: '/sql/',
  },
  // 贡献指南
  {
    ...baseConfig,
    scanStartPath: 'contributor-guide',
    resolvePath: '/contributor-guide/',
  },
  // 网页
  {
    ...baseConfig,
    scanStartPath: 'web',
    resolvePath: '/web/',
  },
  // 计算机基础
  {
    ...baseConfig,
    scanStartPath: 'computer',
    resolvePath: '/computer/',
  },
  // 其它
  {
    ...baseConfig,
    scanStartPath: 'others',
    resolvePath: '/others/',
  },
]

const themeConfig: ThemeContext = {
  siteTitle: 'study-wiki',
  siteDescription: '一份 课程 指北',
  /** Repo */
  githubRepoLink: 'https://github.com/Leetfs/study-wiki',
  /** vitepress 根目录 */
  rootDir: 'docs',
  /** 文档所在目录（目前似未使用此项） */
  include: ['web', 'contributor-guide', 'computer', 'sql', 'others'],
  nav,
  sidebarOptions,
}


// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: 'study-wiki',  // 设置网站的名称
    description: '这是一份学习笔记',  // 设置网站描述
    themeConfig: {
      // 其他主题配置项
    }
  })