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

type Props = {
  posts: [IPost]
}

function blog({ posts }: Props) {
  const router = useRouter()

  const getPostsTag = () => {
    const tags: Set<string> = new Set()
    posts.forEach((post) => {
      tags.add(post.tag)
    })
    return tags
  }
  console.log(posts)

  const handleClick = (slug: string) => {
    router.push(`/posts/${slug}`)
  }

  return (
    <Layout>
      <Head>
        <title>{config.name} | Blog</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.left}>
          {posts.map((post) => {
            return (
              <Card
                tag={post.tag}
                content={post.description}
                title={post.title}
                handleClick={() => handleClick(post.slug)}
              />
            )
          })}
        </div>
        <div className={styles.right}>
          <TagPanel></TagPanel>
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
export default blog
