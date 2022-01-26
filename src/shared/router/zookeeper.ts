import { Router } from 'vue-router'
import { FIXED_ROUTES } from '@shared/router/constants'
// 路由白名单
const whiteList = [...FIXED_ROUTES.map(_ => _.name)]
export const zookeeper = (router: Router): void => {
  // 添加异常处理
  const originalPush = router.push
  router.push = to => {
    try {
      return originalPush(to)
    } catch (error) {
      console.log(`%c${error}`, 'color:red')
      return originalPush({ name: '401' })
    }
  }
  // router.beforeEach(async (to, from, next) => {
  //   const isInWhiteList = whiteList.indexOf(to.name as string) !== -1
  //   const authStore = useAuth()
  //   // 判断用户是否已经登录
  //   if (authStore.loginInfo?.token) {
  //     // 已登录
  //     if (isInWhiteList) {
  //       next({ name: 'home' })
  //     } else {
  //       next()
  //     }
  //   } else {
  //     if (isInWhiteList) {
  //       next()
  //     } else {
  //       window.location.replace(window.location.origin + '/login')
  //     }
  //   }
  // })
}
