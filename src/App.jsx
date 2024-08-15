import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dribbble from './components/Dribbble'
import Login from './components/Login'
import Signin from './components/Signin'
import Principal from './components/Principal'
import Share from './components/Share'

const App = () => {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path={"/"} element={<Dribbble />}/>
          <Route path={"/Login"} element={<Login/>}/>
          <Route path={"/Signin"} element={<Signin/>}/>
          <Route path={"/Principal"} element={<Principal/>}/>
          <Route path={"/Share"} element={<Share/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App