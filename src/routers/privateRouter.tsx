import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import { CheckMyPresence, Dashboard, Layout } from '../pages'
import Footer from "@/components/me/Footer"
import Header from "@/components/me/Header"
import { useDimensionHeader } from "@/hooks/useContext"

const PrivateRouter = () => {
  const { heightHeader } = useDimensionHeader()
  const [contentHeight, setContentHeight] = useState(`calc(100vh - ${heightHeader}px)`)

  useEffect(() => {
    setContentHeight(`calc(100vh - ${heightHeader}px)`)
  }, [heightHeader])

  return (
    <div className="pages w-screen min-h-screen flex flex-col overflow-hidden">
      <Header />
      <div className={`content flex flex-col w-full overflow-hidden`} style={{ height: contentHeight }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="check-mypresence" element={<CheckMyPresence />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default PrivateRouter
