import React from 'react'
import ReactDOM from 'react-dom/client'
import AppA from './AppA.jsx'
import AppB from './AppB.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppB />
  </React.StrictMode>,
)
