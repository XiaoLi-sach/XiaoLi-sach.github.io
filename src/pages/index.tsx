import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import config from '@/config'

export default function Home() {
  const router = useRouter()

  const handlePagePush = (path: string) => {
    router.push(path)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>{config.name}</h1>
        </div>
        <div className={styles.flex}>
          <div className={styles.tag} onClick={() => handlePagePush('posts')}>
            Blogs
          </div>
          <div className={styles.tag} onClick={() => handlePagePush('tags')}>
            Tags
          </div>
          <div className={styles.tag} onClick={() => handlePagePush('github')}>
            Github
          </div>
          <div className={styles.tag} onClick={() => handlePagePush('bilibili')}>
            Bilibili
          </div>
          <div className={styles.tag} onClick={() => handlePagePush('about')}>
            About
          </div>
        </div>
        <div className={styles.img}></div>
      </main>
    </>
  )
}
