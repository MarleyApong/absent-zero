import { ReactNode } from "react"
import { sessionService } from "@/services/sessionService"
import { Navigate } from "react-router-dom"
import { toast } from "sonner"



interface AuthGuardUtilProps {
   children: ReactNode
}

const AuthGuardUtil = ({ children }: AuthGuardUtilProps) => {
   const token = sessionStorage.getItem('m-')

   if (!token) {
      // IF TOKEN IS NOT PRESENT IN LOCALSTORAGE
      return <Navigate to="/auth/login" />
   }

   const tokenValidity = sessionService.isLogged()

   if (!tokenValidity.isValid) {
      // IF TOKEN IS NOT VALID
      if (tokenValidity.errorCode === "TOKEN_EXPIRED") {
         toast.error("Votre session a expiré !")
      }
      else if (tokenValidity.errorCode === "INVALID_TOKEN_FORMAT") {
         toast.error("Echec de connexion !")
      }
      return <Navigate to="/auth/login" />
   }

   // IF TOKEN IS VALID, DISPLAY PROTECTED CONTENT
   return children
}

export default AuthGuardUtil