import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
)
