import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.webp"

function TopHeader({setToggleBar}) {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
      <AlignJustify className='md:hidden'  onClick={()=>setToggleBar(true)}/>
      <Image src={logo} alt='loading' width={45} height={40} className='md:hidden cursor-pointer'/>
      <UserButton/> 
      {/* user button remove karna hai */}
    </div>
  )
}

export default TopHeader 
