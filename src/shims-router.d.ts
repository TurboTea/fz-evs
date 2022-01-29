import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    icon?: string
    title?: string
    level?: number
    showInAsideMenu?: boolean
    // 是否属于最左侧菜单
    leftAsideMenu?: boolean
    showInTopMenu?: boolean
    // 是否属于抽屉菜单
    drawerAsideMenu?: boolean
    // 是否固定
    fixed?: boolean
  }
}
