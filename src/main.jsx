import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/style.css'
import './assets/css/Login.css'
import './assets/css/Register.css'
import './assets/css/Home.css'
import './assets/css/Stories.css'
import './assets/css/UserDashboard.css'
import './assets/css/UserUsers.css'

import { ThemeProvider } from './components/theme-provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
           <App />
        </ThemeProvider>
          
  </React.StrictMode>,
)
