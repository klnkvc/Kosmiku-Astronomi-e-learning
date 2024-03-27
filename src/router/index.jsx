import React from 'react'
import { Route, Routes } from 'react-router-dom'
import * as Pages from '../pages'

export default function ReactRouter() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Pages.Beranda/>} />
    </Routes>
    </>
  )
}
