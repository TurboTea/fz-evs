// import { useAuth } from '@shared/store/modules/auth'
// import { useUser } from '@shared/store/modules/user'
//
// export function hasBtnPermission(permission: string) {
//   const authStore = useAuth()
//   const userStore = useUser()
//   let str = ''
//   if (!permission) {
//     return false
//   } else {
//     const consoleTypeId = authStore.consoleInfo.consoleTypeId
//
//     switch (consoleTypeId) {
//       case '1':
//         str = 'auth.baas.' + permission
//         break
//       case '2': // 联盟
//         str = 'auth.federation.' + permission
//         break
//       case '3': // 企业
//         str = 'auth.organization.' + permission
//         break
//     }
//
//     const btnList = authStore.operationList.map(_ => _.id)
//
//     const userId = Number(userStore.userInfo.id)
//
//     if (userId === 10000000) {
//       return true
//     } else {
//       return btnList.indexOf(str) > -1
//     }
//   }
// }
