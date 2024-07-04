import { Route, Routes, Navigate } from 'react-router-dom'
import AuthGuardUtil from './utils/authGuardUtil'
import PrivateRouter from './routers/privateRouter'
import AuthRouter from './routers/authRouter'
import './App.scss'

const App = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/*" element={
        <AuthGuardUtil>
          <PrivateRouter />
        </AuthGuardUtil>
      }
      />
      <Route
        path="*"
        element={<Navigate to="/auth/login" />}
      />
    </Routes>
  )
}

export default App
