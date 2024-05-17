import LoginForm from "@/components/me/login-form"
import './auth.scss'

const Auth = () => {
   return (
      <div className="h-screen w-screen flex justify-center items-center auth">
         <LoginForm />
      </div>

   )
}

export default Auth