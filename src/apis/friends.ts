import { fetch } from '../utils/axios'

const API_BASE_FRIEND = '/friends'

// 搜索好友
export const api_searchFriend = (params: { search: string }) => fetch<ISearchUserInfoResponseData[]>({ url: API_BASE_FRIEND + '/search', params })

// 添加好友
export const api_addFriend = (params: IAddFriendApiParams) => fetch<null>({ url: API_BASE_FRIEND + '/addFriend', params })

// 待办
export const api_awaitReply = () => fetch<ISearchUserInfoResponseData[]>({ url: API_BASE_FRIEND + '/awaitReply', method: 'get' })

export type Api_undetermined = (params: { id: number }) => Promise<void>

// 同意添加好友请求
export const api_agreeAddFriend: Api_undetermined = (params) => fetch({ url: API_BASE_FRIEND + '/agree', params })

// 拒绝添加好友请求
export const api_refuseAddFriend: Api_undetermined = (params) => fetch({ url: API_BASE_FRIEND + '/refuse', params })

// 所有好友
export const api_allFriends = () => fetch<IUserBase[]>({ url: API_BASE_FRIEND + '/all', method: 'get' })

// 在线列表
// export const api_onlineFriends = () => fetch<ISearchUserInfoResponseData[]>({ url: API_BASE_FRIEND + '/online', method: 'get' })
