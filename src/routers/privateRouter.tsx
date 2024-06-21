import { Route, Routes } from "react-router-dom"
import { CheckMyPresence, Dashboard, Layout } from '../pages'
import Header from "@/components/me/Header"
import Historical from "@/pages/Historical"
import TimeTable from "@/pages/TimeTable"

const PrivateRouter = () => {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/check-mypresence" element={<CheckMyPresence />} />
            <Route path="/historical" element={<Historical />} />
            <Route path="/time-table" element={<TimeTable />} />
          </Route>
        </Routes>
      </main >
    </div>
  )
}

export default PrivateRouter
