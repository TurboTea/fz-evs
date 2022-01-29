import { LayoutType } from '@shared/types/layout'

export const useLayout = defineStore('layout', {
  state: (): LayoutType => ({
    breadcrumbList: [
      {
        title: 'Home',
        level: 1,
        path: '/',
        name: 'home',
      },
    ],
    currentLocale: 'zh',
  }),
  persist: {
    key: 'layout',
    storage: window.sessionStorage,
    paths: ['breadcrumbList', 'currentLocale'],
    overwrite: true,
  },
})
