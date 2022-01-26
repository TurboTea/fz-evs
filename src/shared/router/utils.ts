//配置路由
export const formatRoute = (name, arr) => {
  return arr.map(_ => {
    const res = {
      ..._,
      children: formatRoute(name, _.children ?? []),
    }
    if (_.meta.element) {
      res.component = () => import(`@${name}/views/cropped/${_.meta.element}`) || null
    } else {
      res.component = () => import(`@shared/layouts/pure-layout/index.vue`)
    }
    return res
  })
}
