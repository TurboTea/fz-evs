<template>
  <el-container class="h-screen">
    <el-aside
      :width="isCollapse ? '96px' : '260px'"
      class="relative bg-white dark:bg-[#151930] text-[#151930] dark:text-white transition transition-all duration-300 ease-in-out border-r dark:border-[#151930] overflow-x-hidden"
    >
      <div class="relative p-4 h-full z-10">
        <div class="py-4 rounded-md overflow-x-hidden" :class="[isCollapse ? 'shadow-md' : '']">
          <p
            class="py-4 text-lg whitespace-nowrap font-bold uppercase"
            :class="[isCollapse ? 'text-center bg-[#151930] text-white' : '']"
          >
            {{ isCollapse ? PROJECT_NAME[0] : PROJECT_NAME }}
          </p>
          <div
            class="mb-4 bg-gray-200 dark:bg-[#151930] transition transition-all duration-300"
            :class="[isCollapse ? 'bg-[#151930]' : 'bg-[#1f2a37]']"
            style="height: 1px"
          ></div>
          <aside-menu-list :enable-route-filter="enableRouteFilter" :theme-flag="themeFlag" :is-collapse="isCollapse" />
        </div>
      </div>
    </el-aside>
    <el-container>
      <el-header
        class="bg-white text-gray-700 dark:bg-[#151930] dark:text-white transition transition-all duration-300 border-b dark:border-[#151930]"
      >
        <el-row type="flex" justify="space-between" align="middle" class="h-full">
          <div class="flex items-center gap-4">
            <g-icon :name="isCollapse ? 'Expand' : 'Fold'" @click="fold" class="cursor-pointer" />
          </div>
          <div class="flex flex-row justify-start items-center">
            <router-link to="/search">
              <g-icon name="Search" @click="fold" class="mr-6 text-xl cursor-pointer" />
            </router-link>
            <g-icon name="Brush" @click="setTheme" class="mr-6 text-xl cursor-pointer dark:text-green-300" />
            <g-icon
              :name="isFullScreen ? 'ScaleToOriginal' : 'FullScreen'"
              @click="fullScreen"
              class="mr-6 text-xl cursor-pointer"
            />
            <el-dropdown trigger="click">
              <img src="./components/globalization.svg" class="mr-6" />
              <template #dropdown>
                <el-dropdown-menu class="translation">
                  <el-dropdown-item
                    v-for="item in localeList"
                    :key="item.key"
                    @click="handleChangeLocale(item.key)"
                    :style="{
                      background: locale === item.key ? '#1b2a47' : '',
                      color: locale === item.key ? '#f4f4f5' : '#000',
                    }"
                    ><el-icon v-show="locale === item.key"> <g-icon name="Check" /> </el-icon
                    >{{ item.value }}</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>

            <el-badge type="danger" :value="12" class="mr-12">
              <g-icon name="Bell" class="w-[1em] h-[1em] text-xl cursor-pointer" />
            </el-badge>
            <el-dropdown>
              <el-avatar size="small" src=""></el-avatar>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-row>
      </el-header>
      <el-main
        class="flex flex-col pb-0 bg-gray-50 dark:bg-[#151930] dark:text-white transition transition-all duration-300"
      >
        <el-breadcrumb :separator-icon="ArrowRight" class="pl-1">
          <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" :to="{ name: item.name }">
            <span class="text-gray-700 dark:text-white">{{ $t(`baas.default-layout.${item.name}`) }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="flex-grow mt-4 h-full overflow-y-auto rounded-t-md border">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import AsideMenuList from './components/aside-menu-list/index.vue'
import { useRequest } from 'vue-request'
import { useLayout } from '@shared/store/modules/layout'
import { LocaleType } from '@shared/types/layout'
import { useUser } from '@shared/store/modules/user'
import { changeLocale } from '@/plugins/i18n'
import { onBeforeRouteUpdate } from 'vue-router'
const props = defineProps({
  enableRouteFilter: {
    type: Boolean,
    default: false,
  },
})
const { locale } = useI18n()
const layoutStore = useLayout()
const userStore = useUser()
const PROJECT_NAME = process.env.APP_NAME
const $route = useRoute()
const $router = useRouter()
const breadcrumbList = computed(() => layoutStore.breadcrumbList)
const localeList: { key: LocaleType; value: string }[] = [
  {
    key: 'zh',
    value: '简体中文',
  },
  {
    key: 'en',
    value: 'English',
  },
]
onMounted(() => {
  setTheme(false)
})
/**
 * @description 面包屑导航和侧边导航
 * 根据路由元信息中的level属性判断该路由的层级
 * 你可以在route标签中,设置路由的level和name,参考index.vue
 */
onBeforeRouteUpdate((to, from) => {
  if (!to.meta?.level) {
    return
  }
  let bread = toRaw(layoutStore.breadcrumbList)
  // 1. 已有层级,则替换path和name 2. 已添加的层级有小于新增的层级,则过滤 3. 若新增层级大于所有已有层级,则push
  let result = bread
    .map(val => {
      if (to.meta.level === val.level) {
        val.title = to.meta.title!
        val.path = to.path
        val.name = to.name as string
        val.level = to.meta.level
      }
      return val
    })
    .sort((a, b) => {
      return a.level - b.level
    })
    .filter(val => {
      return val.level <= to.meta.level!
    })
  if (result[result.length - 1].level < to.meta.level) {
    result.push({
      title: to.meta.title!,
      path: to.path,
      level: to.meta.level,
      name: to.name as string,
    })
  }
  layoutStore.$patch({
    breadcrumbList: result,
  })
})

// 折叠aside
let isCollapse = ref(false)
const fold = function () {
  isCollapse.value = !isCollapse.value
}

// 切换明暗主题
let themeFlag = ref('light')
const setTheme = function (isChangeTheme = true) {
  let theme = localStorage.getItem('theme') || 'light'
  themeFlag.value = theme
  if (isChangeTheme) {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    themeFlag.value = theme === 'light' ? 'dark' : 'light'
  }
  if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('html')!.classList.add('dark')
  } else {
    document.querySelector('html')!.classList.remove('dark')
  }
}

// 全屏
let isFullScreen = ref(false)
const fullScreen = function () {
  let element = document.documentElement
  if (isFullScreen.value) {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    } else if (element.mozRequestFullscreen) {
      element.mozRequestFullscreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    }
  }
  isFullScreen.value = !isFullScreen.value
}
const {
  data: logoutData,
  loading: logoutLoading,
  error: logoutError,
  run: logoutRun,
} = useRequest(
  () =>
    new Promise(resolve => {
      setTimeout(resolve, 2000)
    }),
  { manual: true },
)
//退出
const handleLogout = () => {}
//切换语言
const handleChangeLocale = (l: LocaleType) => {
  layoutStore.$patch({
    currentLocale: l,
  })
  changeLocale(l)
}
</script>
