export interface NavbarItemConfig {
  text: string
  link: string
}

export interface NavbarConfig {
  name: string // 网站名称
  darkMode: boolean // 是否展示暗黑模式按钮
  navbarItem: NavbarItemConfig[] // 导航栏配置
  // TODO 以下配置项暂时不支持 后续会逐步支持
  dev: boolean // 是否启用实验模式
}
