import React from 'react'
import { ModeToggle } from './ThemeToggler'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { Link } from 'lucide-react'
import { IoHome } from 'react-icons/io5'
function Header() {
  return (
    <header className='flex flex-col h-screen  justify-center items-center  space-y-5 max-w-xs'>
        <Image src={logo} alt='' height={70} width={70}/>
      
        <ModeToggle  />
        
        <Link href={"/"}>
          <IoHome color="white" size="25" />
        </Link>
      
    </header>
  )
}

export default Header