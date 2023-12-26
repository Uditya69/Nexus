import React from 'react'
import Search from './components/Search'
import Chats from './components/Chats'
import CurrentUser from './components/CurrentUser'

function sidebar() {
  return (
    <div>
      <CurrentUser/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default sidebar