import axios from './axios.interceptors'

interface IFetchParams {
    url: string
    params: any
}

export const fetch = ({ url, params }: IFetchParams) => {
    return axios.post(url, params)
}
