import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Single from '../pages/Single'

const AllRoute = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Products' element={<Product/>} />
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='*' element={<Error/>} />
            <Route path='/product/:id' element={<Single />} />
            
        </Routes>
    </div>
  )
}

export default AllRoute