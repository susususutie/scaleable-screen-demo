import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ReactResponsiveScale } from 'react-responsive-scale'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactResponsiveScale backgroundColor='#eee'>
      <App />
    </ReactResponsiveScale>
  </StrictMode>
)
