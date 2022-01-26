import { isPlainObject } from 'lodash'
import { createI18n } from 'vue-i18n'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import enLocale from 'element-plus/lib/locale/lang/en'
import dayjs from 'dayjs'
import 'dayjs/locale/zh'
import 'dayjs/locale/en'

/**
 * 返回拆分的国际化配置
 * @param v
 * @param parentKeys
 * @param config
 */
export function getI18nConfig(
  v,
  parentKeys: string[] = [],
  config = {
    zh: {},
    en: {},
  },
) {
  if (!isPlainObject(v)) {
    if (parentKeys[parentKeys.length - 1] === 'zh') {
      config.zh[parentKeys.slice(0, parentKeys.length - 1).join('.')] = v
    }
    if (parentKeys[parentKeys.length - 1] === 'en') {
      config.en[parentKeys.slice(0, parentKeys.length - 1).join('.')] = v
    }
    return config
  }
  Object.entries(v).map(([key, value]) => getI18nConfig(value, [...parentKeys, key], config))
  return config
}

export const setI18n = ({ localesList, localeKey }) => {
  const i18n = createI18n({
    locale: sessionStorage.getItem(localeKey)
      ? JSON.parse(sessionStorage.getItem(localeKey) as string).currentLocale
      : 'zh', // set locale
    fallbackLocale: 'zh', // set fallback locale
    messages: {
      zh: {
        ...Object.assign({}, ...localesList.map(v => getI18nConfig(v).zh)),
        ...zhLocale,
      },
      en: {
        ...Object.assign({}, ...localesList.map(v => getI18nConfig(v).en)),
        ...enLocale,
      },
    },
    silentTranslationWarn: true,
  })
  const changeLocale = val => {
    i18n.global.locale = val
    dayjs.locale(val)
  }
  changeLocale(i18n.global.locale)
  return {
    i18n,
    changeLocale,
  }
}
