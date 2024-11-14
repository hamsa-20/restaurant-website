import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "../Pages/Home.jsx"
import { Success } from "../Pages/Success.jsx"
import { NotFound } from '../Pages/NotFound.jsx'
import { Outlet } from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path='/' element={<Outlet />}>
    //   <Route path='' element={<Home />} />
    //   <Route path='success' element={<Success />} />
    //   <Route path='*' element={<NotFound />} />
    // </Route >
    <Route path='/'>
      <Route path='' element={<Home />} />
      <Route path='success' element={<Success />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
