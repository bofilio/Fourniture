import React from 'react';
import Timeline from '../components/content/Timeline';

function About() {
  return (
  <div>
      <div className=" flex flex-col items-center ">
        <span className=" text-6xl font-medium text-blx-900">About us</span>
        <span className=" text-xl text-gray-600 font-sans text-center mt-5">
          Donec sed enim consequat, hendrerit eros eget, sodales libero. 
          Quisque imperdiet a felis vitae posuere. Sed ac libero ligula.
          Proin mattis odio eu nisi varius aliquet. Etiam sed orci in ex semper finibus. 
          Pellentesque vestibulum eu turpis nec fringilla. Pellentesque cursus blandit turpi
        </span>

        <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blx-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div >

      <div className="h-130  bg-gray-200 mt-28 overflow-x-auto">

        <h1 className=" text-4xl font-medium text-blx-900 pt-20 text-center">Our Story</h1>

        <div className="flex w-full">
          <Timeline/>
        </div>   
      </div>

    <div className="flex my-20 ml-44 relative">
        <div className=" w-90 h-115 bg-gray-700 rounded-5xl flex-shrink-0 self-center absolute -left-24"></div>
        <div className="w-250 h-146 bg-gray-200 rounded-5xl flex-shrink-0 flex items-center pl-80">
            <div className="flex flex-col w-136 space-y-6">
                <span className=" text-2xl text-gray-500 font-medium">WORDS FROM OUR DESIGN OFFICER</span>
                <span className=" text-4xl font-medium text-blx-900">
                      The way to ratchet up our species is to get better things to more people, 
                      products with spirit and creativity.
                </span>
            </div>
        </div>
    </div>
  </div>
  );
}

export default About;