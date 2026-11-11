import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Welcome from './MyApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Welcome name="Tom" />
  </StrictMode>,
)
