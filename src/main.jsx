import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Github from './pages/Github.jsx'
import User from './pages/User.jsx'
import LogIn from './pages/LogIn.jsx'


const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element = {<App />} >
         <Route path='' element={<Home />}></Route>
         <Route path='about' element={<About />}></Route>
         <Route path='contact' element={<Contact />}></Route>
         <Route path='github' element={<Github />}></Route>
         <Route path='login' element={<LogIn />}></Route>
         <Route path='user/:userid' element={<User />}></Route>

      </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <RouterProvider router={router} />
 </React.StrictMode>
    

)
