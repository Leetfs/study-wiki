---
layout: home

title: study-wiki
titleTemplate: 一份简单的学习笔记

hero:
  name: study-wiki
  text: 一份简单的学习笔记
  tagline: 使用 VitePress 部署(测试成功，记得删这行)
  actions:
    - theme: brand
      text: Web
      link: /web/
    - theme: alt
      text: SQL
      link: /sql/
    - theme: alt
      text: 计算机基础
      link: /computer/
  image:
      src: /vitepress-logo-large.webp
      alt: VitePress

features:
  - icon: 📝
    title: 基础知识
    details: 涵盖学习中的核心概念，打好基础。
  - icon: 🚀
    title: 进阶技巧
    details: 探索实用的技巧与高效的学习方法。
  - icon: 🛠️
    title: 项目实践
    details: 通过实践项目巩固理论知识，提升动手能力。
  - icon: 📚
    title: 学习资源
    details: 汇总学习中用到的工具、文章和书籍等资源。

---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff) !important;

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%) !important;
  --vp-home-hero-image-filter: blur(44px) !important;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px) !important;
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px) !important;
  }
}
</style>
