import axios from './axios.interceptors'

interface IFetchParams {
    url: string
    params: any
}

export const fetch = async <T>({ url, params }: IFetchParams): Promise<T> => {
    return axios.post(url, params)
}
