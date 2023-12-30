import React from 'react'
import Search from '../../components/ChatScreen/Search'
import Chats from '../../components/ChatScreen/Chats'
import CurrentUser from '../../components/ChatScreen/CurrentUser'

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