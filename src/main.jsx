import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import AboutMe from './Components/AboutMe.jsx'
import Projects from './Components/Projects.jsx'
import Experience from './Components/Experience.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<AboutMe/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/experience' element={<Experience/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
