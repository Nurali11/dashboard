import React, { useState, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navItems } from '../hooks/paths'
import { NimadurIcon, SearchIcon } from '../assets/icons'
import ManImg from "../assets/images/photo.svg"

const Header = () => {
  const { pathname } = useLocation()
  const [searchActive, setSearchActive] = useState(false)
  const inputRef = useRef(null)

  const handleSearchClick = () => {
    setSearchActive(true)
    // фокус через задержку, чтобы input успел появиться
    setTimeout(() => inputRef.current?.focus(), 10)
  }

  const handleBlur = () => {
    setSearchActive(false)
  }

  return (
    <div className='flex items-center justify-between mb-[58px]'>
      <strong className='font-bold text-[24px] text-[#252733]'>
        {navItems.find(item => item.path === pathname)?.title}
      </strong>

      {(pathname === "/tickets" || pathname === "/") && (
        <div className='flex items-center gap-[24px] justify-center'>

          <input
            ref={inputRef}
            onBlur={handleBlur}
            type="text"
            placeholder="Search..."
            className={`
              ${searchActive ? 'w-[200px] opacity-100 scale-100' : 'w-0 opacity-0 scale-95'}
              text-[20px] shadow-md shadow-blue-400
              transition-all duration-300 border border-black px-2 py-1 rounded
              outline-none overflow-hidden
            `}
          />

          {!searchActive && (
            <button onClick={handleSearchClick} className='transition-all duration-300'>
              <SearchIcon />
            </button>
          )}

          <NimadurIcon />
          <div className='flex items-center justify-center gap-[14px]'>
            <p>Jones Ferdinand</p>
            <img src={ManImg} alt="" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
