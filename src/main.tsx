import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContextProvider } from './hooks/useContext.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
      <Toaster />
        <App />
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
