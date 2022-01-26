import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Canceler } from 'axios'
import qs from 'qs'
import { Router } from 'vue-router'
import { useLayout } from '@shared/store/modules/layout'
import { MessageUtils } from '@shared/utils/message-utils'

export const pendingRequest = new Map<string, Canceler>()
export function generateReqKey(config: AxiosRequestConfig) {
  const { method, url, params, data } = config
  return [method, url, qs.stringify(params), qs.stringify(data)].join('&')
}
export function addPendingRequest(config: AxiosRequestConfig) {
  const requestKey = generateReqKey(config)
  config.cancelToken =
    config.cancelToken ||
    new Axios.CancelToken(cancel => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel)
      }
    })
}
export function removePendingRequest(config: AxiosRequestConfig) {
  const requestKey = generateReqKey(config)
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey)
    cancelToken && cancelToken(requestKey)
    pendingRequest.delete(requestKey)
  }
}
export const cancelBeforeRouter = (router: Router) => {
  router.beforeEach(() => {
    pendingRequest.forEach((value, key) => {
      value && value(key)
    })
    pendingRequest.clear()
  })
}
// 开发环境返回值适配
function responseWrapper(response: AxiosResponse, code: string): AxiosResponse<HttpResponse> {
  return response.data?.code && response.data?.code !== 'string'
    ? response.data
    : {
        code,
        msg: '',
        data: response.data,
        status: '',
      }
}
function addHeader(config: AxiosRequestConfig) {
  const localeObj = {
    en: 'en_US',
    zh: 'zh_CN',
  }
  const layoutStore = useLayout()
  config.headers['Language'] = localeObj[layoutStore.currentLocale]
}
export function serviceWrapper<T extends { instance: AxiosInstance }>(service: T, moduleName: string): T {
  const axiosInstance: AxiosInstance = service.instance
  axiosInstance.interceptors.request.use(
    config => {
      config.baseURL = `${config.baseURL}/${moduleName}`
      removePendingRequest(config)
      addPendingRequest(config)
      addHeader(config)
      return config
    },
    error => {
      return Promise.reject(error)
    },
  )
  axiosInstance.interceptors.response.use(
    response => {
      removePendingRequest(response.config)
      return responseWrapper(response, GATEWAY_CODE.success)
    },
    error => {
      error.isCancelRequest = Axios.isCancel(error)
      if (Axios.isCancel(error)) {
        return new Promise(() => {})
      }
      let message: string | undefined = '未知错误'

      if (
        error.code === 'ECONNABORTED' ||
        error.message.indexOf('timeout') !== -1 ||
        error.message === 'Network Error'
      ) {
        message = '网络异常'
        MessageUtils.warning(message)
        return Promise.reject(error)
      }
      return Promise.resolve(responseWrapper(error.response, GATEWAY_CODE.fail))
    },
  )
  return service
}
