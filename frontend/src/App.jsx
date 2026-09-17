import React, { useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'


const App = () => {
  const user = localStorage.getItem('user')
  return (
    <Routes >
      <Route path='/' element={ !user ? <SignUp/> : <HomePage />}/>
      <Route path='/signup' element={ !user ? <SignUp/> : <Navigate to={'/'} />}/>
      <Route path='/login' element={ !user ? <Login/> : <Navigate to={'/'} />}/>
    </Routes>
  )
}

export default App