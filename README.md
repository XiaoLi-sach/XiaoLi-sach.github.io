# XiaoLi-sach

我的个人博客，使用 next.js, Typescript, Mdx 以及 TailwindCSS 构建。

当然这也是一个播客模板，你可以使用它来构建你自己的播客。

[在线预览](blog.zhaozhongyuan.com)

## 项目结构

    ├── README.md
    ├── src
    │   ├── components
    │   │   ├── Card
    │   │   ├── XImg // 图片组件
    │   ├── styles
    │   │   ├── globals.css // 全局样式
    │   │   ├── markdown.scss // markdown 样式
    │   ├── pages
    │   │   ├── about // 关于页面
    │   │   ├── index.tsx // 首页
    │   │   ├── 404.tsx // 404 页面
    │   │   ├── _document.tsx
    │   │   ├── _app.tsx
    │   ├── posts // 在这里编写您的文章 mdx
    │   ├── layouts // 布局
    │   ├── config.ts // 项目的基本配置

`config.ts` 中内置了一些基本的配置，你可以在这里修改你的播客的基本信息。

`markdown.scss` 是对 markdown 的样式进行了一些调整，你可以在这里修改你的 markdown 样式。

## 使用

    pnpm install
    pnpm dev

## 功能

- [ ] 响应式
- [ ] SEO 优化
- [ ] 评论
- [x] 播客
- [x] 搜索
- [ ] 音乐播放器
- [x] 夜间模式
- [ ] 评论
