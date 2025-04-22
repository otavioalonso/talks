import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import World from './components/World.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <World />
  </StrictMode>,
)
