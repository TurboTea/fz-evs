<template>
  <el-sub-menu :index="menu.name" v-if="menuList?.length">
    <template #title>
      <g-icon :name="`${menu.meta.icon}`" class="mr-6 text-xl cursor-pointer" />
      <span>{{ menu.meta.title }}</span>
    </template>
    <top-menu-item v-for="item in menuList" :key="item.name" :menu="item" />
  </el-sub-menu>
  <el-menu-item :index="menu.name" @click="handleClickMenu()" v-else>
    <g-icon :name="`${menu.meta.icon}`" class="mr-6 text-xl cursor-pointer" />
    <template #title>
      <span>{{ menu.meta.title }}</span>
    </template>
  </el-menu-item>
</template>
<script>
export default {
  name: 'top-menu-item',
}
</script>
<script setup>
const props = defineProps({
  menu: {
    type: Object,
    required: true,
    default: () => {
      return {}
    },
  },
})
const router = useRouter()
const menuList = computed(() => props.menu.children?.filter(_ => _.meta.showInAsideMenu))
/**
 * @description: 路由跳转处理
 * @param {*}
 * @return {*}
 */
const handleClickMenu = () => {
  router.push({ name: props.menu.name })
}
</script>
