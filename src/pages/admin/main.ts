import { router } from './router'
import App from './App.vue'
import { setApp } from '@shared/main'
import { i18n } from '@admin/plugins/i18n'
const { app } = setApp(App)
app.use(router).use(i18n).mount('#app')
