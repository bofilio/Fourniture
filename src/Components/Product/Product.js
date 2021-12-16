import React from 'react'
import ProDetail from './ProDetail'
import ReviewPanel from './ReviewPanel' 
import Star from './star.svg'

export default function Product() {
    return (
            <>

<h1 className="uppercase flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
  </svg>
  Return to all products
</h1>

<div className="relative flex flex-col items-center mt-10 ml-64 mr-64 mb-10 h-auto px-10 py-10 gap-8 ">
     <div className='relative flex flex-row w-full px-1 py-10 '>
        <div className="relative w-128  h-128 bg-gray-200 rounded-3xl">
            <div className="absolute flex items-center justify-center w-16 h-16 -translate-y-8  bg-white rounded-full top-1/2 -left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            </div>
            <div className="absolute flex items-center justify-center w-16 h-16 -translate-y-8  bg-white rounded-full -right-4 top-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            </div>
        </div> 

  <div className="flex-col w-auto px-10 ">
    <div className="flex-col h-96 space-x-4 space-y-3">
          <p className="uppercase bg-blue-300 max-w-max rounded-full">only & left</p>
          <p className="font-medium translate-x-16 tracking-widest text-stone-900 scale-150 ">Rico Lounge Chair</p>
          <p>$1.625,00</p>
          <p>SKU: 1938302145</p>
      <div className="w-96 h-32 bg-gray-100 rounded-3xl">
          <div className="relative flex space-x-2 h-1/2 left-4 justify-center items-center ">
            <button className="flex w-24 justify-around  gap-3 rounded-full bg-stone-500">
              <span> color
              </span>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                
              
            </button>
            <button className="flex w-24 rounded-full gap-3 bg-stone-500">
              <span> material
              </span>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              
            </button> 
            <button className="flex w-24 items-center justify-center space-x-4 rounded-full bg-stone-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
              <span> 3
              </span>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              
            </button> 
          </div>
          <div>
             <button className="rounded-full bg-stone-500">Icon</button>
            <button className="rounded-full bg-stone-500">Add to Cart</button>
          
          </div>
      </div>
      <div className="relative flex-col">
            <div className=" flex items-center justify-center w-16 h-10 rounded-full  top-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
        <div className=" flex items-center justify-center w-16 h-10 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
    
  </div>
  <div>

  </div>
  </div>
  <div className="relative flex w-full mx-16 h-full bg-gray-200 rounded-3xl">
  <div className="relative flex flex-col gap-4  pl-10 pr-10 w-96 min-w-max h-full  bg-gray-500 rounded-3xl justify-center items-center">
          <div className='flex gap-32 mt-6'>
            <div className='font-semibold h-12 '>Review 16</div>
            <div className='flex'>
            <img src={Star} alt="React Logo" />
            <img src={Star} alt="React Logo" />
            <img src={Star} alt="React Logo" />
            <img src={Star} alt="React Logo" />
            <img src={Star} alt="React Logo" />
            
            </div>
          </div>
          <ul>
              
              <li>
                   <ReviewPanel name="ahmet duncan1"  review="welcome to our review component  "/>
              </li>
              <li>
                   <ReviewPanel name="ahmet duncan2" review="welcomewe  lcomewelcomewelcome  "/>
              </li>
            
            
              
           </ul> 
           <div className='flex gap-2 pb-6'>
             <span  className='rounded-full bg-blue-300 w-8 h-8 items-center justify-center text-center'>1</span>
             <span className='rounded-full bg-blue-200 w-8 h-8 items-center justify-center text-center'>2</span>
             <span className='rounded-full bg-blue-50 w-8 h-8 items-center justify-center text-center'>3</span>
           </div>
           
   
   </div> 
    
                <div className='items-center justify-center pl-10 mt-10 w-full'>
                <div className='font-sans font-normal text-2xl text-gray-900  '>
                    <h1>More Details</h1>
                </div>
                <div className='flex-col justify-center gap-6 '>
                    <div className='flex'>
                      <ProDetail title='dimension' text='Size: W:87 x H:79 x D:81.5 cn' text2='Seat height: 41 cm ' text3='Backrest height: 38 cm' />
                      <ProDetail title='delevery & return ' text='Phasellus eleifend at felis si ' text2='t amet tincidunt. Ut ornare in' text3='arcu ut interdum.' />
                    </div>
                    <div className='flex'>
                    <ProDetail title='care' text='Praesent ac fringilla nisi, at' text2='gravida nisl. Phasellus eleifend ' text3='at felis sit amet tincidunt. Ut ornare in arcu.' />
                      <ProDetail title='instruction ' text='profissional dry clean only' />
                    </div>
                </div>
                </div>
            </div>
</div> 
<div className='relative  items-center  text-center w-auto ml-64 mr-64 h-32 text-gray-800'>
  <div className='font-sans text-5xl' >
    People also bought
  </div>
</div>

           

        </>
    )
}
