import React from 'react'
import { Outlet } from 'react-router'
import Headers from '../components/headers/Headers'

const Root = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-4  bg-background
         font-Montserrat border"
    >
      <Headers />
      <Outlet />
    </div>
  )
}

export default Root
