import React from 'react'
import Sidebar from './component/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicInfo from './pages/BasicInfo'
import BillingDetails from './pages/BillingDetails'
import Home from './pages/Home'



export default function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin-basic-info' element={<BasicInfo/>}/>
      <Route path='/admin-billing-details' element={<BillingDetails/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
     
    </>
  )
}
