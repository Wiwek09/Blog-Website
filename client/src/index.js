import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { AuthContext } from './context/authContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>    
      <App />
    </AuthContext>

  </React.StrictMode>,
)
