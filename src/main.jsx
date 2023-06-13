import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from './Routes/index.jsx'
import { RouterProvider } from 'react-router-dom'

//import store from './Store/store.js'
//import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
