import React from 'react'
import { ModeToggle } from '../components/ThemeToggler'
import Image from 'next/image'
import logo from '@/assets/logo.png'
function Header() {
  return (
    <header className='flex justify-between h-15'>
      <div className='ms-5'>
        <Image src={logo} alt='' height={70} width={70}/>
      </div>
      <div className='flex items-center space-x-5 px-5 py-3 '>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header