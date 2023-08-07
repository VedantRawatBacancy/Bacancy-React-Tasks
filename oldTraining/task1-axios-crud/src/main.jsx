// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//The [ npm run server ] needs to be run post [ npm run dev ] for the code to work as intended.
// The Localhost 3000 is used as the hosting server, and the webapp runds on 5173 (Vite Server)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
