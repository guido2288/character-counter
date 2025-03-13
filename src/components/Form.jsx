import React, { useState } from 'react'
import Statistics from './Statistics'
import Density from './Density'
import { assets } from '../assets/assets';
import { count } from '../helpers/countLetter';

const Form = ({theme}) => {

  const [sentence, setSentence] = useState('');

  const [excludeSpaces, setExcludeSpaces] = useState(false);

  const [characterLimit, setCharacterLimit] = useState(false);

  const [activeLimit, setActiveLimit] = useState(false);

  const [letterDensity, setLetterDensity] = useState([]);

   
  const handleChange = (e) => {
    setSentence(e.target.value)

    setLetterDensity(count(e.target.value.replace(/\s/g,'')))

  }

  const handleLimit = () => {
    if(!activeLimit){
        setActiveLimit(true)
    }else{
        setActiveLimit(false)
        setCharacterLimit(false)
    }
  }
  

  return (
    <div className='mx-4 md:mx-8 lg:mx-0'>
        <form >
            <textarea placeholder='Start typing here...(or paste your text)'
                value={sentence.text} 
                className={`w-full h-[200px] cursor-pointer text-neutral-700 bg-neutral-100 resize-none ${characterLimit === sentence.length ? "outline-orange-500 focus:shadow-orange-500" : "outline-purple-500 focus:shadow-purple-500"}    shadow-lg  mb-4 border-none rounded-lg p-6 text-xl dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 `}
                onChange={ handleChange }
                maxLength={ characterLimit > 0 ? characterLimit : null }
                >   
            </textarea>
            {
                characterLimit === sentence.length ? <span className='text-orange-500 flex align-top'> <img src={assets.icon_info} alt="icon_info" className='mr-2' /> Limit reached! Your text exceeds {characterLimit} characters.</span> : ""
            }
            
            
            <div className='flex flex-col gap-2 md:flex-row md:justify-between mt-2'>


                <div className='flex flex-col gap-2 md:flex-row '>
                    <div className='flex align-middle gap-2'>
                        <input type="checkbox" checked={excludeSpaces} onChange={(e) => setExcludeSpaces(!excludeSpaces) } className='accent-purple-500 cursor-pointer'/>
                        <label htmlFor="" className=' dark:text-neutral-200'>Exclude Spaces</label>
                    </div>
                    <div className='flex align-middle gap-2'>
                        <input type="checkbox" checked={activeLimit} onChange={ handleLimit } className='accent-purple-500 text-neutral-700 cursor-pointer'/>
                        <label htmlFor="" className=' dark:text-neutral-200'>Set Character Limit</label>

                        {
                            activeLimit 
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
                
                <p className='dark:text-neutral-200'>Approx. reading time: <span>{Math.round((sentence.length / 200) * 100) / 100  }</span> minutes</p>

            </div>
        </form>

        <Statistics sentence={sentence} excludeSpaces={excludeSpaces}/>
        <Density theme={theme} letterDensity={letterDensity} totalChar = {sentence.replace(/\s/g,'').length} />
    </div>
  )
}

export default Form


