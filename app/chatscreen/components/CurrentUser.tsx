import { AuthContext } from '@/app/context/AuthContext'
import React, { useContext } from 'react'

function CurrentUser() {
    const {currentUser} = useContext(AuthContext)

  return (
    <div className='flex items-center gap-5 px-2 p-2 bg-slate-600'>
        <img src={currentUser.photoURL} alt="" className='h-12 rounded-full' />
        <span>{currentUser.displayName}</span>
    </div>
  )
}

export default CurrentUser