import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { useLayout } from '@shared/store/modules/layout'
export const useLocale = ($useLayout = useLayout) => {
  const layoutStore = $useLayout()
  const { locale } = useI18n()
  const elLocale = computed(() => {
    return layoutStore.currentLocale === 'zh' ? zhCn : en
  })
  return {
    elLocale,
    locale,
  }
}
