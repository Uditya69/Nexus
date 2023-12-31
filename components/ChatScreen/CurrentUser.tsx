import { AuthContext } from '@/app/context/AuthContext'
import React, { useContext } from 'react'

function CurrentUser() {
    const {currentUser} = useContext(AuthContext)

  return (
    <div className='flex flex-col lg:flex-row items-center gap-5 px-5 p-2 bg-black bg-opacity-[5%]  dark:bg-white dark:bg-opacity-[5%] rounded-tl-xl'>
        <img src={currentUser.photoURL} alt="" className='h-12 w-12 rounded-full' />
        <span className='lg:text-2xl text-xl font-mono'>{currentUser.displayName}</span>
    </div>
  )
}

export default CurrentUser