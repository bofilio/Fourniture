import React from 'react'
import Logo from '../commun/Logo'
import CartIcon from '../icons/CartIcon'
import HeartIcon from '../icons/HeartIcon'
import MenuIcon from '../icons/MenuIcon'
import SearchIcon from '../icons/SearchIcon'
import UserIcon from '../icons/UserIcon'

export default function TopBar() {
    return (
        <nav className="flex mx-auto px-4 items-center container justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 p-4 bg-secondary-light text-primary-ligh rounded-full">
              <MenuIcon className="w-5 h-5 text-primary-light"/>
              <span className="text-lg text-primary-light">Menu</span>
            </div>
            <div className="flex items-center space-x-2 p-4 bg-secondary-light text-primary-light rounded-full">
              <SearchIcon className="h-5 w-5 text-primary-light"/>
              <input className="bg-transparent focus:outline-none text-lg max-w-xs" placeholder="Search" type="search" />
            </div>
          </div>
          <Logo className={"w-20 h-16 translate-y-2"}/>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <UserIcon className="h-6 w-6 text-primary-light"/>
              <HeartIcon className=" w-6 h-6 text-primary-light"/>
              <div className="relative">
                <CartIcon className="h-6 w-6 text-primary-light" />
                <span className="absolute flex items-center justify-center -top-2 -right-2 bg-pink-600 text-xs text-gray-300 font-bold rounded-full w-4 h-4">2</span>
              </div>
            </div>
            <div className="flex items-center text-primary-light">
              <select className="bg-gray-100 rounded-full py-1 px-2 focus:outline-none" name="lang" id="lang">
                <option value="eng">ENG</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
              </select>
            </div>
            <div className="flex items-center text-primary-light">
              <select className="bg-gray-100  rounded-full py-1 px-2 focus:outline-none" name="lang" id="lang">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="dza">DZA</option>
              </select>
            </div>
          </div>
        </nav>
     
    )
}
