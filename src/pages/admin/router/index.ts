import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { SYSTEM_ROUTES } from '@shared/router/constants'
import { zookeeper } from '@shared/router/zookeeper'
//配置路由
export const formatRoute = arr => {
  return arr.map(_ => {
    const res = {
      ..._,
      children: formatRoute(_.children ?? []),
    }
    if (_.meta.element) {
      res.component = () => import(`@admin/views/${_.meta.fixed ? 'fixed' : 'cropped'}/${_.meta.element}`) || null
    } else {
      res.component = () => import(`@shared/layouts/pure-layout/index.vue`)
    }
    return res
  })
}
export const CROPPED_ROUTES = formatRoute(require(`@admin/json/routes.json`).children)
const FIXED_ROUTES: RouteRecordRaw[] = [
  {
    path: '',
    name: 'login-layout',
    redirect: 'login',
    component: () => import('@admin/layouts/login-layout/index.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@admin/views/fixed/login/index.vue'),
      },
    ],
  },
]
const routes = [
  {
    path: '',
    name: 'default',
    component: () => import('@admin/layouts/default-layout/index.vue'),
    props: { enableRouteFilter: true },
    children: [...CROPPED_ROUTES],
  },
  ...FIXED_ROUTES,
  ...SYSTEM_ROUTES,
]
export const router = createRouter({
  history: createWebHistory('/admin'),
  routes,
})
