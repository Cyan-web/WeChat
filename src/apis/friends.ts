import { fetch } from '../utils/axios'

const API_BASE_FRIEND = '/friends'

// 搜索好友
export const api_searchFriend = (params: { search: string }) => fetch<ISearchUserInfoResponseData[]>({ url: API_BASE_FRIEND + '/search', params })

// 添加好友
export const api_addFriend = (params: IAddFriendApiParams) => fetch<null>({ url: API_BASE_FRIEND + '/addFriend', params })
