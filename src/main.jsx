import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeSwitch from './ThemeSwitch.jsx'
import { ScalableRoot } from './ScalableRoot'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScalableRoot>
      <ThemeSwitch />
    </ScalableRoot>
  </StrictMode>
)
