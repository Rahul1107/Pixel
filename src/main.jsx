import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GenreProvider } from './context/GenreContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <GenreProvider>
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>
  </GenreProvider>
)
