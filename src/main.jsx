import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import History from './pages/history/index.jsx'
import AttachDetach from './pages/attach-detach/index.jsx'
import Alarms from './pages/alarms/index.jsx'
import OpsFour from './pages/ops-four/index.jsx'
import ProtectedRoute from './utils/Protected.jsx'
import Authenticate from './pages/authenticate/index.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:"/authentication/sign-in/",
    element:<Authenticate/>
  },
  {
    path: "/",
    element:<ProtectedRoute Component={App}/>,
  },
  {
    path: "/history",
    element: <History/>,
  },
  {
    path: "/attach-detach",
    element: <AttachDetach/>,
  },
  {
    path: "/alarms",
    element: <Alarms/>,
  },
  {
    path: "/ops-four",
    element: <OpsFour/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
