// 请求返回data结构体
declare interface HttpResponse<T = any> {
  code: string
  message: string
  data: T
  status: string
}
