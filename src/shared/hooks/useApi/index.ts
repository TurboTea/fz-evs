import { Api as ChainService } from '@shared/api/chain-service'
import { Api as GatewayService } from '@shared/api/gateway-service'
import { Api as UserService } from '@shared/api/user-service'
import { serviceWrapper } from '@shared/hooks/useApi/utils'
const chainService = serviceWrapper<ChainService<unknown>>(new ChainService(), 'chain-service')
const gatewayService = serviceWrapper<GatewayService<unknown>>(new GatewayService(), 'gateway-service')
const userService = serviceWrapper<UserService<unknown>>(new UserService(), 'user-service')
export const useApi = () => {
  return {
    chainService,
    gatewayService,
    userService,
  }
}
