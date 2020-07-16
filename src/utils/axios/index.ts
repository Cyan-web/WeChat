import axios from './axios.interceptors'

type METHOD_POST = 'post'
export const METHOD_POST: METHOD_POST = 'post'
type METHOD_GET = 'get'
export const METHOD_GET: METHOD_GET = 'get'

interface IFetchParams {
    url: string
    method?: METHOD_POST | METHOD_GET
    params?: any
}

export const fetch = async <T>({ url, params, method }: IFetchParams): Promise<T> => {
    return method === 'get' ? axios.get(url, { params }) : axios.post(url, params)
}
