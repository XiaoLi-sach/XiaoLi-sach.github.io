import Head from 'next/head'
import styles from '@/styles/Blog.module.scss'
import Layout from '@/layouts/Default'
import Card from '@/components/Card'
import TagPanel from '@/components/TagPanel'

import { IPost } from '@/types/post'
import { getAllPosts } from '@/utils/post'
import type { GetStaticProps } from 'next'
import config from '@/config'
import { useRouter } from 'next/router'
import Pagination from '@/components/Pagination'
import { useState } from 'react'

type Props = {
  posts: [IPost]
}

function blog({ posts }: Props) {
  const router = useRouter()
  const [current, setCurrent] = useState(1) // 当前页
  const [post, setPost] = useState(pagePagination(posts, 1, 10)) // 当前页的文章

  // 获取所有标签
  const getAllTags = () => {
    return posts.map((post) => post.tag).filter((tag, index, self) => self.indexOf(tag) === index)
  }

  const handleClick = (slug: string) => {
    router.push(`/posts/${slug}`)
  }

  const getPosts = (size: number) => {
    return pagePagination(posts, size, 10)
  }


  const handlePrevClick = () => {
    if (current > 1) {
      setCurrent(current - 1)
      setPost(getPosts(current - 1))
    }
  }

  const handleNextClick = () => {
    if (current < post.total_pages) {
      setCurrent(current + 1)
      setPost(getPosts(current + 1))
    }
  }

  const handlePaginationChange = (val: number) => {
    console.log(val)
    setCurrent(val)
    setPost(getPosts(val))
  }

  return (
    <Layout>
      <Head>
        <title>{config.name} | Blog</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.left}>
          {
            post.data.map((post) => {
              return (
                <Card
                  tag={post.tag}
                  content={post.description}
                  title={post.title}
                  handleClick={() => handleClick(post.slug)}
                />
              )
            })
          }
          <Pagination
            page_size={1}
            total={post.total_pages}
            sizeChange={handlePaginationChange}
            current={current}
            prevClick={handlePrevClick}
            nextClick={handleNextClick}
          />
        </div>
        <div className={`${styles.right}`}>
          <TagPanel tags={getAllTags()} />
        </div>
      </main>
    </Layout>
  )
}

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['title', 'tag', 'slug', 'date', 'description', 'thumbnail'])

  return { props: { posts } }
}

/**
 * 分页
 * @param posts 文章
 * @param page 页码
 * @param limit 每页数量
 */
const pagePagination = (posts: [IPost], page: number, limit: number) => {
  const offset = (page - 1) * limit
  const paginatedItems = posts.slice(offset).slice(0, limit)
  const total_pages = Math.ceil(posts.length / limit)

  return {
    page,
    per_page: limit,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: posts.length,
    total_pages,
    data: paginatedItems
  }
}

export default blog
