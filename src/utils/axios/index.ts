import axios from './axios.interceptors'

interface IFetchParams {
    url: string
    method?: 'post' | 'get'
    params?: any
}

export const fetch = async <T>({ url, params, method }: IFetchParams): Promise<T> => {
    return method === 'get' ? axios.get(url, { params }) : axios.post(url, params)
}
