import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import Breakfast from '../pages/Breakfast'
import Cakes from '../pages/Cakes'
import Drinks from '../pages/Drinks'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/#' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/breakfast' element={<Breakfast/>} />
        <Route path='/cakes' element={<Cakes/>} />
        <Route path='/drinks' element={<Drinks/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
