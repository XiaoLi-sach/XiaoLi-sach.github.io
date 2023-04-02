export interface NavbarItemConfig {
  text: string
  link: string
}

export interface NavbarConfig {
  name: string
  darkMode: boolean // 是否展示暗黑模式按钮
  navbarItem: NavbarItemConfig[]
}
