import './App.css'
import React, { useContext, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {TodoPage} from './pages/TodoPage'
import { LoginPage } from './pages/LoginPage'

export const TokenContext = React.createContext(null);
const ProtecteRoute = ({element}) => {
  const [token] = useContext(TokenContext);
  return token ? element() : <Navigate to='/login' />;
  
}
function App() {
  const [token, setToken] = React.useState(null);
  return (
    <div className='App'>
      <TokenContext.Provider value = {[token, setToken]}>
      <Routes>
        <Route path='/' element={<ProtecteRoute element = {TodoPage} />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
      </TokenContext.Provider>

    </div>

    
  )
}

export default App
