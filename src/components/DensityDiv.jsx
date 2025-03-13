import React from 'react'

const DensityDiv = ({ letter, val , totalChar }) => {
  return (
    <div className='flex justify-between items-center h-4'>
        <span className='dark:text-neutral-200'>{letter}</span>
        <div className={`flex-start flex h-full  w-[60%] md:w-[80%] rounded-full bg-gradient-to-r from-purple-400 from-${Math.round(val * 100 / totalChar)}% to-neutral-300 to-90% dark:bg-neutral-800`}>
          <div className={`flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-purple-400`}></div>
        </div>

        <span className='dark:text-neutral-200'>{val} ({Math.round(val * 100 / totalChar)}%)</span>
  </div> 
  )
}

export default DensityDiv