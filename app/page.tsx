import Image from 'next/image'
import HomeScreen from './homescreen/page'

export default function Home() {
  return (
    <div className='bg-gradient-to-bl from-stone-200 via-stone-400 to-neutral-200   dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950' >
      <HomeScreen/>      
    </div>

  )
}
