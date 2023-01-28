import React from 'react'
import { Outlet } from 'react-router-dom'
import MyCarousel from './MyCarousel'
import Footer from './footer/Footer'
import Navbr from './navbar/Navbr'

function Rootlayout() {
  return (
    <div>
        
        <Navbr/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootlayout