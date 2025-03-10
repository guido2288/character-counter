import React from 'react'
import { assets } from '../assets/assets'

const Density = ({theme}) => {
  return (
    <div className='mx-4 md:mx-8 lg:mx-0 pb-10'>
        <h3 className=' text-2xl text-neutral-900 font-semibold mb-5 dark:text-neutral-200'>Letter Density</h3>
        <div className='flex flex-col gap-6 my-2'>

          <div className='flex justify-between items-center h-4'>
              <span className='dark:text-neutral-200'>E</span>
              <div className="flex-start flex h-full w-[60%] md:w-[80%] rounded-full bg-neutral-300 dark:bg-neutral-800">
                <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-purple-400"></div>
              </div>

              <span className='dark:text-neutral-200'>40 (16.06%)</span>
          </div>

        </div>

        <button className='flex items-center gap-1 mt-8 cursor-pointer dark:text-neutral-200'>
          See More 
          {
            theme === 'light' 
              ? <img src={assets.icon} alt="arrow_icon" />
              : <img src={assets.icon_dark} alt="arrow_icon" />
          }
          
          </button>
        
    </div>
  )
}

export default Density