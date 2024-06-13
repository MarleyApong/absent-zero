import LoginForm from "@/components/me/LoginForm"
import './auth.scss'

const Auth = () => {
   return (
      <div className="h-screen w-screen flex justify-center items-center auth">
         <LoginForm />
      </div>

   )
}

export default Auth