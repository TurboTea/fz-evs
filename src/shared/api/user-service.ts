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

export interface IUserRoleObj {
  /** 角色id */
  roleId?: string

  /** 角色名称 */
  roleName?: string
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
  userRoleList?: IUserRoleObj[]
}

export interface IOperationObject {
  /** 权限子集 */
  child?: IOperationObject[]

  /** 权限Id */
  id?: string

  /** 权限名称 */
  name?: string

  /** 权限类型 */
  type?: 'FEDERATION' | 'ORGANIZATION' | 'PERSONAL' | 'SYSTEM'
}

export interface IPageResultOrgUserRequest {
  /**
   * 当前页数
   * @format int32
   */
  currPage?: number

  /** 其他数据 */
  expand?: object

  /** 列表数据 */
  list?: IOrgUserRequest[]

  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number

  /**
   * 总记录数
   * @format int32
   */
  totalCount?: number

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number
}

export interface ICodeValidate {
  /** 验证码 */
  code?: string

  /** 请求手机号 */
  target?: string

  /** 请求类型 register: 用户注册， update：用户更新,auth :认证; */
  type?: string
}

export interface IPageResultListUHost {
  /**
   * 当前页数
   * @format int32
   */
  currPage?: number

  /** 其他数据 */
  expand?: object

  /** 列表数据 */
  list?: object[][]

  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number

  /**
   * 总记录数
   * @format int32
   */
  totalCount?: number

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number
}

export interface IChainAddr {
  /** 地址 */
  addr?: string

  /** 地址id */
  aid?: string

  /** @format int64 */
  createTime?: number

  /**
   * 自增主键
   * @format int32
   */
  id?: number

  /** 助记词 */
  mnemonic?: string

  /** 地址名称 */
  name?: string

  /** 备注 */
  note?: string

  /** 地址私钥 */
  privkey?: string

  /** 地址公钥 */
  pubkey?: string

  /**
   * 地址状态，0正常，-1删除
   * @format int32
   */
  status?: number

  /**
   * 用户uid
   * @format int64
   */
  uid?: number

  /** @format int64 */
  updateTime?: number
}

export interface IUserRoleRequest {
  /**
   * 用户id
   * @format int64
   */
  newUserId?: number

  /** 对象id */
  objectId?: string

  /** 企业名称 */
  orgName?: string

  /** 用户名或者手机号 */
  param?: string

  /** 角色数组 */
  roleIdList?: number[]

  /** (启停用状态 */
  status?: string

  /**
   * 对象类型id
   * @format int64
   */
  sysType?: number

  /**
   * 用户id
   * @format int64
   */
  userId?: number
}

export interface IRole {
  description?: string
  id?: string
  name?: string
  objectId?: string

  /** @format int32 */
  tag?: number

  /** @format int32 */
  type?: number
}

export interface IPageResultFedOrg {
  /**
   * 当前页数
   * @format int32
   */
  currPage?: number

  /** 其他数据 */
  expand?: object

  /** 列表数据 */
  list?: IFedOrg[]

  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number

  /**
   * 总记录数
   * @format int32
   */
  totalCount?: number

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number
}

export interface IFedChain {
  /** 链id */
  chainId?: string

  /**
   * 创建时间
   * @format int64
   */
  createTime?: number

  /** 联盟id */
  fedId?: string

  /**
   * 索引id
   * @format int64
   */
  id?: number

  /** 状态 */
  status?: string

  /** 标识 */
  tag?: string
}

export interface IPageResultListUserInfo {
  /**
   * 当前页数
   * @format int32
   */
  currPage?: number

  /** 其他数据 */
  expand?: object

  /** 列表数据 */
  list?: IUserInfo[][]

  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number

  /**
   * 总记录数
   * @format int32
   */
  totalCount?: number

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number
}

export interface IFederation {
  /**
   * 联盟发起时间
   * @format int64
   */
  createTime?: number

  /** 联盟发起人 */
  creator?: string

  /** 联盟id */
  id?: string

  /** 联盟名 */
  name?: string

  /** 企业id */
  orgId?: string

  /** 联盟内企业列表 */
  orgs?: string[]

  /** 联盟所有人 */
  owner?: string

  /** 联盟描述 */
  remark?: string

  /** 标识 */
  tag?: string

  /** 角色信息 */
  userRoleList?: IUserRoleObj[]
}

export interface IUserInfo {
  /**
   * 创建时间
   * @format int64
   */
  createTime?: number

  /**
   * 用户id
   * @format int64
   */
  id?: number

  /** 头像 */
  image?: string

  /** 邮箱 */
  mail?: string

  /** 用户名 */
  name?: string

  /** 已加入企业 */
  orgs?: IOrgUserInfo[]

  /** 密码 */
  password?: string

  /** 用户手机号 */
  phoneNum?: string

  /** 所属角色信息 */
  roleList?: IUserRoleInfo[]

  /** 状态 */
  status?: string

  /** 标识 */
  tag?: string
}

export interface IPageResultRole {
  /**
   * 当前页数
   * @format int32
   */
  currPage?: number

  /** 其他数据 */
  expand?: object

  /** 列表数据 */
  list?: IRole[]

  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number

  /**
   * 总记录数
   * @format int32
   */
  totalCount?: number

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number
}

export interface IPageResultAccountManage {
  /**
   * 当前页数
   * @format int32
   */
  currPage?: number

  /** 其他数据 */
  expand?: object

  /** 列表数据 */
  list?: IAccountManage[]

  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number

  /**
   * 总记录数
   * @format int32
   */
  totalCount?: number

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number
}

export interface ICnProvince {
  /** 区域名 */
  areaName?: string

  /**
   * 省编码
   * @format int64
   */
  code?: number

  /** 维度 */
  lat?: string

  /** 经度 */
  lon?: string

  /** 省名 */
  name?: string

  /** 拼音 */
  pinYin?: string

  /** 拼音前缀 */
  prePinYin?: string

  /** 拼音简写 */
  simplePinYin?: string

  /** 全名 */
  wholeName?: string
}

export interface ICnCounty {
  /**
   * 区号
   * @format int32
   */
  areaCode?: number

  /** 区名 */
  areaName?: string

  /**
   * 市编码
   * @format int64
   */
  cityCode?: number

  /**
   * 区编码
   * @format int64
   */
  code?: number

  /** 纬度 */
  lat?: string

  /** 经度 */
  lon?: string

  /** 区名 */
  name?: string

  /** 拼音 */
  pinYin?: string

  /** 拼音前缀 */
  prePinYin?: string

  /**
   * 省编码
   * @format int64
   */
  provinceCode?: number

  /** 拼音简写 */
  simplePinYin?: string

  /** 全名 */
  wholeName?: string

  /**
   * 邮编
   * @format int32
   */
  zipCode?: number
}

export interface IChainAddrInfo {
  /** 地址名称 */
  addrName?: string

  /** 助记词 */
  mnemonic?: string

  /** 私钥 */
  privateKey?: string

  /** 标签 */
  tag?: string
}

export interface IUserRoleInfo {
  /**
   * 角色Id
   * @format int64
   */
  roleId?: number

  /** 角色名称 */
  roleName?: string

  /** 状态 */
  status?: string
}

export interface IRoleInfo {
  /** 新角色ID */
  newRoleId?: object

  /** 对象ID */
  objectId?: object

  /** 角色ID */
  roleId?: object

  /** 用户ID */
  userId?: object
}

export interface IPageResultFederation {
  /**
   * 当前页数
   * @format int32
   */
  currPage?: number

  /** 其他数据 */
  expand?: object

  /** 列表数据 */
  list?: IFederation[]

  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number

  /**
   * 总记录数
   * @format int32
   */
  totalCount?: number

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number
}

export interface IPageResultListUSshKey {
  /**
   * 当前页数
   * @format int32
   */
  currPage?: number

  /** 其他数据 */
  expand?: object

  /** 列表数据 */
  list?: object[][]

  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number

  /**
   * 总记录数
   * @format int32
   */
  totalCount?: number

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number
}

export interface IPageResultChainAddr {
  /** @format int64 */
  current?: number
  hitCount?: boolean

  /** @format int64 */
  pages?: number
  records?: IChainAddr[]
  searchCount?: boolean

  /** @format int64 */
  size?: number

  /** @format int64 */
  total?: number
}

export interface IFedOrg {
  /** 联盟id */
  fedId?: string

  /** 联盟名 */
  fedName?: string

  /**
   * 索引id
   * @format int64
   */
  id?: number

  /**
   * 加入时间
   * @format int64
   */
  joinTime?: number

  /** 企业id */
  orgId?: string

  /** 企业名 */
  orgName?: string

  /**
   * 退出时间
   * @format int64
   */
  quitTime?: number

  /**
   * 企业状态
   * @format int32
   */
  status?: number
}

export interface IRoleOperation {
  /** 操作对象ID */
  objectId?: string

  /** 操作ID */
  opId?: string

  /** 角色ID */
  roleId?: string
}

export interface IPageResultOrganization {
  /**
   * 当前页数
   * @format int32
   */
  currPage?: number

  /** 其他数据 */
  expand?: object

  /** 列表数据 */
  list?: IOrganization[]

  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number

  /**
   * 总记录数
   * @format int32
   */
  totalCount?: number

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number
}

export interface ICnCity {
  /**
   * 地区编码
   * @format int32
   */
  areaCode?: number

  /** 地区编码 */
  areaName?: string

  /**
   * 市编码
   * @format int64
   */
  code?: number

  /** 纬度 */
  lat?: string

  /** 经度 */
  lon?: string

  /** 市名 */
  name?: string

  /** 拼音 */
  pinYin?: string

  /** 拼音前缀 */
  prePinYin?: string

  /**
   * 省编码
   * @format int64
   */
  provinceCode?: number

  /** 拼音简写 */
  simplePinYin?: string

  /** 全名 */
  wholeName?: string

  /**
   * 邮编
   * @format int32
   */
  zipCode?: number
}

export interface IOpTreeNode {
  children?: IOpTreeNode[]
  description?: string
  id?: string
  name?: string
  relations?: string[]

  /** @format int32 */
  tag?: number

  /** @format int32 */
  type?: number
}

export interface IOrgUserRequest {
  /**
   * 创建时间
   * @format int64
   */
  createTime?: number

  /** 申请备注 */
  note?: string

  /** 企业id */
  orgId?: string

  /** 企业名称 */
  orgName?: string

  /** 用户手机号 */
  phoneNum?: string

  /** 原因 */
  remark?: string

  /**
   * 用户状态
   * @format int32
   */
  status?: number

  /** 标识 */
  tag?: string

  /** 用户名 */
  uname?: string

  /** 用户id */
  userId?: string
}

export interface IRoleRelAuthRequest {
  /** 操作对象ID */
  objId?: string

  /** 权限ID数组 */
  opIds?: string[]

  /** 角色ID */
  roleId?: string

  /**
   * 对象类型
   * @format int32
   */
  type?: number
}

export interface IOrgRequest {
  /** 企业地址数组 */
  addressList?: string[]

  /** 企业资质数据 */
  certs?: string[]

  /** 文件在服务器路径，以，分隔 */
  filePath?: string

  /** 企业地址 */
  orgAddress?: string

  /** 企业id */
  orgId?: string

  /** 企业名 */
  orgName?: string

  /** 企业类型 */
  orgType?: string

  /** 拒绝理由 */
  remark?: string

  /** 审批状态 */
  status?: string
}

export interface IOrganizationLog {
  /**
   * 审批人id
   * @format int64
   */
  approveId?: number

  /** 审批人名称 */
  approveName?: string

  /**
   * id
   * @format int64
   */
  id?: number

  /** 申请备注 */
  note?: string

  /** 操作详情 */
  operateDetail?: string

  /**
   * 操作时间
   * @format int64
   */
  operateTime?: number

  /** 企业id */
  orgId?: string

  /** 企业名称 */
  orgName?: string

  /** 原因 */
  remark?: string

  /** 状态 */
  status?: string

  /** 标签 */
  tag?: string

  /**
   * 用户id
   * @format int64
   */
  userId?: number

  /** 用户名称 */
  userName?: string
}

export interface IUserBatchResponse {
  /** 错误提示信息 */
  errorMessage?: string

  /** 邮箱 */
  mail?: string

  /** 用户名 */
  name?: string

  /** 用户密码 */
  password?: string

  /** 用户手机号 */
  phone?: string
}

export interface IUserRoleReq {
  /**
   * 角色Id
   * @format int64
   */
  roleId?: number

  /** 角色名称 */
  roleName?: string

  /** 状态 */
  status?: string
}

export interface IOperation {
  description?: string
  id?: string
  name?: string

  /** @format int32 */
  type?: number
}

export interface IOrgUserInfo {
  /**
   * 索引id
   * @format int64
   */
  id?: number

  /** 企业ID */
  orgID?: string

  /** 企业名 */
  orgName?: string

  /**
   * 用户状态
   * @format int32
   */
  status?: number

  /** 用户名 */
  uname?: string

  /** 用户手机号 */
  uphone?: string
}

export interface IObjectInfo {
  /** 对象id */
  objectId?: string

  /** 对象名称 */
  objectName?: string

  /**
   * 对象类型
   * @format int32
   */
  sysType?: number
  userRoleObjList?: IUserRoleObj[]
}

export interface IAccountManage {
  /** 账户id */
  accountId?: string

  /** 账户名称 */
  accountName?: string

  /** 企业地址 */
  address?: string

  /** 地区编码 */
  addressList?: string[]

  /** 地区中文 */
  addressTran?: string

  /** 账户余额 */
  balance?: number

  /** 企业资质数据 */
  certs?: string[]

  /**
   * 联盟链总数
   * @format int32
   */
  consortiumChainNum?: number

  /**
   * 应用总数
   * @format int32
   */
  contractNum?: number

  /**
   * 创建时间
   * @format int64
   */
  createTime?: number

  /**
   * 加入联盟总数
   * @format int32
   */
  joinFedNum?: number

  /**
   * 加入企业总数
   * @format int32
   */
  joinOrgNum?: number

  /**
   * 订单总数
   * @format int32
   */
  orderNum?: number

  /** 所有者 */
  owner?: string

  /**
   * 平行连总数
   * @format int32
   */
  paraChainNum?: number

  /** 手机号 */
  phone?: string

  /**
   * 私有链总数
   * @format int32
   */
  privateChainNum?: number

  /** 所属行业 */
  type?: string
}

export interface ICodeRequest {
  /** 请求手机号或邮箱 */
  target?: string

  /** 请求类型 register: 用户注册， update：用户更新,auth :认证; */
  type?: string
}

export interface IUHost {
  /** @format int32 */
  bandwidth?: number

  /** @format int32 */
  core?: number

  /** @format int32 */
  disk?: number
  hostName?: string

  /** @format int64 */
  id?: number
  imageName?: string
  innerIp?: string
  outerIp?: string
  password?: string

  /** @format int32 */
  ram?: number
  remark?: string
  resource?: string
  secretKey?: string
  sshPort?: string

  /** @format int32 */
  status?: number
  system?: string
  userName?: string
}

export interface IUserQuery {
  objectId?: string
  orgName?: string

  /**
   * 当前页码，默认1开始
   * @format int32
   * @example 1
   */
  pageIndex?: number

  /**
   * 分页大小，默认10
   * @format int32
   * @example 10
   */
  pageSize?: number
  param?: string

  /** @format int32 */
  status?: number

  /** @format int64 */
  userId?: number
}

export interface IUserRequest {
  /** 头像 */
  image?: string

  /** 邮箱 */
  mail?: string

  /** 新邮箱 */
  newMail?: string

  /** 用户密码 */
  password?: string

  /** 用户手机号 */
  phoneNum?: string

  /** 新手机号 */
  phoneNumNew?: string

  /** 用户名 */
  uname?: string

  /** 检验码 */
  verificode?: string

  /** 用户状态 */
  status: string

  /** 用户id */
  userId: string
}

export interface IFedRequest {
  /** 联盟id */
  fedId?: string

  /** 联盟名 */
  fedName?: string

  /** 企业id */
  orgId?: string

  /** 企业名 */
  orgName?: string

  /** 标识符 */
  tag?: string
}

export interface IAddressInfo {
  /** 名称 */
  name?: string

  /** 说明 */
  note?: string

  /** 私钥 */
  privKey?: string

  /** id */
  aid?: string
}

export interface IMenuResp {
  child?: IMenuResp[]
  description?: string
  menuId?: string
  name?: string
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

/**
 * 列表查询条件对象，支持分页，排序，根据属性条件查询
 */
export interface IBaseQuery {
  loginUser?: string

  /**
   * 当前页码，默认1开始
   * @format int32
   * @example 1
   */
  pageIndex?: number

  /**
   * 分页大小，默认10
   * @format int32
   * @example 10
   */
  pageSize?: number

  /**
   * 参数操作对象默认eq，eq：等于，ne：不等于,gt:大于,ge:大于等于,lt:小于,le:小于等于,like:模糊查询,in:IN 查询
   * @example {"name":"like"}
   */
  paramOperates?: Record<string, string>

  /**
   * 参数对象
   * @example {"name":"test"}
   */
  params?: object

  /**
   * 排序字段属性
   * @example name
   */
  sortField?: string

  /**
   * 排序方向ASC DESC
   * @example ASC/DESC
   */
  sortOrder?: string
}

export interface IUSshKey {
  /** @format int64 */
  createTime?: number

  /**
   * 自增主键
   * @format int32
   */
  id?: number

  /** 名称 */
  name?: string

  /** 地址私钥 */
  privkey?: string

  /** 地址公钥 */
  pubkey?: string

  /**
   * 用户uid
   * @format int64
   */
  uid?: number
}

export interface ILocationCountyGetParams {
  /**
   * 市级code
   * @example
   */
  cityCode?: string
}

export interface IUserGetParams {
  /**
   * 用户邮箱
   * @example
   */
  mail?: string

  /**
   * 用户姓名
   * @example
   */
  name?: string

  /**
   * 用户手机号
   * @example
   */
  phoneNum?: string

  /**
   * 用户id
   * @example
   */
  uid?: string

  /**
   * token
   * @example
   */
  token?: string

  /**
   * 名称或手机号模糊搜索
   * @example
   */
  param?: string

  /**
   * 标签 0或1
   * @example
   */
  tag?: string
}

export interface IOrganizationQueryGetParams {
  /**
   * 企业Id
   * @example
   */
  orgId: string

  /**
   * 记录标签
   * @example
   */
  tag: string

  /**
   * 用户id
   * @example
   */
  userId?: string
}

export interface ISshkeyImportPostPayload {
  /**
   * 文件
   * @format binary
   */
  file?: File
}

export interface ISshkeyImportPostParams {
  /** 名称 */
  name?: string
}

export interface IFederationIndexGetParams {
  /**
   * fedId
   * @example
   */
  fedId: string
}

export interface IAddressExportGetParams {
  /**
   * addrId
   * @example
   */
  addrId?: string

  /**
   * phone
   * @example
   */
  phone?: string

  /**
   * verifyCode
   * @example
   */
  verifyCode?: string
}

export interface IBaasUserImportPostPayload {
  /**
   * 文件
   * @format binary
   */
  multipartFile?: File
}

export interface IOrganizationPostPayload {
  /**
   * 文件1
   * @format binary
   */
  file1?: File

  /**
   * 文件2
   * @format binary
   */
  file2?: File

  /**
   * 文件3
   * @format binary
   */
  file3?: File

  /**
   * 文件4
   * @format binary
   */
  file4?: File

  /**
   * 文件5
   * @format binary
   */
  file5?: File
}

export interface IOrganizationPostParams {
  /**
   * 企业地址数组
   * @example
   */
  addressList?: string

  /**
   * 企业地址
   * @example
   */
  orgAddress?: string

  /**
   * 企业id
   * @example
   */
  orgId?: string

  /**
   * 企业名
   * @example
   */
  orgName?: string

  /**
   * 企业类型
   * @example
   */
  orgType?: string

  /**
   * 拒绝理由
   * @example
   */
  remark?: string

  /**
   * 审批状态
   * @example
   */
  status?: string
}

export interface ILocationCityGetParams {
  /**
   * 省级code
   * @example
   */
  provinceCode?: string
}

export interface IOrganizationIndexGetParams {
  /**
   * orgId
   * @example
   */
  orgId: string
}

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
 * @title 用户服务
 * @version 1.0.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags 企业资质管理
     * @name OrganizationQualificationQueryPost
     * @summary 分页查看审批记录列表
     * @request POST:/v1/organization/qualification/query
     */
    organizationQualificationQueryPost: (data: IUserQuery, params: RequestParams = {}) =>
      this.request<IPageResultOrganization, object>({
        path: `/v1/organization/qualification/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业管理
     * @name BaasOrganizationPost
     * @summary 注销企业审批
     * @request POST:/v1/baas/organization
     */
    baasOrganizationPost: (data: IOrgRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/baas/organization`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通讯地址管理
     * @name LocationCountyGet
     * @summary 根据城市获取区名称
     * @request GET:/v1/location/county
     */
    locationCountyGet: (query: ILocationCountyGetParams, params: RequestParams = {}) =>
      this.request<ICnCounty[], object>({
        path: `/v1/location/county`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 主机管理
     * @name HostDetail
     * @summary 查看提交记录
     * @request GET:/v1/host/{id}
     */
    hostDetail: (id: string, params: RequestParams = {}) =>
      this.request<IUHost, object>({
        path: `/v1/host/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 主机管理
     * @name HostDelete
     * @summary 删除主机
     * @request DELETE:/v1/host/{id}
     */
    hostDelete: (id: string, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/host/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户管理
     * @name UserPut
     * @summary 修改用户信息
     * @request PUT:/v1/user
     */
    userPut: (data: IUserRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/user`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户管理
     * @name UserGet
     * @summary 根据用户参数获取用户信息
     * @request GET:/v1/user
     */
    userGet: (query: IUserGetParams, params: RequestParams = {}) =>
      this.request<IUserInfo, object>({
        path: `/v1/user`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户管理
     * @name UserPost
     * @summary 用户注册
     * @request POST:/v1/user
     */
    userPost: (data: IUserRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/user`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 密钥管理
     * @name SshkeyDelete
     * @summary 删除密钥
     * @request DELETE:/v1/sshkey/{id}
     */
    sshkeyDelete: (id: string, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/sshkey/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 联盟管理
     * @name FederationDelete
     * @summary 删除联盟
     * @request DELETE:/v1/federation/{fedId}
     */
    federationDelete: (fedId: string, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/federation/${fedId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description 根据地址ID删除地址
     *
     * @tags 链地址管理
     * @name AddressDelete
     * @summary 删除地址
     * @request DELETE:/v1/address/{aid}
     */
    addressDelete: (aid: string, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/address/${aid}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 联盟企业管理
     * @name FederationOrganizationPut
     * @summary 企业退出联盟
     * @request PUT:/v1/federation/organization
     */
    federationOrganizationPut: (data: IFedRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/federation/organization`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 联盟企业管理
     * @name FederationOrganizationPost
     * @summary 联盟邀请企业加入
     * @request POST:/v1/federation/organization
     */
    federationOrganizationPost: (data: IFedRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/federation/organization`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业管理
     * @name OrganizationQueryGet
     * @summary 查看提交记录
     * @request GET:/v1/organization/query
     */
    organizationQueryGet: (query: IOrganizationQueryGetParams, params: RequestParams = {}) =>
      this.request<IOrganizationLog[], object>({
        path: `/v1/organization/query`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业管理
     * @name OrganizationQueryPost
     * @summary 分页查询企业列表
     * @request POST:/v1/organization/query
     */
    organizationQueryPost: (data: IBaseQuery, params: RequestParams = {}) =>
      this.request<IPageResultOrganization, object>({
        path: `/v1/organization/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 联盟管理
     * @name FederationPost
     * @summary 创建联盟
     * @request POST:/v1/federation
     */
    federationPost: (data: IFederation, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/federation`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户管理
     * @name BaasUserPost
     * @summary (超管)新增用户
     * @request POST:/v1/baas/user
     */
    baasUserPost: (data: IUserRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/baas/user`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 主机管理
     * @name HostQueryPost
     * @summary 分页查询主机列表
     * @request POST:/v1/host/query
     */
    hostQueryPost: (data: IBaseQuery, params: RequestParams = {}) =>
      this.request<IPageResultListUHost, object>({
        path: `/v1/host/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通讯地址管理
     * @name LocationProvinceGet
     * @summary 获取省份
     * @request GET:/v1/location/province
     */
    locationProvinceGet: (params: RequestParams = {}) =>
      this.request<ICnProvince[], object>({
        path: `/v1/location/province`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 密钥管理
     * @name SshkeyImportPost
     * @summary 导入密钥
     * @request POST:/v1/sshkey/import
     */
    sshkeyImportPost: (query: ISshkeyImportPostParams, data: ISshkeyImportPostPayload, params: RequestParams = {}) =>
      this.request<IUSshKey, object>({
        path: `/v1/sshkey/import`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户服务快速检索接口
     * @name FederationIndexGet
     * @summary 查询联盟信息
     * @request GET:/v1/federation/index
     */
    federationIndexGet: (query: IFederationIndexGetParams, params: RequestParams = {}) =>
      this.request<IQuickQueryModel, object>({
        path: `/v1/federation/index`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 密钥管理
     * @name SshkeyQueryPost
     * @summary 分页查询密钥列表
     * @request POST:/v1/sshkey/query
     */
    sshkeyQueryPost: (data: IBaseQuery, params: RequestParams = {}) =>
      this.request<IPageResultListUSshKey, object>({
        path: `/v1/sshkey/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业管理
     * @name OrganizationDetail
     * @summary 模糊查询企业
     * @request GET:/v1/organization/{orgName}
     */
    organizationDetail: (orgName: string, params: RequestParams = {}) =>
      this.request<string[], object>({
        path: `/v1/organization/${orgName}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户管理
     * @name BaasUserQueryPost
     * @summary 个人账户
     * @request POST:/v1/baas/user/query
     */
    baasUserQueryPost: (data: IBaseQuery, params: RequestParams = {}) =>
      this.request<IPageResultAccountManage, object>({
        path: `/v1/baas/user/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 链地址管理
     * @name AddressImportPost
     * @summary 地址导入
     * @request POST:/v1/address/import
     */
    addressImportPost: (data: IChainAddrInfo, params: RequestParams = {}) =>
      this.request<IChainAddr, object>({
        path: `/v1/address/import`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 校验地址名称是否唯一;入参为{'name':'XXX','note':'XXX','privKey':'XXXX'};name地址名称，note说明，其中privKey可不传。
     *
     * @tags 链地址管理
     * @name AddressPost
     * @summary 生成一个地址
     * @request POST:/v1/address
     */
    addressPost: (data: IAddressInfo, params: RequestParams = {}) =>
      this.request<IChainAddr, object>({
        path: `/v1/address`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 校验地址名称是否唯一
     *
     * @tags 链地址管理
     * @name AddressPut
     * @summary 更新地址信息
     * @request PUT:/v1/address
     */
    addressPut: (data: IAddressInfo, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/address`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 主机管理
     * @name HostPut
     * @summary 修改主机信息
     * @request PUT:/v1/host
     */
    hostPut: (data: IUHost, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/host`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 主机管理
     * @name HostPost
     * @summary 新增主机
     * @request POST:/v1/host
     */
    hostPost: (data: IUHost, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/host`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 链地址管理
     * @name AddressExportGet
     * @summary 地址导出
     * @request GET:/v1/address/export
     */
    addressExportGet: (query: IAddressExportGetParams, params: RequestParams = {}) =>
      this.request<object, object>({
        path: `/v1/address/export`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 联盟管理
     * @name FederationDetail
     * @summary 查询联盟
     * @request GET:/v1/federation/{id}
     */
    federationDetail: (id: string, params: RequestParams = {}) =>
      this.request<IFederation, object>({
        path: `/v1/federation/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户管理
     * @name BaasUserImportPost
     * @summary 批量导入用户
     * @request POST:/v1/baas/user/import
     */
    baasUserImportPost: (data: IBaasUserImportPostPayload, params: RequestParams = {}) =>
      this.request<IUserBatchResponse[], object>({
        path: `/v1/baas/user/import`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业管理
     * @name OrganizationPut
     * @summary 企业信息更新
     * @request PUT:/v1/organization
     */
    organizationPut: (data: IOrgRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/organization`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业管理
     * @name OrganizationPost
     * @summary 创建企业
     * @request POST:/v1/organization
     */
    organizationPost: (query: IOrganizationPostParams, data: IOrganizationPostPayload, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/organization`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通讯地址管理
     * @name LocationCityGet
     * @summary 获取城市
     * @request GET:/v1/location/city
     */
    locationCityGet: (query: ILocationCityGetParams, params: RequestParams = {}) =>
      this.request<ICnCity[], object>({
        path: `/v1/location/city`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 密钥管理
     * @name SshkeyPost
     * @summary 新增密钥
     * @request POST:/v1/sshkey
     */
    sshkeyPost: (data: IUSshKey, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/sshkey`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户服务快速检索接口
     * @name OrganizationIndexGet
     * @summary 查询企业信息
     * @request GET:/v1/organization/index
     */
    organizationIndexGet: (query: IOrganizationIndexGetParams, params: RequestParams = {}) =>
      this.request<IQuickQueryModel, object>({
        path: `/v1/organization/index`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 密钥管理
     * @name SshkeyExportDetail
     * @summary 导出密钥
     * @request GET:/v1/sshkey/export/{id}
     */
    sshkeyExportDetail: (id: string, params: RequestParams = {}) =>
      this.request<any, object>({
        path: `/v1/sshkey/export/${id}`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户管理
     * @name UserQueryPost
     * @summary 分页查看平台注册用户信息列表
     * @request POST:/v1/user/query
     */
    userQueryPost: (data: IUserQuery, params: RequestParams = {}) =>
      this.request<IPageResultListUserInfo, object>({
        path: `/v1/user/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description 获取账户下的地址列表
     *
     * @tags 链地址管理
     * @name AddressQueryPost
     * @summary 获取地址列表
     * @request POST:/v1/address/query
     */
    addressQueryPost: (data: IBaseQuery, params: RequestParams = {}) =>
      this.request<IPageResultChainAddr, object>({
        path: `/v1/address/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 企业资质管理
     * @name OrganizationQualificationPost
     * @summary 企业审批
     * @request POST:/v1/organization/qualification
     */
    organizationQualificationPost: (data: IOrgRequest, params: RequestParams = {}) =>
      this.request<boolean, object>({
        path: `/v1/organization/qualification`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 联盟管理
     * @name FederationQueryPost
     * @summary 分页查看联盟列表
     * @request POST:/v1/federation/query
     */
    federationQueryPost: (data: IBaseQuery, params: RequestParams = {}) =>
      this.request<IPageResultFederation, object>({
        path: `/v1/federation/query`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}
