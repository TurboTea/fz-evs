import '@shared/assets/element/index.scss'
import '@shared/assets/tailwind/index.css'
import '@assets/icons'
import '@assets/font/font.css'
import '@assets/font/PingFangSC.css'
import { store } from '@shared/store'
import './enums'
export const setApp = App => {
  const app = createApp(App)
  app.use(store)
  return {
    app,
  }
}
