export {}
enum GATEWAY_CODE {
  success = 'baas.err.success',
  fail = 'baas.err.invalid_request',
}
declare global {
  // 网关code
  enum GATEWAY_CODE {
    success = 'baas.err.success',
    fail = 'baas.err.invalid_request',
  }
  interface Window {
    GATEWAY_CODE: typeof GATEWAY_CODE
  }
}
window.GATEWAY_CODE = GATEWAY_CODE
