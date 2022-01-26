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

export interface IKeyType {
  requirement?: 'OPTIONAL' | 'RECOMMENDED' | 'REQUIRED'
  value?: string
}

export interface IPublicKey {
  algorithm?: string

  /** @format byte */
  encoded?: string
  format?: string
}

export type IMono = object

export interface ILoginRequest {
  password?: string
  username?: string
  verCode?: string
}

export interface IPrincipal {
  name?: string
}

export interface IKeyStore {
  provider?: Record<string, object>
  type?: string
}

export interface IRSAKey {
  algorithm?: IAlgorithm
  firstCRTCoefficient?: IBase64URL
  firstFactorCRTExponent?: IBase64URL
  firstPrimeFactor?: IBase64URL
  keyID?: string
  keyOperations?: (
    | 'DECRYPT'
    | 'DERIVE_BITS'
    | 'DERIVE_KEY'
    | 'ENCRYPT'
    | 'SIGN'
    | 'UNWRAP_KEY'
    | 'VERIFY'
    | 'WRAP_KEY'
  )[]
  keyStore?: IKeyStore
  keyType?: IKeyType
  keyUse?: IKeyUse
  modulus?: IBase64URL
  otherPrimes?: IOtherPrimesInfo[]
  parsedX509CertChain?: IX509Certificate[]
  private?: boolean
  privateExponent?: IBase64URL
  publicExponent?: IBase64URL
  requiredParams?: Record<string, object>
  secondFactorCRTExponent?: IBase64URL
  secondPrimeFactor?: IBase64URL
  x509CertChain?: IBase64[]
  x509CertSHA256Thumbprint?: IBase64URL
  x509CertThumbprint?: IBase64URL

  /** @format uri */
  x509CertURL?: string
}

export interface IX500Principal {
  /** @format byte */
  encoded?: string
  name?: string
}

export interface IAlgorithm {
  name?: string
  requirement?: 'OPTIONAL' | 'RECOMMENDED' | 'REQUIRED'
}

export interface IResultRSAKey {
  code?: string
  data?: IRSAKey
  message?: string
  status?:
    | 'ACCEPTED'
    | 'ALREADY_REPORTED'
    | 'BAD_GATEWAY'
    | 'BAD_REQUEST'
    | 'BANDWIDTH_LIMIT_EXCEEDED'
    | 'CHECKPOINT'
    | 'CONFLICT'
    | 'CONTINUE'
    | 'CREATED'
    | 'DESTINATION_LOCKED'
    | 'EXPECTATION_FAILED'
    | 'FAILED_DEPENDENCY'
    | 'FORBIDDEN'
    | 'FOUND'
    | 'GATEWAY_TIMEOUT'
    | 'GONE'
    | 'HTTP_VERSION_NOT_SUPPORTED'
    | 'IM_USED'
    | 'INSUFFICIENT_SPACE_ON_RESOURCE'
    | 'INSUFFICIENT_STORAGE'
    | 'INTERNAL_SERVER_ERROR'
    | 'I_AM_A_TEAPOT'
    | 'LENGTH_REQUIRED'
    | 'LOCKED'
    | 'LOOP_DETECTED'
    | 'METHOD_FAILURE'
    | 'METHOD_NOT_ALLOWED'
    | 'MOVED_PERMANENTLY'
    | 'MOVED_TEMPORARILY'
    | 'MULTIPLE_CHOICES'
    | 'MULTI_STATUS'
    | 'NETWORK_AUTHENTICATION_REQUIRED'
    | 'NON_AUTHORITATIVE_INFORMATION'
    | 'NOT_ACCEPTABLE'
    | 'NOT_EXTENDED'
    | 'NOT_FOUND'
    | 'NOT_IMPLEMENTED'
    | 'NOT_MODIFIED'
    | 'NO_CONTENT'
    | 'OK'
    | 'PARTIAL_CONTENT'
    | 'PAYLOAD_TOO_LARGE'
    | 'PAYMENT_REQUIRED'
    | 'PERMANENT_REDIRECT'
    | 'PRECONDITION_FAILED'
    | 'PRECONDITION_REQUIRED'
    | 'PROCESSING'
    | 'PROXY_AUTHENTICATION_REQUIRED'
    | 'REQUESTED_RANGE_NOT_SATISFIABLE'
    | 'REQUEST_ENTITY_TOO_LARGE'
    | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
    | 'REQUEST_TIMEOUT'
    | 'REQUEST_URI_TOO_LONG'
    | 'RESET_CONTENT'
    | 'SEE_OTHER'
    | 'SERVICE_UNAVAILABLE'
    | 'SWITCHING_PROTOCOLS'
    | 'TEMPORARY_REDIRECT'
    | 'TOO_EARLY'
    | 'TOO_MANY_REQUESTS'
    | 'UNAUTHORIZED'
    | 'UNAVAILABLE_FOR_LEGAL_REASONS'
    | 'UNPROCESSABLE_ENTITY'
    | 'UNSUPPORTED_MEDIA_TYPE'
    | 'UPGRADE_REQUIRED'
    | 'URI_TOO_LONG'
    | 'USE_PROXY'
    | 'VARIANT_ALSO_NEGOTIATES'
}

export interface IResultInt {
  code?: string

  /** @format int32 */
  data?: number
  message?: string
  status?:
    | 'ACCEPTED'
    | 'ALREADY_REPORTED'
    | 'BAD_GATEWAY'
    | 'BAD_REQUEST'
    | 'BANDWIDTH_LIMIT_EXCEEDED'
    | 'CHECKPOINT'
    | 'CONFLICT'
    | 'CONTINUE'
    | 'CREATED'
    | 'DESTINATION_LOCKED'
    | 'EXPECTATION_FAILED'
    | 'FAILED_DEPENDENCY'
    | 'FORBIDDEN'
    | 'FOUND'
    | 'GATEWAY_TIMEOUT'
    | 'GONE'
    | 'HTTP_VERSION_NOT_SUPPORTED'
    | 'IM_USED'
    | 'INSUFFICIENT_SPACE_ON_RESOURCE'
    | 'INSUFFICIENT_STORAGE'
    | 'INTERNAL_SERVER_ERROR'
    | 'I_AM_A_TEAPOT'
    | 'LENGTH_REQUIRED'
    | 'LOCKED'
    | 'LOOP_DETECTED'
    | 'METHOD_FAILURE'
    | 'METHOD_NOT_ALLOWED'
    | 'MOVED_PERMANENTLY'
    | 'MOVED_TEMPORARILY'
    | 'MULTIPLE_CHOICES'
    | 'MULTI_STATUS'
    | 'NETWORK_AUTHENTICATION_REQUIRED'
    | 'NON_AUTHORITATIVE_INFORMATION'
    | 'NOT_ACCEPTABLE'
    | 'NOT_EXTENDED'
    | 'NOT_FOUND'
    | 'NOT_IMPLEMENTED'
    | 'NOT_MODIFIED'
    | 'NO_CONTENT'
    | 'OK'
    | 'PARTIAL_CONTENT'
    | 'PAYLOAD_TOO_LARGE'
    | 'PAYMENT_REQUIRED'
    | 'PERMANENT_REDIRECT'
    | 'PRECONDITION_FAILED'
    | 'PRECONDITION_REQUIRED'
    | 'PROCESSING'
    | 'PROXY_AUTHENTICATION_REQUIRED'
    | 'REQUESTED_RANGE_NOT_SATISFIABLE'
    | 'REQUEST_ENTITY_TOO_LARGE'
    | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
    | 'REQUEST_TIMEOUT'
    | 'REQUEST_URI_TOO_LONG'
    | 'RESET_CONTENT'
    | 'SEE_OTHER'
    | 'SERVICE_UNAVAILABLE'
    | 'SWITCHING_PROTOCOLS'
    | 'TEMPORARY_REDIRECT'
    | 'TOO_EARLY'
    | 'TOO_MANY_REQUESTS'
    | 'UNAUTHORIZED'
    | 'UNAVAILABLE_FOR_LEGAL_REASONS'
    | 'UNPROCESSABLE_ENTITY'
    | 'UNSUPPORTED_MEDIA_TYPE'
    | 'UPGRADE_REQUIRED'
    | 'URI_TOO_LONG'
    | 'USE_PROXY'
    | 'VARIANT_ALSO_NEGOTIATES'
}

export interface IKeyUse {
  value?: string
}

export interface IOtherPrimesInfo {
  factorCRTCoefficient?: IBase64URL
  factorCRTExponent?: IBase64URL
  primeFactor?: IBase64URL
}

export type IBase64 = object

export type IBase64URL = object

export interface IX509Certificate {
  /** @format int32 */
  basicConstraints?: number
  criticalExtensionOIDs?: string[]

  /** @format byte */
  encoded?: string
  extendedKeyUsage?: string[]
  issuerAlternativeNames?: object[][]
  issuerDN?: IPrincipal
  issuerUniqueID?: boolean[]
  issuerX500Principal?: IX500Principal
  keyUsage?: boolean[]
  nonCriticalExtensionOIDs?: string[]

  /** @format date-time */
  notAfter?: string

  /** @format date-time */
  notBefore?: string
  publicKey?: IPublicKey

  /** @format int64 */
  serialNumber?: number
  sigAlgName?: string
  sigAlgOID?: string

  /** @format byte */
  sigAlgParams?: string

  /** @format byte */
  signature?: string
  subjectAlternativeNames?: object[][]
  subjectDN?: IPrincipal
  subjectUniqueID?: boolean[]
  subjectX500Principal?: IX500Principal

  /** @format byte */
  tbscertificate?: string
  type?: string

  /** @format int32 */
  version?: number
}

export interface IResultBoolean {
  code?: string
  data?: boolean
  message?: string
  status?:
    | 'ACCEPTED'
    | 'ALREADY_REPORTED'
    | 'BAD_GATEWAY'
    | 'BAD_REQUEST'
    | 'BANDWIDTH_LIMIT_EXCEEDED'
    | 'CHECKPOINT'
    | 'CONFLICT'
    | 'CONTINUE'
    | 'CREATED'
    | 'DESTINATION_LOCKED'
    | 'EXPECTATION_FAILED'
    | 'FAILED_DEPENDENCY'
    | 'FORBIDDEN'
    | 'FOUND'
    | 'GATEWAY_TIMEOUT'
    | 'GONE'
    | 'HTTP_VERSION_NOT_SUPPORTED'
    | 'IM_USED'
    | 'INSUFFICIENT_SPACE_ON_RESOURCE'
    | 'INSUFFICIENT_STORAGE'
    | 'INTERNAL_SERVER_ERROR'
    | 'I_AM_A_TEAPOT'
    | 'LENGTH_REQUIRED'
    | 'LOCKED'
    | 'LOOP_DETECTED'
    | 'METHOD_FAILURE'
    | 'METHOD_NOT_ALLOWED'
    | 'MOVED_PERMANENTLY'
    | 'MOVED_TEMPORARILY'
    | 'MULTIPLE_CHOICES'
    | 'MULTI_STATUS'
    | 'NETWORK_AUTHENTICATION_REQUIRED'
    | 'NON_AUTHORITATIVE_INFORMATION'
    | 'NOT_ACCEPTABLE'
    | 'NOT_EXTENDED'
    | 'NOT_FOUND'
    | 'NOT_IMPLEMENTED'
    | 'NOT_MODIFIED'
    | 'NO_CONTENT'
    | 'OK'
    | 'PARTIAL_CONTENT'
    | 'PAYLOAD_TOO_LARGE'
    | 'PAYMENT_REQUIRED'
    | 'PERMANENT_REDIRECT'
    | 'PRECONDITION_FAILED'
    | 'PRECONDITION_REQUIRED'
    | 'PROCESSING'
    | 'PROXY_AUTHENTICATION_REQUIRED'
    | 'REQUESTED_RANGE_NOT_SATISFIABLE'
    | 'REQUEST_ENTITY_TOO_LARGE'
    | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
    | 'REQUEST_TIMEOUT'
    | 'REQUEST_URI_TOO_LONG'
    | 'RESET_CONTENT'
    | 'SEE_OTHER'
    | 'SERVICE_UNAVAILABLE'
    | 'SWITCHING_PROTOCOLS'
    | 'TEMPORARY_REDIRECT'
    | 'TOO_EARLY'
    | 'TOO_MANY_REQUESTS'
    | 'UNAUTHORIZED'
    | 'UNAVAILABLE_FOR_LEGAL_REASONS'
    | 'UNPROCESSABLE_ENTITY'
    | 'UNSUPPORTED_MEDIA_TYPE'
    | 'UPGRADE_REQUIRED'
    | 'URI_TOO_LONG'
    | 'USE_PROXY'
    | 'VARIANT_ALSO_NEGOTIATES'
}

export interface ILoginUserGetParams {
  /** @example  */
  'applicationContext.applicationName'?: string

  /** @example  */
  'applicationContext.displayName'?: string

  /** @example  */
  'applicationContext.id'?: string

  /** @example  */
  'applicationContext.startupDate'?: string

  /** @example  */
  attributes?: string

  /** @example  */
  'localeContext.locale.country'?: string

  /** @example  */
  'localeContext.locale.displayCountry'?: string

  /** @example  */
  'localeContext.locale.displayLanguage'?: string

  /** @example  */
  'localeContext.locale.displayName'?: string

  /** @example  */
  'localeContext.locale.displayScript'?: string

  /** @example  */
  'localeContext.locale.displayVariant'?: string

  /** @example  */
  'localeContext.locale.extensionKeys'?: string

  /** @example  */
  'localeContext.locale.ISO3Country'?: string

  /** @example  */
  'localeContext.locale.ISO3Language'?: string

  /** @example  */
  'localeContext.locale.language'?: string

  /** @example  */
  'localeContext.locale.script'?: string

  /** @example  */
  'localeContext.locale.unicodeLocaleAttributes'?: string

  /** @example  */
  'localeContext.locale.unicodeLocaleKeys'?: string

  /** @example  */
  'localeContext.locale.variant'?: string

  /** @example  */
  logPrefix?: string

  /** @example  */
  notModified?: string

  /** @example  */
  'principal.name'?: string

  /** @example  */
  'request.id'?: string

  /** @example  */
  'request.localAddress.address.address'?: string

  /** @example  */
  'request.localAddress.address.anyLocalAddress'?: string

  /** @example  */
  'request.localAddress.address.canonicalHostName'?: string

  /** @example  */
  'request.localAddress.address.hostAddress'?: string

  /** @example  */
  'request.localAddress.address.hostName'?: string

  /** @example  */
  'request.localAddress.address.linkLocalAddress'?: string

  /** @example  */
  'request.localAddress.address.loopbackAddress'?: string

  /** @example  */
  'request.localAddress.address.MCGlobal'?: string

  /** @example  */
  'request.localAddress.address.MCLinkLocal'?: string

  /** @example  */
  'request.localAddress.address.MCNodeLocal'?: string

  /** @example  */
  'request.localAddress.address.MCOrgLocal'?: string

  /** @example  */
  'request.localAddress.address.MCSiteLocal'?: string

  /** @example  */
  'request.localAddress.address.multicastAddress'?: string

  /** @example  */
  'request.localAddress.address.siteLocalAddress'?: string

  /** @example  */
  'request.localAddress.hostName'?: string

  /** @example  */
  'request.localAddress.hostString'?: string

  /** @example  */
  'request.localAddress.port'?: string

  /** @example  */
  'request.localAddress.unresolved'?: string

  /** @example  */
  'request.remoteAddress.address.address'?: string

  /** @example  */
  'request.remoteAddress.address.anyLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.address.canonicalHostName'?: string

  /** @example  */
  'request.remoteAddress.address.hostAddress'?: string

  /** @example  */
  'request.remoteAddress.address.hostName'?: string

  /** @example  */
  'request.remoteAddress.address.linkLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.address.loopbackAddress'?: string

  /** @example  */
  'request.remoteAddress.address.MCGlobal'?: string

  /** @example  */
  'request.remoteAddress.address.MCLinkLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCNodeLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCOrgLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCSiteLocal'?: string

  /** @example  */
  'request.remoteAddress.address.multicastAddress'?: string

  /** @example  */
  'request.remoteAddress.address.siteLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.hostName'?: string

  /** @example  */
  'request.remoteAddress.hostString'?: string

  /** @example  */
  'request.remoteAddress.port'?: string

  /** @example  */
  'request.remoteAddress.unresolved'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].basicConstraints'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].extendedKeyUsage'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerDN.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerUniqueID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerX500Principal.encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerX500Principal.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].keyUsage'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].notAfter'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].notBefore'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].serialNumber'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgName'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgOID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgParams'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].signature'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectDN.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectUniqueID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectX500Principal.encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectX500Principal.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].TBSCertificate'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].type'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].version'?: string

  /** @example  */
  'request.sslInfo.sessionId'?: string

  /** @example  */
  'response.rawStatusCode'?: string

  /** @example  */
  'response.statusCode'?: string

  /** @example  */
  'session.attributes'?: string

  /** @example  */
  'session.creationTime'?: string

  /** @example  */
  'session.expired'?: string

  /** @example  */
  'session.id'?: string

  /** @example  */
  'session.lastAccessTime'?: string

  /** @example  */
  'session.maxIdleTime.nano'?: string

  /** @example  */
  'session.maxIdleTime.negative'?: string

  /** @example  */
  'session.maxIdleTime.seconds'?: string

  /** @example  */
  'session.maxIdleTime.units[0].dateBased'?: string

  /** @example  */
  'session.maxIdleTime.units[0].durationEstimated'?: string

  /** @example  */
  'session.maxIdleTime.units[0].timeBased'?: string

  /** @example  */
  'session.maxIdleTime.zero'?: string

  /** @example  */
  'session.started'?: string
}

export interface ILoginKaptchaGetParams {
  /** @example  */
  'applicationContext.applicationName'?: string

  /** @example  */
  'applicationContext.displayName'?: string

  /** @example  */
  'applicationContext.id'?: string

  /** @example  */
  'applicationContext.startupDate'?: string

  /** @example  */
  attributes?: string

  /** @example  */
  'localeContext.locale.country'?: string

  /** @example  */
  'localeContext.locale.displayCountry'?: string

  /** @example  */
  'localeContext.locale.displayLanguage'?: string

  /** @example  */
  'localeContext.locale.displayName'?: string

  /** @example  */
  'localeContext.locale.displayScript'?: string

  /** @example  */
  'localeContext.locale.displayVariant'?: string

  /** @example  */
  'localeContext.locale.extensionKeys'?: string

  /** @example  */
  'localeContext.locale.ISO3Country'?: string

  /** @example  */
  'localeContext.locale.ISO3Language'?: string

  /** @example  */
  'localeContext.locale.language'?: string

  /** @example  */
  'localeContext.locale.script'?: string

  /** @example  */
  'localeContext.locale.unicodeLocaleAttributes'?: string

  /** @example  */
  'localeContext.locale.unicodeLocaleKeys'?: string

  /** @example  */
  'localeContext.locale.variant'?: string

  /** @example  */
  logPrefix?: string

  /** @example  */
  notModified?: string

  /** @example  */
  'principal.name'?: string

  /** @example  */
  'request.id'?: string

  /** @example  */
  'request.localAddress.address.address'?: string

  /** @example  */
  'request.localAddress.address.anyLocalAddress'?: string

  /** @example  */
  'request.localAddress.address.canonicalHostName'?: string

  /** @example  */
  'request.localAddress.address.hostAddress'?: string

  /** @example  */
  'request.localAddress.address.hostName'?: string

  /** @example  */
  'request.localAddress.address.linkLocalAddress'?: string

  /** @example  */
  'request.localAddress.address.loopbackAddress'?: string

  /** @example  */
  'request.localAddress.address.MCGlobal'?: string

  /** @example  */
  'request.localAddress.address.MCLinkLocal'?: string

  /** @example  */
  'request.localAddress.address.MCNodeLocal'?: string

  /** @example  */
  'request.localAddress.address.MCOrgLocal'?: string

  /** @example  */
  'request.localAddress.address.MCSiteLocal'?: string

  /** @example  */
  'request.localAddress.address.multicastAddress'?: string

  /** @example  */
  'request.localAddress.address.siteLocalAddress'?: string

  /** @example  */
  'request.localAddress.hostName'?: string

  /** @example  */
  'request.localAddress.hostString'?: string

  /** @example  */
  'request.localAddress.port'?: string

  /** @example  */
  'request.localAddress.unresolved'?: string

  /** @example  */
  'request.remoteAddress.address.address'?: string

  /** @example  */
  'request.remoteAddress.address.anyLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.address.canonicalHostName'?: string

  /** @example  */
  'request.remoteAddress.address.hostAddress'?: string

  /** @example  */
  'request.remoteAddress.address.hostName'?: string

  /** @example  */
  'request.remoteAddress.address.linkLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.address.loopbackAddress'?: string

  /** @example  */
  'request.remoteAddress.address.MCGlobal'?: string

  /** @example  */
  'request.remoteAddress.address.MCLinkLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCNodeLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCOrgLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCSiteLocal'?: string

  /** @example  */
  'request.remoteAddress.address.multicastAddress'?: string

  /** @example  */
  'request.remoteAddress.address.siteLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.hostName'?: string

  /** @example  */
  'request.remoteAddress.hostString'?: string

  /** @example  */
  'request.remoteAddress.port'?: string

  /** @example  */
  'request.remoteAddress.unresolved'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].basicConstraints'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].extendedKeyUsage'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerDN.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerUniqueID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerX500Principal.encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerX500Principal.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].keyUsage'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].notAfter'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].notBefore'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].serialNumber'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgName'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgOID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgParams'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].signature'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectDN.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectUniqueID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectX500Principal.encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectX500Principal.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].TBSCertificate'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].type'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].version'?: string

  /** @example  */
  'request.sslInfo.sessionId'?: string

  /** @example  */
  'response.rawStatusCode'?: string

  /** @example  */
  'response.statusCode'?: string

  /** @example  */
  'session.attributes'?: string

  /** @example  */
  'session.creationTime'?: string

  /** @example  */
  'session.expired'?: string

  /** @example  */
  'session.id'?: string

  /** @example  */
  'session.lastAccessTime'?: string

  /** @example  */
  'session.maxIdleTime.nano'?: string

  /** @example  */
  'session.maxIdleTime.negative'?: string

  /** @example  */
  'session.maxIdleTime.seconds'?: string

  /** @example  */
  'session.maxIdleTime.units[0].dateBased'?: string

  /** @example  */
  'session.maxIdleTime.units[0].durationEstimated'?: string

  /** @example  */
  'session.maxIdleTime.units[0].timeBased'?: string

  /** @example  */
  'session.maxIdleTime.zero'?: string

  /** @example  */
  'session.started'?: string
}

export interface ILogoutDeleteParams {
  /** @example  */
  'applicationContext.applicationName'?: string

  /** @example  */
  'applicationContext.displayName'?: string

  /** @example  */
  'applicationContext.id'?: string

  /** @example  */
  'applicationContext.startupDate'?: string

  /** @example  */
  attributes?: string

  /** @example  */
  'localeContext.locale.country'?: string

  /** @example  */
  'localeContext.locale.displayCountry'?: string

  /** @example  */
  'localeContext.locale.displayLanguage'?: string

  /** @example  */
  'localeContext.locale.displayName'?: string

  /** @example  */
  'localeContext.locale.displayScript'?: string

  /** @example  */
  'localeContext.locale.displayVariant'?: string

  /** @example  */
  'localeContext.locale.extensionKeys'?: string

  /** @example  */
  'localeContext.locale.ISO3Country'?: string

  /** @example  */
  'localeContext.locale.ISO3Language'?: string

  /** @example  */
  'localeContext.locale.language'?: string

  /** @example  */
  'localeContext.locale.script'?: string

  /** @example  */
  'localeContext.locale.unicodeLocaleAttributes'?: string

  /** @example  */
  'localeContext.locale.unicodeLocaleKeys'?: string

  /** @example  */
  'localeContext.locale.variant'?: string

  /** @example  */
  logPrefix?: string

  /** @example  */
  notModified?: string

  /** @example  */
  'principal.name'?: string

  /** @example  */
  'request.id'?: string

  /** @example  */
  'request.localAddress.address.address'?: string

  /** @example  */
  'request.localAddress.address.anyLocalAddress'?: string

  /** @example  */
  'request.localAddress.address.canonicalHostName'?: string

  /** @example  */
  'request.localAddress.address.hostAddress'?: string

  /** @example  */
  'request.localAddress.address.hostName'?: string

  /** @example  */
  'request.localAddress.address.linkLocalAddress'?: string

  /** @example  */
  'request.localAddress.address.loopbackAddress'?: string

  /** @example  */
  'request.localAddress.address.MCGlobal'?: string

  /** @example  */
  'request.localAddress.address.MCLinkLocal'?: string

  /** @example  */
  'request.localAddress.address.MCNodeLocal'?: string

  /** @example  */
  'request.localAddress.address.MCOrgLocal'?: string

  /** @example  */
  'request.localAddress.address.MCSiteLocal'?: string

  /** @example  */
  'request.localAddress.address.multicastAddress'?: string

  /** @example  */
  'request.localAddress.address.siteLocalAddress'?: string

  /** @example  */
  'request.localAddress.hostName'?: string

  /** @example  */
  'request.localAddress.hostString'?: string

  /** @example  */
  'request.localAddress.port'?: string

  /** @example  */
  'request.localAddress.unresolved'?: string

  /** @example  */
  'request.remoteAddress.address.address'?: string

  /** @example  */
  'request.remoteAddress.address.anyLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.address.canonicalHostName'?: string

  /** @example  */
  'request.remoteAddress.address.hostAddress'?: string

  /** @example  */
  'request.remoteAddress.address.hostName'?: string

  /** @example  */
  'request.remoteAddress.address.linkLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.address.loopbackAddress'?: string

  /** @example  */
  'request.remoteAddress.address.MCGlobal'?: string

  /** @example  */
  'request.remoteAddress.address.MCLinkLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCNodeLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCOrgLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCSiteLocal'?: string

  /** @example  */
  'request.remoteAddress.address.multicastAddress'?: string

  /** @example  */
  'request.remoteAddress.address.siteLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.hostName'?: string

  /** @example  */
  'request.remoteAddress.hostString'?: string

  /** @example  */
  'request.remoteAddress.port'?: string

  /** @example  */
  'request.remoteAddress.unresolved'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].basicConstraints'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].extendedKeyUsage'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerDN.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerUniqueID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerX500Principal.encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerX500Principal.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].keyUsage'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].notAfter'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].notBefore'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].serialNumber'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgName'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgOID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgParams'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].signature'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectDN.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectUniqueID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectX500Principal.encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectX500Principal.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].TBSCertificate'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].type'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].version'?: string

  /** @example  */
  'request.sslInfo.sessionId'?: string

  /** @example  */
  'response.rawStatusCode'?: string

  /** @example  */
  'response.statusCode'?: string

  /** @example  */
  'session.attributes'?: string

  /** @example  */
  'session.creationTime'?: string

  /** @example  */
  'session.expired'?: string

  /** @example  */
  'session.id'?: string

  /** @example  */
  'session.lastAccessTime'?: string

  /** @example  */
  'session.maxIdleTime.nano'?: string

  /** @example  */
  'session.maxIdleTime.negative'?: string

  /** @example  */
  'session.maxIdleTime.seconds'?: string

  /** @example  */
  'session.maxIdleTime.units[0].dateBased'?: string

  /** @example  */
  'session.maxIdleTime.units[0].durationEstimated'?: string

  /** @example  */
  'session.maxIdleTime.units[0].timeBased'?: string

  /** @example  */
  'session.maxIdleTime.zero'?: string

  /** @example  */
  'session.started'?: string
}

export interface ILoginPostParams {
  /** @example  */
  'applicationContext.applicationName'?: string

  /** @example  */
  'applicationContext.displayName'?: string

  /** @example  */
  'applicationContext.id'?: string

  /** @example  */
  'applicationContext.startupDate'?: string

  /** @example  */
  attributes?: string

  /** @example  */
  'localeContext.locale.country'?: string

  /** @example  */
  'localeContext.locale.displayCountry'?: string

  /** @example  */
  'localeContext.locale.displayLanguage'?: string

  /** @example  */
  'localeContext.locale.displayName'?: string

  /** @example  */
  'localeContext.locale.displayScript'?: string

  /** @example  */
  'localeContext.locale.displayVariant'?: string

  /** @example  */
  'localeContext.locale.extensionKeys'?: string

  /** @example  */
  'localeContext.locale.ISO3Country'?: string

  /** @example  */
  'localeContext.locale.ISO3Language'?: string

  /** @example  */
  'localeContext.locale.language'?: string

  /** @example  */
  'localeContext.locale.script'?: string

  /** @example  */
  'localeContext.locale.unicodeLocaleAttributes'?: string

  /** @example  */
  'localeContext.locale.unicodeLocaleKeys'?: string

  /** @example  */
  'localeContext.locale.variant'?: string

  /** @example  */
  logPrefix?: string

  /** @example  */
  notModified?: string

  /** @example  */
  'principal.name'?: string

  /** @example  */
  'request.id'?: string

  /** @example  */
  'request.localAddress.address.address'?: string

  /** @example  */
  'request.localAddress.address.anyLocalAddress'?: string

  /** @example  */
  'request.localAddress.address.canonicalHostName'?: string

  /** @example  */
  'request.localAddress.address.hostAddress'?: string

  /** @example  */
  'request.localAddress.address.hostName'?: string

  /** @example  */
  'request.localAddress.address.linkLocalAddress'?: string

  /** @example  */
  'request.localAddress.address.loopbackAddress'?: string

  /** @example  */
  'request.localAddress.address.MCGlobal'?: string

  /** @example  */
  'request.localAddress.address.MCLinkLocal'?: string

  /** @example  */
  'request.localAddress.address.MCNodeLocal'?: string

  /** @example  */
  'request.localAddress.address.MCOrgLocal'?: string

  /** @example  */
  'request.localAddress.address.MCSiteLocal'?: string

  /** @example  */
  'request.localAddress.address.multicastAddress'?: string

  /** @example  */
  'request.localAddress.address.siteLocalAddress'?: string

  /** @example  */
  'request.localAddress.hostName'?: string

  /** @example  */
  'request.localAddress.hostString'?: string

  /** @example  */
  'request.localAddress.port'?: string

  /** @example  */
  'request.localAddress.unresolved'?: string

  /** @example  */
  'request.remoteAddress.address.address'?: string

  /** @example  */
  'request.remoteAddress.address.anyLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.address.canonicalHostName'?: string

  /** @example  */
  'request.remoteAddress.address.hostAddress'?: string

  /** @example  */
  'request.remoteAddress.address.hostName'?: string

  /** @example  */
  'request.remoteAddress.address.linkLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.address.loopbackAddress'?: string

  /** @example  */
  'request.remoteAddress.address.MCGlobal'?: string

  /** @example  */
  'request.remoteAddress.address.MCLinkLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCNodeLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCOrgLocal'?: string

  /** @example  */
  'request.remoteAddress.address.MCSiteLocal'?: string

  /** @example  */
  'request.remoteAddress.address.multicastAddress'?: string

  /** @example  */
  'request.remoteAddress.address.siteLocalAddress'?: string

  /** @example  */
  'request.remoteAddress.hostName'?: string

  /** @example  */
  'request.remoteAddress.hostString'?: string

  /** @example  */
  'request.remoteAddress.port'?: string

  /** @example  */
  'request.remoteAddress.unresolved'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].basicConstraints'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].extendedKeyUsage'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerDN.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerUniqueID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerX500Principal.encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].issuerX500Principal.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].keyUsage'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].notAfter'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].notBefore'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].serialNumber'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgName'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgOID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].sigAlgParams'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].signature'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectDN.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectUniqueID'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectX500Principal.encoded'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].subjectX500Principal.name'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].TBSCertificate'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].type'?: string

  /** @example  */
  'request.sslInfo.peerCertificates[0].version'?: string

  /** @example  */
  'request.sslInfo.sessionId'?: string

  /** @example  */
  'response.rawStatusCode'?: string

  /** @example  */
  'response.statusCode'?: string

  /** @example  */
  'session.attributes'?: string

  /** @example  */
  'session.creationTime'?: string

  /** @example  */
  'session.expired'?: string

  /** @example  */
  'session.id'?: string

  /** @example  */
  'session.lastAccessTime'?: string

  /** @example  */
  'session.maxIdleTime.nano'?: string

  /** @example  */
  'session.maxIdleTime.negative'?: string

  /** @example  */
  'session.maxIdleTime.seconds'?: string

  /** @example  */
  'session.maxIdleTime.units[0].dateBased'?: string

  /** @example  */
  'session.maxIdleTime.units[0].durationEstimated'?: string

  /** @example  */
  'session.maxIdleTime.units[0].timeBased'?: string

  /** @example  */
  'session.maxIdleTime.zero'?: string

  /** @example  */
  'session.started'?: string
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
 * @title 网关
 * @version 1.0.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags 登录管理
     * @name LoginUserGet
     * @summary 获取当前登录用户信息
     * @request GET:/v1/login/user
     */
    loginUserGet: (query: ILoginUserGetParams, params: RequestParams = {}) =>
      this.request<IMono, IMono>({
        path: `/v1/login/user`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 登录管理
     * @name LoginPublicKeyGet
     * @summary 获取（RSA）公钥
     * @request GET:/v1/login/public_key
     */
    loginPublicKeyGet: (params: RequestParams = {}) =>
      this.request<IResultRSAKey, IMono>({
        path: `/v1/login/public_key`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 登录管理
     * @name LoginKaptchaGet
     * @summary 生成验证码
     * @request GET:/v1/login/kaptcha
     */
    loginKaptchaGet: (query: ILoginKaptchaGetParams, params: RequestParams = {}) =>
      this.request<IMono, IMono>({
        path: `/v1/login/kaptcha`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 登录管理
     * @name LogoutDelete
     * @summary 注销接口
     * @request DELETE:/v1/logout
     */
    logoutDelete: (query: ILogoutDeleteParams, params: RequestParams = {}) =>
      this.request<IMono, IMono>({
        path: `/v1/logout`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 登录管理
     * @name LoginLicenseGet
     * @summary 获取license开启状态
     * @request GET:/v1/login/license
     */
    loginLicenseGet: (params: RequestParams = {}) =>
      this.request<IResultBoolean, IMono>({
        path: `/v1/login/license`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 登录管理
     * @name LoginRegisterGet
     * @summary 获取注册功能状态
     * @request GET:/v1/login/register
     */
    loginRegisterGet: (params: RequestParams = {}) =>
      this.request<IResultInt, IMono>({
        path: `/v1/login/register`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 登录管理
     * @name LoginPost
     * @summary 登录接口
     * @request POST:/v1/login
     */
    loginPost: (query: ILoginPostParams, data: ILoginRequest, params: RequestParams = {}) =>
      this.request<IMono, IMono>({
        path: `/v1/login`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}
