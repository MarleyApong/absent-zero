import { Route, Routes, Navigate } from 'react-router-dom'
import AuthGuard from './utils/authGuardUtil'
import PrivateRouter from './routers/privateRouter'
import AuthRouter from './routers/authRouter'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/*" element={
        <AuthGuard>
          <PrivateRouter />
        </AuthGuard>
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
