import  { useState } from 'react'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'))

  return (
    <Routes>
      <Route path='/' element={!isLoggedIn ? <Navigate to={'/signup'}/> : <HomePage setIsLoggedIn={setIsLoggedIn} />}/>
      <Route path='/signup' element={!isLoggedIn ? <SignUp setIsLoggedIn={setIsLoggedIn}/> : <Navigate to={'/'} />}/>
      <Route path='/login' element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn}/> : <Navigate to={'/'} />}/>
    </Routes>
  )
}
export default App