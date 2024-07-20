import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GetData from './components/GetData.jsx'
import Home from './components/Home.jsx'
import SignUp from './components/SignUp.jsx'
const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/login',
        element: <GetData />
      },
      {
        path:'/signup',
        element:<SignUp />
      }
    ]
  },
  {

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
