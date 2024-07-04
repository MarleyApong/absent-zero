import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import { sessionService } from "./sessionService"
import config from "../config"

const Axios: AxiosInstance = axios.create({
    baseURL: config.serverUrl,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
    }
})

// INTERCEPTOR OF TOKEN
Axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    if (sessionService.isLogged().isValid) {
        const token = sessionService.getToken()
        if (token) {
            request.headers.Authorization = 'Bearer ' + token
        }
    }
    return request
})

export default Axios