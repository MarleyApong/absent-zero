import Auth from '@/pages/Auth'
import { Route, Routes } from 'react-router-dom'
// import Login from '../pages/Auth'

const AuthRouter = () => {
   return (
      <Routes>
         <Route index element={<Auth/>}/>
         <Route path='login' element={<Auth />} />
         <Route path='*' element={<Auth />} />
      </Routes>
   )
}

export default AuthRouter