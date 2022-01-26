/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface IMainStatisticResponse {
  /** 链名称 */
  name: string

  /** 链ID */
  chainId: string

  /** 创建时间 */
  createTime: number

  /** 企业成员数量 */
  enterpriseCount: number

  /** 联盟链数量 */
  paraCount: number

  /** 创建者 */
  creator: number

  /** 节点数量 */
  nodeCount: number

  /** 联盟名称 */
  fedName: string

  /** 创建类型 */
  createType: number

  /** 拥有者名字 */
  ownerName: string

  /** 节点列表 */
  nodeList: IBaseNodeResponse[]
  indicator: object

  /** 拥有者 */
  owner: number

  /** 平行链列表 */
  paraChainList: IParaChainResponse[]

  /** 企业列表 */
  orgList: IOrganization[]

  /** 状态 */
  status: number

  /** 创建者名字 */
  creatorName: string

  /** 链版本信息 */
  chainVersion: string
}

export interface IBaseChainResponse {
  /** 链ID */
  chainId?: string

  /** 链名称 */
  name?: string

  /**
   * 链状态
   * @format int32
   */
  status?: number

  /** 链所在主体 */
  owner: string

  /** 链创建来源 */
  createType: number
}

export interface IAddNodesRequest {
  chainExplorerNodeRequest?: object

  /**
   * 区块链ID
   * @example 全局唯一的UUID，前端填充
   */
  chainId?: string
  cloudParam?: object
  explorerCloudParam?: object

  /** 节点列表 */
  nodes?: IChainNodeRequest[]
}

export interface IPageResultConsortiumChainResponse {
  /** @format int64 */
  currPage?: number
  expand?: object
  list?: IConsortiumChainResponse[]
  pageSize?: number

  /** @format int64 */
  totalCount?: number

  /** @format int64 */
  totalPage?: number
}

export interface IBindNodeRequest {
  /** 链节点Id */
  nodeId: string

  /** 主机Id */
  serverId: string

  /** 企业Id */
  eId: string
}

export interface IChainNodeRequest {
  /** 企业id */
  eid?: string

  /** 节点名称 */
  name?: string

  /** 主机Id */
  resourceId?: string
  chainId: string
}

export interface IPackagePageQueryRequest {
  pageIndex: number
  pageSize: number
  param: IChainBasePackageResponse
  sortField: string
  sortOrder: string
  loginUser: string
}

export interface IOrganization {
  /** 企业地址 */
  address?: string

  /** 地区 */
  addressList?: string[]

  /** 地区 */
  addressTran?: string

  /** 企业资质数据 */
  certs?: string[]

  /**
   * 企业创建时间
   * @format int64
   */
  createTime?: number

  /** 企业创始人 */
  creator?: string

  /** 企业加入的联盟 */
  federations?: string[]

  /** 经营范围 */
  manage?: string

  /** 企业id */
  orgID?: string

  /** 企业名 */
  orgName?: string

  /** 企业所有人 */
  owner?: string

  /**
   * 企业所有人id
   * @format int64
   */
  ownerId?: number

  /** 拒绝理由 */
  remark?: string

  /**
   * 企业状态
   * @format int32
   */
  status?: number

  /** 所属行业 */
  type?: string

  /** 用户在该企业的角色信息 */
  userRoleList?: object[]
}

export interface IChainNodeResponse {
  /** 链ID */
  chainId?: string

  /** 配置文件下载地址 */
  configUrl?: string

  /**
   * 节点创建时间
   * @format int64
   */
  createTime?: number

  /** 操作详细信息，存储具体的失败原因 */
  detail?: string

  /** 企业id */
  eid?: string

  /** 外网下载地址-页面下载按钮使用 */
  externalConfigUrl?: string
  id?: string

  /** 监控指标数据,alive(节点是否存活),isSync(节点是否同步),blockHeight(区块高度)，cpuUsage(cpu使用率),memUsage(内存使用率),diskUsage(磁盘使用率) */
  indicator?: object

  /** 内网ip */
  innerIp?: string

  /** 节点名称 */
  name?: string

  /** 外网ip */
  outerIp?: string

  /**
   * 节点创建方式，0：自备节点，1：个人公有云节点，2：BaaS节点
   * @format int32
   */
  serviceType?: number

  /**
   * ssh端口
   * @format int32
   */
  sshPort?: number

  /**
   * 节点状态
   * @format int32
   */
  status?: number

  /**
   * 节点类型
   * @format int32
   */
  type?: number

  /** 关联主机Id */
  serverId: string
}

export interface IConfigParams {
  params?: IConfigParam[]
}

export interface IChainBasePackageResponse {
  /** 待补充 */
  content: string

  /** 待补充 */
  status: number

  /** 待补充 */
  externalChainUrl: string
  version: string
  id: number
  chainUrl: string
  updateTime: number
  operator: string
  packageName: string
  createTime: number
}

export interface IPageResultChainAddr {
  /** @format int64 */
  currPage?: number
  expand?: object
  list?: object[]
  pageSize?: number

  /** @format int64 */
  totalCount?: number

  /** @format int64 */
  totalPage?: number
}

export interface IConsortiumChainResponse {
  creator: number
  createType: number
  chainVersion: string
  status: number
  indicator: object
  name: string
  owner: number
  createTime: number
  creatorName: string
  nodeList: IBaseNodeResponse[]
  superManger: string
  eid: string
  nodeCount: number
  ownerName: string
  genesis: string
  ename: string
  chainId: string
}

export interface IChainDeployRequest {
  /**
   * 区块链ID
   * @example 全局唯一的UUID，前端填充
   */
  chainId?: string

  /** 节点Id列表 */
  nodes?: string[]
  deployType: string
}

export interface IChainQueryRequest {
  /** 链所有者 */
  owner: string

  /** 链名称 */
  chainName: string

  /** 主链名称 */
  mainChainId: string

  /** 链创建人 */
  creator: string

  /** 控制台类型 */
  controlPanelType: string
}

export interface IPageResultParaChainResponse {
  /** @format int64 */
  currPage?: number
  expand?: object
  list?: IParaChainResponse[]
  pageSize?: number

  /** @format int64 */
  totalCount?: number

  /** @format int64 */
  totalPage?: number
}

export interface IParaChainResponse {
  /** 链ID */
  chainId?: string

  /** 链版本信息 */
  chainVersion?: string

  /**
   * 创建时间
   * @format int64
   */
  createTime?: number

  /**
   * 创建类型
   * @format int32
   */
  createType?: number

  /**
   * 创建者
   * @format int64
   */
  creator?: number

  /** 创建者名字 */
  creatorName?: string

  /** eid */
  eid?: string
  ename?: string

  /** 创世地址 */
  genesis?: string

  /** 监控指标数据(map类型数据结构),activeNodes(存活的节点),totalTransaction(链上交易总数),maxTps(tps),avgBlockTime(平均出块时间), */
  indicator?: object

  /** 主链链ID */
  mainChainId?: string

  /** 主链名称 */
  mainChainName?: string

  /** 链名称 */
  name?: string

  /**
   * 节点数量
   * @format int32
   */
  nodeCount?: number

  /** 节点列表 */
  nodeList?: IBaseNodeResponse[]

  /**
   * 拥有者
   * @format int64
   */
  owner?: number

  /** 拥有者名字 */
  ownerName?: string

  /**
   * 1 正常  0 异常
   * @format int32
   */
  status?: number

  /** 超管地址 */
  superManger?: string
}

export interface IPageResultChainBasePackageResponse {
  currPage: boolean
  expand: object
  list: IChainBasePackageResponse[]
  pageSize: number
  totalCount: number
  totalPage: number
}

export interface IBindPubIpRequest {
  /** 云平台唯一ID */
  driverId?: object

  /** ip名称 */
  ipName?: string

  /** 节点Id */
  nodeId?: string

  /**
   * 支付类型
   * @example prePaid, postPaid
   */
  payType?: string
  prePaidParam?: object

  /**
   * 关联的偏好信息
   * @format int64
   */
  profile?: number
  publicIp?: object

  /** 云主机Id，可不传 */
  serverId?: string
}

export interface IChainConfig {
  chainId?: string

  /** @format int64 */
  createTime?: number

  /** @format int32 */
  id?: number

  /** @format int32 */
  isConfig?: number
  paramName?: string

  /** @format int64 */
  updateTime?: number
  value?: string
}

export interface IPageResultBaseNodeResponse {
  /** @format int64 */
  currPage?: number
  expand?: object
  list?: IChainNodeResponse[]
  pageSize?: number

  /** @format int64 */
  totalCount?: number

  /** @format int64 */
  totalPage?: number
}

export interface IChainModRequest {
  /** 链名称 */
  chainName: string

  /** 链拥有者 */
  owner: string
  chainId: string
}

export interface IConfigParam {
  /** 配置参数名称 */
  paramName?: string

  /** 配置参数值 */
  value?: string
}

export interface IChainPageQueryRequest {
  pageIndex: number
  pageSize: number
  param: IChainQueryRequest
  sortField: string
  sortOrder: string
  loginUser: string
}

export interface IChainCreateRequest {
  /** 联盟Id；为空表示当前登陆企业创建的链 */
  fedId: string
  title: string

  /** 链Id */
  chainId: string

  /** 来源类型0创建1导入 */
  createType: number

  /** 链参数 */
  params: { params: { paramName: string; value: string }[] }

  /** 链名称 */
  name: string

  /** 创建人Id */
  createUserId: string

  /** 节点列表 */
  nodes: { '': IBindNodeRequest }[]
  mainChainId: string
  requestContent: string
}

export interface IConfigTemplate {
  /**
   * 新建时间
   * @format int64
   */
  createTime?: number

  /** 默认值 */
  defaultValue?: string

  /**
   * 自增主键
   * @format int32
   */
  id?: number

  /** 配置参数名称 */
  paramName?: string

  /**
   * 共识类型,0联盟链,1私链,3平行链
   * @format int32
   */
  type?: number

  /**
   * 更新时间
   * @format int64
   */
  updateTime?: number
}

export interface IBaseNodeResponse {
  /** 链ID */
  chainId?: string

  /** 对应云主机实例ID */
  cloudId?: string

  /**
   * 节点创建时间
   * @format int64
   */
  createTime?: number
  id?: string

  /** 内网ip */
  innerIp?: string

  /** 节点名称 */
  name?: string

  /** 外网ip */
  outerIp?: string

  /**
   * 节点创建方式，0：自备节点，1：个人公有云节点，2：BaaS节点
   * @format int32
   */
  serviceType?: number

  /**
   * ssh端口
   * @format int32
   */
  sshPort?: number

  /**
   * 节点状态
   * @format int32
   */
  status?: number

  /**
   * 节点类型
   * @format int32
   */
  type?: number
}

export interface IChainResponse {
  /** 链ID */
  chainId?: string

  /** 链版本信息 */
  chainVersion?: string

  /**
   * 创建时间
   * @format int64
   */
  createTime?: number

  /**
   * 创建者
   * @format int64
   */
  creator?: number

  /** 创建者名字 */
  creatorName?: string

  /** 创世地址 */
  genesis?: string

  /** 监控指标数据(map类型数据结构),activeNodes(存活的节点),totalTransaction(链上交易总数),maxTps(tps),avgBlockTime(平均出块时间), */
  indicator?: object

  /** 链名称 */
  name?: string

  /**
   * 节点数量
   * @format int32
   */
  nodeCount?: number

  /**
   * 拥有者
   * @format int64
   */
  owner?: number

  /** 拥有者名字 */
  ownerName?: string

  /**
   * 1 正常  0 异常
   * @format int32
   */
  status?: number

  /** 超管地址 */
  superManger?: string
}

/**
 * 快速检索对象
 */
export interface IQuickQueryModel {
  /** 数据ID */
  dataId?: string

  /** 数据名称 */
  dataName?: string

  /** 数据类型 */
  dataType?: 'APPSTORE' | 'CHAIN' | 'CONSORTIUM' | 'EMPTY' | 'FED' | 'ORDER' | 'ORG' | 'PARA'

  /** 数据明细信息 */
  detail?: string

  /** 数据查看所需要的权限 */
  objPermission?: string[]

  /** 对象ID/控制台ID */
  objectId?: string

  /**
   * 数据更新时间
   * @format int64
   */
  updateTime?: number
}

export interface IConfigParamRequest {
  chainId: string
  paramName: string
  paramValue: string
}

export interface IChainConsortiumCheckGetParams {
  /**
   * 链Id(新增节点时传入)
   * @example
   */
  chainId?: string

  /**
   * 节点数量
   * @example
   */
  nodeSize?: string

  /**
   * 名称、校验名称重复
   * @example
   */
  name?: string
}

export interface IChainParaDeleteParams {
  /**
   * 用户ID
   * @example
   */
  uid: string

  /**
   * 链ID
   * @example
   */
  chainId: string
}

export interface IChainParaPackageGetParams {
  /**
   * 节点ID列表
   * @example
   */
  nodeIds?: string

  /** 链Id */
  chainId?: string
}

export interface IChainParaQueryPostParams {
  /**
   * 所属企业
   * @example
   */
  eName?: string

  /**
   * 第几页
   * @example
   */
  pageNum: string

  /**
   * 每一页大小
   * @example
   */
  pageSize: string
}

export interface IChainBasePackagePostPayload {
  /** @format binary */
  file?: File

  /** 版本号 */
  version?: string

  /** 描述信息 */
  content?: string
}

export interface IChainBasePackagePutPayload {
  /** 版本号 */
  version?: string

  /** 内容说明 */
  content?: string

  /**
   * 版本包
   * @format binary
   */
  file?: File

  /** 状态 */
  status?: string
  id?: string
}

export interface IChainParametersGetParams {
  /** 链类型 */
  type?: string

  /** 链Id，为空取模板 */
  chainId?: string
}

export interface IChainConsortiumPostPayload {
  chainCreateRequest: IChainCreateRequest
}

export interface IChainParaCheckGetParams {
  /**
   * 链Id(新增节点时传入)
   * @example
   */
  chainId?: string

  /**
   * 节点数量
   * @example
   */
  nodeSize?: string

  /** 主链Id */
  mainChainId?: string

  /**
   * 平行链名称
   * @example
   */
  name?: string

  /** 平行链title */
  title?: string
}

export interface IChainIndexDetailParams {
  /**
   * chainId
   * @example
   */
  chainId: string
  id: string
}

export interface IChainConsortiumImportPostPayload {
  chainCreateRequest: IChainCreateRequest
}

export interface IChainConsortiumPackageGetParams {
  /**
   * 节点ID列表
   * @example
   */
  nodeIds?: string

  /** 链Id */
  chainId?: string
}

export type IChainParaImportPostPayload = object

import axios, { AxiosInstance, AxiosRequestConfig, ResponseType } from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private secure?: boolean
  private format?: ResponseType

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      )
      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<{
    code: string
    message: string
    data: T
    status: string
  }> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = (format && this.format) || void 0

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      requestParams.headers.common = { Accept: '*/*' }
      requestParams.headers.post = {}
      requestParams.headers.put = {}

      body = this.createFormData(body as Record<string, unknown>)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    })
  }
}

/**
 * @title 链服务
 * @version 1.0.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description 校验License中的链相关限制、同时检验名称是否重复等。可扩充参数。 如果传入的是名称，则校验名称
     *
     * @tags 联盟链
     * @name ChainConsortiumCheckGet
     * @summary 联盟链创建校验
     * @request GET:/v1/chain/consortium/check
     */
    chainConsortiumCheckGet: (query: IChainConsortiumCheckGetParams, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/consortium/check`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 查看指定的平行链信息(包含监控信息,节点数量）
     *
     * @tags 平行链
     * @name ChainParaDetail
     * @summary 查看指定的平行链信息
     * @request GET:/v1/chain/para/{chain_id}
     */
    chainParaDetail: (chainId: string, params: RequestParams = {}) =>
      this.request<IParaChainResponse, object>({
        path: `/v1/chain/para/${chainId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description 删除平行链信息
     *
     * @tags 平行链
     * @name ChainParaDelete
     * @summary 删除平行链信息
     * @request DELETE:/v1/chain/para/{chain_id}
     */
    chainParaDelete: ({ chainId, ...query }: IChainParaDeleteParams, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/para/${chainId}`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 生成并下载指定链的初始化部署包
     *
     * @tags 平行链
     * @name ChainParaPackageGet
     * @summary 生成并下载指定链的初始化部署包
     * @request GET:/v1/chain/para/package
     */
    chainParaPackageGet: (query: IChainParaPackageGetParams, params: RequestParams = {}) =>
      this.request<any, object>({
        path: `/v1/chain/para/package`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description 删除指定联盟链
     *
     * @tags 联盟链
     * @name ChainConsortiumDelete
     * @summary 删除指定联盟链
     * @request DELETE:/v1/chain/consortium/{chain_id}
     */
    chainConsortiumDelete: (chainId: string, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/consortium/${chainId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description 查看指定的链信息(包含监控信息,节点数量）
     *
     * @tags 联盟链
     * @name ChainConsortiumDetail
     * @summary 查看指定的联盟链信息
     * @request GET:/v1/chain/consortium/{chain_id}
     */
    chainConsortiumDetail: (chainId: string, params: RequestParams = {}) =>
      this.request<IConsortiumChainResponse, object>({
        path: `/v1/chain/consortium/${chainId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description 查询所有平行链
     *
     * @tags 平行链
     * @name ChainParaQueryPost
     * @summary 查询平行链列表
     * @request POST:/v1/chain/para/query
     */
    chainParaQueryPost: (query: IChainParaQueryPostParams, data: IChainPageQueryRequest, params: RequestParams = {}) =>
      this.request<any, object>({
        path: `/v1/chain/para/query`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 新增链版本列表
     *
     * @tags 链版本
     * @name ChainBasePackagePost
     * @summary 新增版本信息
     * @request POST:/v1/chain/base-package
     */
    chainBasePackagePost: (data: IChainBasePackagePostPayload, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/base-package`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description 更新版本信息
     *
     * @tags 链版本
     * @name ChainBasePackagePut
     * @summary 更新版本信息
     * @request PUT:/v1/chain/base-package
     */
    chainBasePackagePut: (data: IChainBasePackagePutPayload, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/base-package`,
        method: 'PUT',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description 获取配置模板本
     *
     * @tags 链配置参数
     * @name ChainParametersGet
     * @summary 获取配置模板
     * @request GET:/v1/chain/parameters
     */
    chainParametersGet: (query: IChainParametersGetParams, params: RequestParams = {}) =>
      this.request<object[], object>({
        path: `/v1/chain/parameters`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 修改链归属或名称
     *
     * @tags 联盟链
     * @name ChainConsortiumPut
     * @summary 修改链归属或名称
     * @request PUT:/v1/chain/consortium
     */
    chainConsortiumPut: (data: IChainModRequest, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/v1/chain/consortium`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 创建链请求。
     *
     * @tags 联盟链
     * @name ChainConsortiumPost
     * @summary 创建链请求
     * @request POST:/v1/chain/consortium
     */
    chainConsortiumPost: (data: IChainConsortiumPostPayload, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/v1/chain/consortium`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 修改链归属或名称
     *
     * @tags 平行链
     * @name ChainParaPut
     * @summary 修改链归属或名称
     * @request PUT:/v1/chain/para
     */
    chainParaPut: (data: IChainModRequest, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/v1/chain/para`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 创建平行链请求
     *
     * @tags 平行链
     * @name ChainParaPost
     * @summary 创建平行链请求
     * @request POST:/v1/chain/para
     */
    chainParaPost: (data: IChainCreateRequest, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/v1/chain/para`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 查询指定企业下某条链的节点列表，传chainId则查链下、传eid则企业下、均传则企业下某链
     *
     * @tags 链节点
     * @name ChainNodeQueryPost
     * @summary 查询指定企业下某条链的节点列表
     * @request POST:/v1/chain/node/query
     */
    chainNodeQueryPost: (data: IChainNodeRequest, params: RequestParams = {}) =>
      this.request<any, object>({
        path: `/v1/chain/node/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 查询联盟链列表 根据当前登录类型查询链列表
     *
     * @tags 联盟链
     * @name ChainConsortiumQueryPost
     * @summary 查询联盟链列表
     * @request POST:/v1/chain/consortium/query
     */
    chainConsortiumQueryPost: (data: IChainPageQueryRequest, params: RequestParams = {}) =>
      this.request<any, object>({
        path: `/v1/chain/consortium/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 校验License中的链相关限制，如果传入的是 mainChainId和name 则校验名称是否正确。
     *
     * @tags 平行链
     * @name ChainParaCheckGet
     * @summary 平行链创建校验
     * @request GET:/v1/chain/para/check
     */
    chainParaCheckGet: (query: IChainParaCheckGetParams, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/para/check`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 更新链/模板配置参数
     *
     * @tags 链配置参数
     * @name ChainParametersPost
     * @summary 更新链/模板配置参数
     * @request POST:/v1/chain/parameters/
     */
    chainParametersPost: (data: IConfigParamRequest, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/v1/chain/parameters/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 链快速检索
     * @name ChainIndexDetail
     * @summary 查询链快速检索信息
     * @request GET:/v1/chain/index/{id}
     */
    chainIndexDetail: ({ id, ...query }: IChainIndexDetailParams, params: RequestParams = {}) =>
      this.request<IQuickQueryModel, object>({
        path: `/v1/chain/index/${id}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 新增节点
     *
     * @tags 链节点
     * @name ChainNodePost
     * @summary 新增节点
     * @request POST:/v1/chain/node
     */
    chainNodePost: (data: IChainNodeRequest, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/v1/chain/node`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 联盟链节点角色变更/绑定主机
     *
     * @tags 链节点
     * @name ChainNodePut
     * @summary 联盟链节点角色变更
     * @request PUT:/v1/chain/node
     */
    chainNodePut: (data: IChainNodeRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/node`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 删除指定链的指定节点信息
     *
     * @tags 链节点
     * @name ChainNodeDelete
     * @summary 删除节点信息
     * @request DELETE:/v1/chain/node/{id}
     */
    chainNodeDelete: (id: string, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/node/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description 查看指定的节点信息
     *
     * @tags 链节点
     * @name ChainNodeDetail
     * @summary 查看指定的节点信息
     * @request GET:/v1/chain/node/{id}
     */
    chainNodeDetail: (id: string, params: RequestParams = {}) =>
      this.request<IChainNodeResponse, object>({
        path: `/v1/chain/node/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 链快速检索
     * @name ChainIndexGet
     * @summary 询联盟链/平行链快速检索信息所有ID
     * @request GET:/v1/chain/index
     */
    chainIndexGet: (params: RequestParams = {}) =>
      this.request<string[], object>({
        path: `/v1/chain/index`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description 创建链请求。
     *
     * @tags 联盟链
     * @name ChainConsortiumImportPost
     * @summary 导入链请求
     * @request POST:/v1/chain/consortium/import
     */
    chainConsortiumImportPost: (data: IChainConsortiumImportPostPayload, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/v1/chain/consortium/import`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 部署指定链，指定节点
     *
     * @tags 平行链
     * @name ChainParaDeployPut
     * @summary 部署指定链，指定节点
     * @request PUT:/v1/chain/para/deploy
     */
    chainParaDeployPut: (data: IChainDeployRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/para/deploy`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 生成并下载指定链的初始化部署包
     *
     * @tags 联盟链
     * @name ChainConsortiumPackageGet
     * @summary 生成并下载指定链的初始化部署包
     * @request GET:/v1/chain/consortium/package
     */
    chainConsortiumPackageGet: (query: IChainConsortiumPackageGetParams, params: RequestParams = {}) =>
      this.request<any, object>({
        path: `/v1/chain/consortium/package`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description 部署指定链，指定节点
     *
     * @tags 联盟链
     * @name ChainConsortiumDeployPut
     * @summary 部署指定链，指定节点
     * @request PUT:/v1/chain/consortium/deploy
     */
    chainConsortiumDeployPut: (data: IChainDeployRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/consortium/deploy`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 创建平行链请求
     *
     * @tags 平行链
     * @name ChainParaImportPost
     * @summary 导入平行链请求
     * @request POST:/v1/chain/para/import
     */
    chainParaImportPost: (data: IChainParaImportPostPayload, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/v1/chain/para/import`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 删除版本信息
     *
     * @tags 链版本
     * @name ChainBasePackageDelete
     * @summary 删除版本信息
     * @request DELETE:/v1/chain/base-package/{id}
     */
    chainBasePackageDelete: (id: string, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/chain/base-package/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description 获取链版本列表
     *
     * @tags 链版本
     * @name ChainBasePackageQueryPost
     * @summary 获取版本列表
     * @request POST:/v1/chain/base-package/query
     */
    chainBasePackageQueryPost: (data: IPackagePageQueryRequest, params: RequestParams = {}) =>
      this.request<any, object>({
        path: `/v1/chain/base-package/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}
