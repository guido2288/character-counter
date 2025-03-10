import React from 'react'
import { assets } from '../assets/assets'


const Navbar = ({handleChangeTheme , theme}) => {

  return (
    <div className='flex justify-between mt-5 md:mx-8 mx-4 lg:mx-0'>
      {
        theme === 'light' 
          ? <img src={assets.logo_light_theme} alt="logo" />
          : <img src={assets.logo_dark_theme} alt="logo" />
      }
        
        <div className='bg-neutral-100 dark:bg-neutral-700 w-[44px] h-[44px] rounded-lg relative cursor-pointer' onClick={handleChangeTheme}>
          {
            theme === 'light' 
              ? <img src={ assets.icon_moon } alt="icon" className='absolute top-[11px] left-[11px]'/>
              : <img src={ assets.icon_sun } alt="icon" className='absolute top-[11px] left-[11px]'/>
          }
          
        </div>
    </div>
  )
}

export default Navbar