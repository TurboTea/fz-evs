import { UserType } from '@shared/types/user'

export const useUser = defineStore('user', {
  state: (): UserType => ({
    userInfo: {},
  }),
  actions: {},
  persist: {
    key: 'user',
    storage: window.sessionStorage,
    paths: ['userInfo'],
    overwrite: true,
  },
})
