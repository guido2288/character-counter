import React, { useState } from 'react'
import { assets } from '../assets/assets'
import DensityDiv from './DensityDiv';

const Density = ({theme , letterDensity , totalChar}) => {

  const [more, setMore] = useState(false);

  return (
    <div className='mx-4 md:mx-8 lg:mx-0 pb-10'>
        <h3 className=' text-2xl text-neutral-900 font-semibold mb-5 dark:text-neutral-200'>Letter Density</h3>
        <div className='flex flex-col gap-6 my-2'>

          {
            more 
            ?  letterDensity.map(([key, val], i) => (
              <DensityDiv key={i} letter={key} val={val} totalChar={totalChar}/>
              ))

            : letterDensity.slice(0,5).map(([key, val], i) => (
              <DensityDiv key={i} letter={key} val={val} totalChar={totalChar}/>
              ))
          }


        </div>

        <button className='flex items-center gap-1 mt-8 cursor-pointer dark:text-neutral-200' onClick={ () => setMore(!more) }>
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