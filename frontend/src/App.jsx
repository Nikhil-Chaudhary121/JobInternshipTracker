import React from 'react'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <Routes >
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App