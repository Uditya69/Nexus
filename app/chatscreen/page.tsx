import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function chatscreen() {
  return (
    <div>chatscreen
        <Link href={'/'} ><Button>Home</Button></Link>
        <UserButton/>
    </div>
  )
}

export default chatscreen