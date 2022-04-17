import React from 'react';
import frenchPolynesia from '../assets/french-polynesia.jpg';
import { SearchIcon } from '@heroicons/react/solid';

function Header() {

  return (
    <div className="w-full h-[80px] relative">
        <img src={frenchPolynesia} className="w-full h-full object-cover object-bottom -z-10" />
        <div className="w-full h-full absolute top-0 left-0 bg-gray-900/30"></div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        </div>
    </div>
  )
}

export default Header;