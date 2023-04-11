import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import config from '@/config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={`${config.name}`}
        description="XiaoLi_1456's Blog 赵忠远的博客 赵忠远 个人博客 博客模板"
      />
      <Component {...pageProps} />
    </>
  )
}
