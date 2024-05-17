import { Route, Routes } from "react-router-dom"
import { CheckMyPresence, Dashboard, Layout } from '../pages'

const PrivateRouter = () => {
  return (
    <div className="pages">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="check-mypresence" element={<CheckMyPresence/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default PrivateRouter