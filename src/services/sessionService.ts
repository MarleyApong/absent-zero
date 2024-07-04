// import { decryptData } from "@/utils/utilsCrypto"
import { jwtDecode } from "jwt-decode"
import { NavigateFunction } from "react-router-dom"

interface TokenValidity {
    isValid: boolean
    errorCode?: string
}

interface JwtPayload {
    exp?: number
    [key: string]: any
}

interface LoginStatus {
    isValid: boolean
    errorCode?: string
}


const decodeJwt = (token: string): JwtPayload | null => {
    try {
        const decoded: JwtPayload = jwtDecode<JwtPayload>(token)
        return decoded
    } catch (err) {
        return null
    }
}

const isValidToken = (token: string): TokenValidity => {
    const decoded = decodeJwt(token)

    if (!decoded) {
        return { isValid: false, errorCode: "INVALID_TOKEN_FORMAT" }
    }
    const currentTimestamp = Math.floor(Date.now() / 1000)
    if (decoded.exp && decoded.exp < currentTimestamp) {
        return { isValid: false, errorCode: "TOKEN_EXPIRED" }
    }
    return { isValid: true }
}

const saveToken = (token: string): void => {
    sessionStorage.setItem('m-', token)
}

const saveUser = (user: string): void => {
    sessionStorage.setItem('focus', user)
}

const logout = (navigate: NavigateFunction): void => {
    navigate('/auth/login')
    sessionStorage.removeItem('m-')
    sessionStorage.removeItem('focus')
}

const isLogged = (): LoginStatus => {
    // const token = decryptData(sessionStorage.getItem('m-'))
    const token = sessionStorage.getItem('m-')

    if (token) {
        const tokenValidity = isValidToken(token)
        if (tokenValidity.isValid) {
            return { isValid: true }
        } else {
            return { isValid: false, errorCode: tokenValidity.errorCode }
        }
    }
    return { isValid: false, errorCode: "TOKEN_NOT_FOUND" }
}

const getToken = (): string | null => {
    // return decryptData(sessionStorage.getItem('m-'))
    return sessionStorage.getItem('m-')
}

export const sessionService = {
    saveToken,
    saveUser,
    logout,
    isLogged,
    getToken
}