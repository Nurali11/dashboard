import React from 'react'
import { navItems } from '../hooks/paths'
import { NavLink } from 'react-router-dom'

const NavItem = () => {
  return (
    <div className='flex flex-col'>
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={`${item.title === "Settings" ? "border-t-[2px] border-t-[#dfe0eb10]" : ""} flex items-center relative pl-[32px] py-[20px] gap-[24px] text-[#A4A6B3]`}
        >
          {item.icon}
          <span>{item.title}</span>
        </NavLink>
      ))}
    </div>
  )
}

export default NavItem
