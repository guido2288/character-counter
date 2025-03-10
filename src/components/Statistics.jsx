import React from 'react'
import { assets } from '../assets/assets'

const Statistics = () => {
  return (
    <div>
        <div className='flex flex-col mx-4 my-6 gap-8 md:flex-row md:justify-between md:mx-8 lg:mx-0'>
            <div className=" bg-purple-400 h-[130px] md:h-[150px] md:py-2 bg-[100%] bg-no-repeat rounded-xl relative px-[20px] py-6 drop-shadow-xl md:w-1/3" style={{ backgroundImage:"url(/pattern-character-count.svg)" }}>
                <h2 className=' text-[40px] text-neutral-900 font-bold md:text-[64px]'>278</h2>
                <p className=' text-xl text-neutral-900'>Total Characters</p>
            </div>
            <div className=" bg-yellow-600 h-[130px] md:h-[150px] md:py-2 bg-[100%] bg-no-repeat rounded-xl relative px-[20px] py-6 drop-shadow-xl md:w-1/3" style={{ backgroundImage:"url(/pattern-word-count.svg)" }}>
                <h2 className=' text-[40px] text-neutral-900 font-bold md:text-[64px]'>39</h2>
                <p className=' text-xl text-neutral-900'>Word Count</p>
            </div>
            <div className=" bg-orange-400 h-[130px] md:h-[150px] md:py-2 bg-[100%] bg-no-repeat rounded-xl relative px-[20px] py-6 drop-shadow-xl md:w-1/3" style={{ backgroundImage:"url(/pattern-sentence-count.svg)", backgroundColor:"#FE8159" }}>
                <h2 className=' text-[40px] text-neutral-900 font-bold md:text-[64px]'>04</h2>
                <p className=' text-xl text-neutral-900'>Sentence Count</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics