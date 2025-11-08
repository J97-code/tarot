import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(console.error)
  })
}

const persisted = localStorage.getItem('theme') || 'violeta'
document.documentElement.setAttribute('data-theme', persisted)

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App defaultTheme={persisted} /></React.StrictMode>
)
