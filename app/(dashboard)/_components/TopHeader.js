import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.webp"

function TopHeader() {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
      <AlignJustify className='md:hidden'/>
      <Image src={logo} alt='loading' width={45} height={40} className='md:hidden'/>
      <UserButton/> 
      {/* user button remove karna hai */}
    </div>
  )
}

export default TopHeader 
