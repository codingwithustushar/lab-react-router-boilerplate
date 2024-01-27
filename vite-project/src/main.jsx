import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  //we will wrap our app component in browser
  <BrowserRouter>
  <App />
  </BrowserRouter>
    

)
