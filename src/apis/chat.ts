import { fetch, METHOD_GET } from '../utils/axios'

const API_BASE_CHAT = '/chat'

export const api_getChatHistory = (id: IUserBase['id']) => fetch<IChatHistoryResponseData[]>({ url: API_BASE_CHAT + '/chatHistory', params: { id }, method: METHOD_GET })
