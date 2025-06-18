import React from 'react'
import Navbar from '../modules/Navbar'
import Header from '../modules/Header'
import PageRoutes from '../routes'

const Layout = () => {
  return (
    <div className='flex justify-between'>
        <Navbar/>
        <div className='w-[78%] h-[100vh] header overflow-y-auto px-[30px] gap-[54px] py-[34px]'>
            <Header/>
            <PageRoutes/>
        </div>
    </div>
  )
}

export default Layout