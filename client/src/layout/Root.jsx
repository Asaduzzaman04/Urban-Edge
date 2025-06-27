import React from 'react'
import { Outlet } from 'react-router'
import Headers from '../components/headers/Headers'
import Navbar from '../components/headers/Navigation/Navbar'
import Footer from '../components/Footer/Footer'
import UrbanEdgeLoader from '../components/UrbanEdgeLoader'

const Root = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start  bg-background
         font-Montserrat overflow-x-hidden "
    >
      <section className=" top-0 left-0 w-full z-50 bg-white">
        <UrbanEdgeLoader />
        <Headers />
        <Navbar />
      </section>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
