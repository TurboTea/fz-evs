<template>
  <!--  <g-query-wrapper :data="menuData" :loading="menuLoading" :error="menuError" :run="menuRun">-->
  <el-menu
    :default-active="currentActiveRoute"
    :background-color="themeFlag === 'light' ? 'transparent' : isCollapse ? '#151930' : '#1f2a37'"
    :text-color="themeFlag === 'light' ? '#374151' : '#ffffff'"
    :active-text-color="themeFlag === 'light' ? '#047857' : '#6EE7B7'"
    :collapse="isCollapse"
    :default-openeds="['home']"
    class="border-none"
    mode="horizontal"
  >
    <top-menu-item
      v-for="menu in $router.options.routes.find(_ => _.name === 'default').children.filter(_ => _.meta.showInTopMenu)"
      :key="menu.name"
      :menu="menu"
    />
  </el-menu>
  <!--  </g-query-wrapper>-->
</template>
<script lang="ts">
export default {
  name: 'top-menu-list',
}
</script>
<script lang="ts" setup>
import { useUser } from '@shared/store/modules/user'
import { useAuth } from '@shared/store/modules/auth'
import { useRequest } from 'vue-request'
import { filterAsyncRoutes, hasPermission } from '@shared/utils/route-utils'
import TopMenuItem from '../top-menu-item/index.vue'
const props = defineProps({
  enableRouteFilter: {
    type: Boolean,
    default: false,
  },
  themeFlag: {
    type: String,
  },
  isCollapse: {
    type: Boolean,
    default: false,
  },
})
const $router = useRouter()
const $route = useRoute()
const userStore = useUser()
const authStore = useAuth()
const currentActiveRoute = computed(() => $route.name as string)
// const {
//   data: menuData,
//   loading: menuLoading,
//   error: menuError,
//   run: menuRun,
// } = useRequest(
//   () =>
//     AuthMenuInfo.get({
//       objectId: authStore.consoleInfo.consoleObjectId,
//       userId: userStore.userInfo.id,
//     }).then(res => {
//       if (res.code === GATEWAY_CODE.success) {
//         const menuList = res.data
//         $router.getRoutes().forEach(_ => {
//           if (!hasPermission(_, menuList)) {
//             $router.removeRoute(_.name as string)
//           }
//         })
//
//         const restRoutes = $router.getRoutes()
//         $router.options.routes = filterAsyncRoutes($router.options.routes, restRoutes)
//       }
//       return res
//     }),
//   {
//     manual: !props.enableRouteFilter,
//   },
// )
</script>
