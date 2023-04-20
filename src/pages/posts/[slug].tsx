import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { IPost } from '@/types/post'
import { getPost, getAllPosts } from '@/utils/post'
import Prerequisites from '@/context/Prerequisites'
import { ParsedUrlQuery } from 'querystring'
import Stacks from '@/context/Stacks'
import DefaultLayout from '@/layouts/Default'
import { MdxContext } from '@/utils/context'

// props type
type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<IPost, 'slug'>
}

const components = {
  Prerequisites,
  Stacks
}

interface Iparams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  // get the slug
  const { content, data } = getPost(slug)
  // serialize the data on the server side
  const mdxSource = await serialize(content, { scope: data })
  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  //only get the slug from posts
  const posts = getAllPosts(['slug'])

  // map through to return post paths
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  const [prerequisites, setPrerequisites] = useState<string[]>([])
  const [stacks, setStacks] = useState<string[]>([])

  useEffect(() => {
    // set prerequisites
    setPrerequisites(frontMatter.prerequisites)
    // set stacks
    setStacks(frontMatter.stacks)
  }, [setPrerequisites, setStacks, frontMatter.prerequisites, frontMatter.stacks])

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.title} />
        <meta name="keywords" content={frontMatter.title} />
      </Head>
      <MdxContext.Provider
        value={{
          prerequisites,
          setPrerequisites,
          stacks,
          setStacks
        }}
      >
        <DefaultLayout>
          <article className="prose prose-xl prose-slate dark:prose-invert dark:bg-slate-800 w-full mt-10 p-3">
            {/*<div className="mb-4">*/}
            {/*  <XImg title={frontMatter.title} src={frontMatter.thumbnail} />*/}
            {/*</div>*/}

            <h1>{frontMatter.title}</h1>

            {/*<p>{frontMatter.description}</p>*/}

            <MDXRemote components={components} {...source} />
          </article>
        </DefaultLayout>
      </MdxContext.Provider>
    </>
  )
}

export default PostPage
