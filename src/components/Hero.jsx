import React from 'react';
import beachVid from '../assets/beachVid.mp4';
import { SearchIcon } from '@heroicons/react/solid';

function Hero() {

  return (
    <div className="w-full h-screen relative">
        <video src={beachVid} className="w-full h-full object-cover -z-10" muted autoPlay loop></video>
        <div className="w-full h-full absolute top-0 left-0 bg-gray-900/30"></div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
            <h1>Find your next adventure!</h1>
            <h2 className="py-4">Where do you want to go?</h2>
            <form className="flex justify-between items-center max-w-[700px] w-full mx-auto bg-gray-100/90 border p-1 rounded-md">
                <div>
                    <input className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none text-black" type="text" placeholder="Search" />
                </div>
                <div className="pt-2">
                    <button>
                        <SearchIcon className="w-5 h-5 text-black" />
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero