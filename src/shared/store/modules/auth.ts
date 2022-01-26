import { AuthType } from '@shared/types/auth'

export const useAuth = defineStore('auth', {
  state: (): AuthType => ({
    loginInfo: {},
    consoleList: [],
    consoleInfo: {
      consoleObjectId: '0',
      consoleName: '我的控制台',
      consoleTypeId: '0',
    },
    operationList: [],
  }),
  actions: {},
  persist: {
    key: 'auth',
    storage: window.sessionStorage,
    paths: ['loginInfo', 'consoleList', 'consoleInfo'],
    overwrite: true,
  },
})
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(acceptHMRUpdate(useAuth, import.meta.webpackHot))
}
