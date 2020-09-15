import { fetch } from '../utils/axios'

export const api_getUserInfo = () => fetch<IUserInfo>({ url: '/userInfo', method: 'get' })
