export interface IPost {
  slug: string
  date: string
  thumbnail: string // 图片地址
  title: string // 标题
  tag: string // 标签
  description: string // 简介
  prerequisites: string[] // 前置知识
  stacks: string[] // 使用技术
  frontmatter: PostFrontMatter
}

interface PostFrontMatter {
  title: string // 标题
  date: string // 日期
  tag?: string[] // 标签
  toc: boolean // 是否显示目录
  update?: string // 更新日期
  image?: string // 图片地址
  pinned?: boolean // 是否置顶显示
  stacks: string[] // 使用技术
}
