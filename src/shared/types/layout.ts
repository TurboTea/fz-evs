export type LayoutType = {
  breadcrumbList: BreadcrumbType[]
  currentLocale: LocaleType
}
export type LocaleType = 'zh' | 'en'
export type BreadcrumbType = {
  title: string
  level: number
  path: string
  name: string
}
