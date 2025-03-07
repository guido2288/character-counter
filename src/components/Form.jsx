import React from 'react'

const Form = () => {
  return (
    <div className='mx-4 md:mx-8 lg:mx-0'>
        <form >
            <textarea placeholder='Start typing here...(or paste your text)' 
                className='w-full h-[200px] cursor-pointer text-neutral-700 bg-neutral-100 resize-none outline-purple-500 focus:drop-shadow-xl border mb-8 border-neutral-200 rounded-lg p-6 text-xl'>   
                </textarea>
            <div className='flex flex-col gap-2 md:flex-row md:justify-between'>
                <div className='flex flex-col gap-2 md:flex-row '>
                    <div className='flex align-middle gap-2'>
                        <input type="checkbox" id="" className='accent-purple-500 cursor-pointer'/>
                        <label htmlFor="">Exclude Spaces</label>
                    </div>
                    <div className='flex align-middle gap-2'>
                        <input type="checkbox" id="" className='accent-purple-500 text-neutral-700 cursor-pointer'/>
                        <label htmlFor="">Set Character Limit</label>
                        <input type="text" name="" id="" className='px-3 max-w-[60px] border rounded-md outline-0' maxlength={3} minLength={1} />
                    </div>
                </div>
                
                <p>Approx. reading time: <span>0</span> minute</p>

            </div>
        </form>
    </div>
  )
}

export default Form