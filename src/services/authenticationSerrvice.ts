import Axios from "./"

const login = (email: string, password: string) => {
   return Axios.post('/auth/login', {email, password})
}

export const AuthenticationService = {
   login
}