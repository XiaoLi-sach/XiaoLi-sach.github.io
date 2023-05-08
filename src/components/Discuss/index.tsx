import Gitalk from 'gitalk'
// import Gitalk from 'gitalk/dist/gitalk-component'
import { useEffect } from 'react'

interface Props {
  pathname: string // 文章id
}

const discuss = (props: Props) => {
  const { pathname } = props
  const gitalk = new Gitalk({
    clientID: 'f77a2b08e60dc5644404',
    clientSecret: '45363f5954f20ebea01f17649bd59c6ba3171fc4',
    repo: 'XiaoLi-sach.github.io',
    owner: 'XiaoLi-sach',
    admin: ['XiaoLi-sach'],
    title: pathname,  // Issue 的标题
    id: pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
  })

  useEffect(() => {
    return () => {
      gitalk.render('gitalk-container')
    }
  }, [])
  return (
    <div id="gitalk-container"></div>
  )
}

export default discuss
