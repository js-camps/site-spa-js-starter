import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './components/Routers.jsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <React.StrictMode>
        <Routers />
      </React.StrictMode>
    </BrowserRouter>,
)
