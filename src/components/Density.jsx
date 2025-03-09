import React from 'react'
import { assets } from '../assets/assets'

const Density = () => {
  return (
    <div className='mx-4 md:mx-8 lg:mx-0 pb-10'>
        <h3 className=' text-2xl text-neutral-900 font-semibold mb-5'>Letter Density</h3>
        <div className='flex flex-col gap-6 my-2'>

          <div className='flex justify-between items-center h-4'>
              <span className=' text-[12px] md:text-[16px]'>E</span>
              <div className="flex-start flex h-full w-[80%]  rounded-full bg-neutral-200">
                <div className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded-full bg-purple-400"></div>
              </div>

              <span className=' text-[11px] sm:text-[12px] md:text-[16px]'>40 (16.06%)</span>
          </div>

        </div>

        <button className='flex items-center  gap-1 mt-8 cursor-pointer'>See More <img src={assets.icon} alt="" /></button>
        
    </div>
  )
}

export default Density