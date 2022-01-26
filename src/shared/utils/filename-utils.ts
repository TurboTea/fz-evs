// 获取文件名（不含后缀）
export function getFilename(params: string) {
  return params.replace(/(.*\/)*([^.]+).*/gi, '$2')
}
