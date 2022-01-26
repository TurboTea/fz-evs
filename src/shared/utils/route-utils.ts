// 过滤异步路由表
export function filterAsyncRoutes(routes, auth) {
  return routes.filter(route => {
    if (auth.some(_ => _.name === route.name)) {
      if (route.children?.length) {
        route.children = filterAsyncRoutes(route.children, auth)
      }
      return true
    } else {
      return false
    }
  })
}

// 判断是否有菜单权限
export function hasPermission(route, auth) {
  return route.meta.code
    ? auth.some(item => {
        return route.meta.code === item.menuId
      })
    : true
}
