import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { appContext } from './context/Context.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <appContext.Provider value="">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </appContext.Provider>
  </StrictMode>,
)