import Image from 'next/image'
import React from 'react'
import logo from "@/assets/Nexus.png";
import Link from 'next/link';

function CommingSoon() {
  return (
    <div className='flex flex-col items-center justify-center py-60 '>
      <Link href={"./"}><Image src={logo} alt=''/></Link>
        <div className='text-3xl'>Comming soon...</div>
        <div className='text-xl'><br/>Under development! 👷🏾‍♂️👨🏾‍💻</div>
        <div className='mt-5'>Fixing few bugs🐞🐛</div>
    </div>
  )
}

export default CommingSoon