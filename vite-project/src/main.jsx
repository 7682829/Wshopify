import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { ThemeProvider } from './components/theme-provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode> 
  <BrowserRouter>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </ThemeProvider>
  </BrowserRouter>
 </React.StrictMode> 
)
