import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ResponsiveScale } from 'react-responsive-scale'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveScale backgroundColor='#eee'>
      <App />
    </ResponsiveScale>
  </StrictMode>
)
