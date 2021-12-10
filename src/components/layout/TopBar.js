import React from 'react'

export default function TopBar() {
    return (
        <nav className="flex mx-auto px-4 items-center container justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 p-4 bg-secondary-light text-primary-ligh rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              <span className="text-lg">Menu</span>
            </div>
            <div className="flex items-center space-x-2 p-4 bg-secondary-light text-primary-light rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input className="bg-transparent focus:outline-none text-lg max-w-xs" placeholder="Search" type="search" />
            </div>
          </div>
          <img src="/logo.svg" alt="" />
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute flex items-center justify-center -top-2 -right-2 bg-pink-600 text-xs text-gray-300 font-bold rounded-full w-4 h-4">2</span>
              </div>
            </div>
            <div className="flex items-center">
              <select className="bg-gray-700 text-gray-400 rounded-full py-1 px-2 focus:outline-none" name="lang" id="lang">
                <option value="eng">ENG</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
              </select>
            </div>
            <div className="flex items-center">
              <select className="bg-gray-700 text-gray-400 rounded-full py-1 px-2 focus:outline-none" name="lang" id="lang">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="dza">DZA</option>
              </select>
            </div>
          </div>
        </nav>
     
    )
}
