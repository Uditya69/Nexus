import React from 'react'
import Search from '../../components/ChatScreen/Search'
import Chats from '../../components/ChatScreen/Chats'
import CurrentUser from '../../components/ChatScreen/CurrentUser'

function sidebar() {
  return (
    <div className=''>

      <CurrentUser/>
      <Search/>
      <div className='overflow-x-scroll max-h-[80vh]'><Chats/></div>
    </div>
  )
}

export default sidebar