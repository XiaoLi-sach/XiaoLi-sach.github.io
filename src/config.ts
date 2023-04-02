import type { NavbarItemConfig, NavbarConfig } from '@/types/config'

const navbarItemConfig: NavbarItemConfig[] = [
  { text: '首页', link: '/posts' },
  { text: '归档', link: '/archives/' },
  { text: '标签', link: '/tags/' },
  { text: '观影', link: '/movies/' },
  { text: '阅读', link: '/books/' },
  { text: '友情链接', link: '/links/' },
  { text: '关于我', link: '/about/' }
]

const config: NavbarConfig = {
  name: 'XiaoLi_1456',
  navbarItem: navbarItemConfig,
  darkMode: true
}

export default config
