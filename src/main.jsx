import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App.jsx'

import Footer from './Components/Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
    {/* <Footer /> */}
  </StrictMode>,
)
