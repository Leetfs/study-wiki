# Study-Wiki

Study-Wiki 是一个基于 VitePress 构建的学习笔记文档项目，通过 GitHub Actions 自动部署到 Cloudflare Pages。

## 功能概述

- 使用 VitePress 构建文档站点
- 支持多语言（默认首页设置为 `docs/zh`）
- 新增自动生成目录的侧边栏功能(src\node\utils\getSidebar.ts)，调用参考(docs\.vitepress\config\zh.ts)
- 使用 GitHub Actions 实现自动部署到 Cloudflare Pages

## 引用项目

- [VitePress](https://github.com/vuejs/vitepress)：用于生成静态网站的 Vite 驱动文档生成工具
- [Cloudflare Pages](https://pages.cloudflare.com/)：用于部署静态网站
- [GitHub Actions](https://github.com/features/actions)：用于自动化构建和部署流程

## 我的更改

1. **侧边栏自动生成**：我创建了一个 `getSidebar` 函数，动态生成每个文件夹的侧边栏结构，并包含 `collapsed` 属性，确保更好的导航体验。
   
2. **首页自定义**：通过样式修改，调整首页 hero 部分的背景和模糊效果，使用 CSS 变量管理不同屏幕尺寸下的模糊程度。

3. **多语言支持**：默认将首页设置为 `docs/zh`，并引入 `getSidebar` 函数到 `zh.ts` 文件中。

4. **自动部署流程**：配置了 GitHub Actions 来自动构建和部署项目到 Cloudflare Pages，使用 Wrangler v3 进行部署。

## 许可证

- 本项目基于 MIT 许可证发布。详细信息请参阅 LICENSE 文件。