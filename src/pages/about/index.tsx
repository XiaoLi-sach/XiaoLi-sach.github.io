import styles from './styles.module.scss'
import DefaultLayout from '@/layouts/Default'
import Link from 'next/link'

function about() {
  return (
    <DefaultLayout>
      <div className={`container p-10 py-12 ${styles.about}`}>
        <h2>🎨 关于本站</h2>
        <p>
          搭建它的初衷主要是为了练习新技术，其次是记录笔记 +
          分享一些平时遇到的问题解决经验，也是在学习React时写的。本站技术栈为 Next.js、MDX、Tailwind
          CSS、TypeScript
        </p>

        <h2 className={'text-2xl font-medium mt-10 mb-4'}>📜 本站历史</h2>
        <ul>
          <li>2022 - 至今，使用 Next.js 从零开发，部署在 Vercel</li>
          <li>2019 - 2022，初版使用 Hexo 搭建，部署在海外服务器</li>
        </ul>

        <h2>👶🏻 关于我</h2>
        <p>本名：赵忠远 一个前端开发工程师（2022年 - 至今），目前属于个人开发者，我的技能 👇🏻</p>
        <div className="flex items-start flex-wrap gap-2">
          {/*<Tag>React</Tag>*/}
          {/*<Tag>Vue2</Tag>*/}
          {/*<Tag>Angular2+</Tag>*/}
          {/*<Tag>TypeScript</Tag>*/}
          {/*<Tag>NodeJS</Tag>*/}
          {/*<Tag>Canvas</Tag>*/}
          {/*<Tag>WebRTC</Tag>*/}
          {/*<Tag>RxJS</Tag>*/}
          {/*<Tag>NestJS</Tag>*/}
          {/*<Tag>Next.js</Tag>*/}
          {/*<Tag>UmiJS</Tag>*/}
          ...
        </div>

        <h2>📮 找到我</h2>
        <ul>
          <li>
            Email - <Link href="mailto:loyal@npo.network">loyal@npo.network</Link>
          </li>
          <li>
            Github -{' '}
            <Link href="https://github.com/xiaoli-sach">https://github.com/xiaoli-sach</Link>
          </li>
        </ul>
      </div>
    </DefaultLayout>
  )
}

export default about
