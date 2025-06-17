import React from 'react'
import logo from "../assets/images/logo.svg"
import { navItems } from '../hooks/paths'
import NavItem from '../components/NavItem'
import { Link, NavLink } from 'react-router-dom'
import { LogoIcon } from '../assets/icons'

const Navbar = () => {
  return (
     <div className='w-[22%] bg-[#363740] h-[100vh] overflow-y-hidden'>
      <div className='pt-[41px] pl-[21px] pb-[59px] '>
        <Link className='flex items-center gap-[12px]'> 
          <LogoIcon/>
          <span className='text-[#A4A6B3] text-[19px] font-bold'>Dashboard Kit</span>
        </Link>
      </div>
      <NavItem/>  
     </div>
  )
}

export default Navbar