import React, { useState } from 'react'
import Statistics from './Statistics'
import Density from './Density'

const Form = ({theme}) => {

  const [sentence, setSentence] = useState('');

  const [excludeSpaces, setExcludeSpaces] = useState(false);

  const [characterLimit, setCharacterLimit] = useState(false);


  const handleChange = (e) => {
    setSentence(e.target.value)
  }

  return (
    <div className='mx-4 md:mx-8 lg:mx-0'>
        <form >
            <textarea placeholder='Start typing here...(or paste your text)'
                value={sentence.text} 
                className='w-full h-[200px] cursor-pointer text-neutral-700 bg-neutral-100 resize-none outline-purple-500 dark:outline-orange-500  focus:drop-shadow-xl dark:shadow-amber-500 border mb-8 border-neutral-200 rounded-lg p-6 text-xl dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 '
                onChange={ handleChange }
                >   
                </textarea>
            <div className='flex flex-col gap-2 md:flex-row md:justify-between'>
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
                                ? <input type="text" name="" id="" className='px-3 max-w-[60px] border rounded-md outline-0 dark:border-neutral-700 dark:text-neutral-200' maxLength={3} minLength={1} />
                                : ""
                        }
                        
                    </div>
                </div>
                
                <p className='dark:text-neutral-200'>Approx. reading time: <span>0</span> minute</p>

            </div>
        </form>

        <Statistics sentence={sentence}/>
        <Density theme={theme}/>
    </div>
  )
}

export default Form


