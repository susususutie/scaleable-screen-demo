import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeSwitch from './ThemeSwitch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeSwitch />
  </StrictMode>,
)
