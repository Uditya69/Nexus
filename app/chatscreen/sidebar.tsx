import React from 'react'
import Search from './components/Search'
import Chats from './components/Chats'
import CurrentUser from './components/CurrentUser'

function sidebar() {
  return (
    <div className='min-w-fit'>
      <CurrentUser/>
      <Search/>
      <div className='overflow-hidden max-h-[200px]'><Chats/></div>
    </div>
  )
}

export default sidebar