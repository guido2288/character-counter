import React, { useState } from 'react'
import Statistics from './Statistics'
import Density from './Density'
import { assets } from '../assets/assets';

const Form = ({theme}) => {

  const [sentence, setSentence] = useState('');

  const [excludeSpaces, setExcludeSpaces] = useState(false);

  const [characterLimit, setCharacterLimit] = useState(false);

  const [limitReached, setLimitReached] = useState(false);
 
  const handleChange = (e) => {
    if((e.target.value.length >= characterLimit) && (!e.target.value.length == 0)){
        setLimitReached(true)
    }else{
        setLimitReached(false)
    }
    setSentence(e.target.value)
  }
  
  

  return (
    <div className='mx-4 md:mx-8 lg:mx-0'>
        <form >
            <textarea placeholder='Start typing here...(or paste your text)'
                value={sentence.text} 
                className={`w-full h-[200px] cursor-pointer text-neutral-700 bg-neutral-100 resize-none ${ limitReached ? "outline-orange-500 focus:shadow-orange-500" : "outline-purple-500 focus:shadow-purple-500"}    shadow-lg  mb-4 border-none rounded-lg p-6 text-xl dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 `}
                onChange={ handleChange }
                >   
            </textarea>
            {
                limitReached ? <span className='text-orange-500 flex align-top'> <img src={assets.icon_info} alt="icon_info" className='mr-2' /> Limit reached! Your text exceeds 300 characters.</span> : ""
            }
            
            
            <div className='flex flex-col gap-2 md:flex-row md:justify-between mt-2'>


                <div className='flex flex-col gap-2 md:flex-row '>
                    <div className='flex align-middle gap-2'>
                        <input type="checkbox" checked={excludeSpaces} onChange={(e) => setExcludeSpaces(!excludeSpaces) } className='accent-purple-500 cursor-pointer'/>
                        <label htmlFor="" className=' dark:text-neutral-200'>Exclude Spaces</label>
                    </div>
                    <div className='flex align-middle gap-2'>
                        <input type="checkbox" checked={characterLimit} onChange={(e) => setCharacterLimit(!characterLimit) } className='accent-purple-500 text-neutral-700 cursor-pointer'/>
                        <label htmlFor="" className=' dark:text-neutral-200'>Set Character Limit</label>

                        {
                            characterLimit 
                                ? <input 
                                    type="number" 
                                    className='px-3 max-w-[60px] border rounded-md outline-0 dark:border-neutral-700 dark:text-neutral-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' 
                                    min={1} 
                                    max={999} 
                                    onChange={(e) => {setCharacterLimit(Number(e.target.value))}}
                                    />
                                : ""
                        }
                        
                    </div>
                </div>
                
                <p className='dark:text-neutral-200'>Approx. reading time: <span>0</span> minute</p>

            </div>
        </form>

        <Statistics sentence={sentence} excludeSpaces={excludeSpaces}/>
        <Density theme={theme}/>
    </div>
  )
}

export default Form


