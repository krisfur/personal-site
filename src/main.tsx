import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css';
import App from './App.tsx'

console.log('Tailwind loaded? test', window.getComputedStyle(document.body).backgroundColor);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
