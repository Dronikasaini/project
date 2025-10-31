import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About'
import Body from './component/Body'
import Contact from './component/Contact'
import Out from './component/Out'
import Blog from './component/Blog'
import Code from './component/Code'
import{ createBrowserRouter, RouterProvider} from'react-router-dom'
import Aboutdetail from './component/Aboutdetail'
function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<Out/>,
    children:[{
      path:'/header',
      elememt:<Header/>
    },{
      path:'/Home',
      element:<Home/>
    },{
      path:'/about',
      element:<About/>
    },{
      path:'/home/:kuchbbhi',
      element:<Aboutdetail/>

    },{
      path:'/Contact',
      element:<Contact/>
    },{
      path:'/',
      element:<Body/>
    },{
      path:'/Blog',
      element:<Blog/>
    },{
      path:'/Code',// ye aur header name same rahe
      element:<Code/> // import Code from './component/Code'
    }


  ]


  }])
 return <RouterProvider router={router}/>
    
}


export default App
