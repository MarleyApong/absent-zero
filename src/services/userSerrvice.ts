import Axios from "."

const getCurrentUser = () => {
   return Axios.get('/current-user')
}

export const userService = {
   getCurrentUser
}