import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Header/>
<App />
<Footer/>
 </>
    
  
)
