import { getFilename } from '@shared/utils/filename-utils'
import { setI18n } from '@shared/utils/i18n-utils'
// e.g. $t('baas.button.login')
const requireModules = require.context('./config', false, /\.ts$/iu)
const localesList = requireModules.keys().map(filePath => {
  const component = requireModules(filePath)
  return {
    baas: {
      [getFilename(filePath)]: component.default,
    },
  }
})
export const { i18n, changeLocale } = setI18n({ localesList, localeKey: 'layout' })
