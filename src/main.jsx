import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SideBar from './Partiel/SideBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideBar />
  </StrictMode>,
)
