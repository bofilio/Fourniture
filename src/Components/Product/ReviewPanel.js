import React from 'react'
import Star from './star.svg'

export default function ReviewPanel(props) {
    return (
        <div>
             <div className=" flex flex-col items-center justify-center gap-4 mb-4 w-72  h-32  bg-zinc-300 rounded-3xl">
                   <div className='flex flex-row gap-12'>
                   <div className='uppercase font-sans font-medium text-gray-800 '>
                         <p>
                         {props.name}
                         </p>
                   </div>
                   <div className='flex '> 
                   <img src={Star} alt="Star Logo" />
                   <img src={Star} alt="Star Logo" />
                   <img src={Star} alt="Star Logo" />
                   <img src={Star} alt="Star Logo" />
                   <img src={Star} alt="Star Logo" />
                   </div>
                   </div>
                   <div className=' font-sans text-gray-400  text-center '>
                         {props.review}
                 
                   </div>
             </div>
                
           
            
        </div>
    )
}
