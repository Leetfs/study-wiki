import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

import { getSidebar } from '../../../src/node/utils/getSidebar' // 根据项目结构调整路径

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '一份简单的学习笔记',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/computer/': { items: getSidebar('computer') }, //引入getSidebar函数，动态生成侧边栏
      '/web/': { items: getSidebar('web') },
      '/sql/': { items: getSidebar('sql') }
    },

    editLink: {
      pattern: 'https://github.com/Leetfs/study-wiki/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Lee`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'SQL',
      link: '/sql',
      activeMatch: '/sql/'
    },
    {
      text: 'Web',
      link: '/web',
      activeMatch: '/web/'
    },
    {
      text: '计算机基础',
      link: '/computer',
      activeMatch: '/computer/'
    },
    // {
    //   text: pkg.version, // 从 package.json 中获取版本号
    //   items: [
    //     {
    //       text: '更新日志',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: '参与贡献',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
    {
      text: '其他',
      items: [
        {
          text: '部署教程',
          link: '/others/1',
          activeMatch: '/others/'
        },
        {
          text: '贡献指南',
          link: '/others/2',
          activeMatch: '/others/'
        }
      ]
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
