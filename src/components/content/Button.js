import React from 'react'

export default function Button(props) {
    return (
        < >
        <div>
             <div className='items-center text-center  pb-2 uppercase'>
                 {props.name} 
             </div >
             <button className={props.className}>

                    {props.icon}
                                        <svg width="102" height="43" viewBox="0 0 102 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_0_9)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 1.00022H86C94.2843 1.00022 101 7.71549 101 16.0001V25.9998C101 34.2844 94.2843 41 86 41H15.9999C7.71559 41 1.00001 34.2844 1.00001 25.9998V16.0001C1.00001 7.71549 7.71559 1.00022 15.9999 1.00022Z" fill="#11293B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 1.00022H86C94.2843 1.00022 101 7.71549 101 16.0001V25.9998C101 34.2844 94.2843 41 86 41H15.9999C7.71559 41 1.00001 34.2844 1.00001 25.9998V16.0001C1.00001 7.71549 7.71559 1.00022 15.9999 1.00022Z" fill="url(#paint0_linear_0_9)" style="mix-blend-mode:overlay"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_0_9" x="-29" y="-13.9998" width="160" height="99.9998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="15"/>
                    <feGaussianBlur stdDeviation="15"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.160784 0 0 0 0 0.231373 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_0_9" x1="96.2391" y1="45.4286" x2="98.3082" y2="1.97847" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0.01"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.5"/>
                    </linearGradient>
                    </defs>
                    </svg>

                      
            </button>
            </div>
        </ >
    )
}
