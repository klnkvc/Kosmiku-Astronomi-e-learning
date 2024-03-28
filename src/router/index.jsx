import React from 'react'
import { Route, Routes } from 'react-router-dom'
import * as Pages from '../pages'

export default function ReactRouter() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Pages.Beranda/>} />
        <Route path='/register' element={<Pages.Register/>} />
        <Route path='/login' element={<Pages.Login/>} />
        <Route path='/about-us' element={<Pages.Tentang/>} />
        <Route path='/explore' element={<Pages.Jelajahi/>} />
        <Route path='/topic' element={<Pages.Topic/>} />
    </Routes>
    </>
  )
}
