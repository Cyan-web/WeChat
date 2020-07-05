import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

import { session } from '../storage'

const fetchErr = (error: AxiosError) => {
    return Promise.reject(error)
}

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = session.get('token')
    if (token) config.headers.Authorization = token

    return config
}, fetchErr)

axios.interceptors.response.use((response: AxiosResponse) => {
    const { code, data, msg } = response.data

    switch (code) {
        case -1:
        case 0:
            return Promise.reject(msg)
        default:
            return data
    }
}, fetchErr)

export default axios
