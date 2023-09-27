import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './assets/Signup'
import Login from './assets/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './assets/Home'


function App() {
  

  return (
  <BrowserRouter>
  <Routes>
  <Route path='/register' element = {<Signup/>}></Route>
  <Route path='/login' element = {<Login/>}></Route>
  <Route path='/home' element = {<Home/>}></Route>

  </Routes>
  </BrowserRouter>
  )
}

export default App