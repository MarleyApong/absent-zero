import jwt from 'jwt-simple'

interface TokenValidity {
    isValid: boolean
    errorCode?: string
}

interface JwtPayload {
    exp?: number
    [key: string]: any
}

const decodeJwt = (token: string): JwtPayload | null => {
    try {
        const decoded: JwtPayload = jwt.decode(token, '', true) // Pass an empty secret for decoding without verification
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

const saveToken = (token: string, id: string, role: string, env: string, status: string): void => {
    sessionStorage.setItem('lkiy-', token)
    sessionStorage.setItem('id', id)
    sessionStorage.setItem('lero', role)
    sessionStorage.setItem('env', env)
    sessionStorage.setItem('status', status)
}

const logout = (): void => {
    sessionStorage.removeItem('lkiy-')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('status')
    sessionStorage.removeItem('env')
    sessionStorage.removeItem('lero')
}

interface LoginStatus {
    isValid: boolean
    errorCode?: string
}

const isLogged = (): LoginStatus => {
    const token = sessionStorage.getItem('lkiy-')
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
    return sessionStorage.getItem('lkiy-')
}

export const sessionService = {
    saveToken,
    logout,
    isLogged,
    getToken
}
