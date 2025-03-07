import React from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {
  return (
    <div className='flex justify-between mt-5 md:mx-8 mx-4 lg:mx-0'>
        <img src={assets.logo_light_theme} alt="logo" />
        <div className='bg-neutral-100 w-[44px] h-[44px] rounded-lg relative cursor-pointer' >
          <img src={assets.icon_moon} alt="icon" className='absolute top-[11px] left-[11px]'/>
        </div>
    </div>
  )
}

export default Navbar