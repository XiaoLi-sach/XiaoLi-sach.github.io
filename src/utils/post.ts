import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

type Items = {
  [key: string]: string
}

type Post = {
  data: {
    [key: string]: string
  }
  content: string
}

// 存放文章的路径
const POSTS_PATH = join(process.cwd(), 'src/posts')

function getPostsFilePaths(): string[] {
  return fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))
}

export function getPost(slug: string): Post {
  // 获取文件路径
  const fullPath = join(POSTS_PATH, `${slug}.mdx`)
  // 内容
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  // 获取数据
  const { data, content } = matter(fileContents)
  return { data, content }
}

export function getPostItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '')
  const post = getPost(slug)

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }

    if (field === 'content') {
      items[field] = post.content
    }

    if (post.data[field]) {
      items[field] = post.data[field]
    }
  })

  return items
}

// 获取所有文章 filds 是指定获取的字段
export function getAllPosts(fields: string[]): Items[] {
  const filePaths = getPostsFilePaths()
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    .sort((post1, post2) => (post1.date > post2.date ? 1 : -1))
  return posts
}
