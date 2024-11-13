import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/dashboard' element ={<Dashboard/>}/>
        <Route path='/signin' element ={<SignIn/>}/>
        <Route path='/signup' element ={<SignUp/>}/>
        <Route path='/about' element ={<About/>}/> 
        <Route path='/projects' element ={<Projects/>}/> 
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
