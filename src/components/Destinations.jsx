import React from 'react';

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';

function Destinations() {
  return (
    <div>
        <h1>World Class Resorts</h1>
        <p>Find your beach!</p>
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
            <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={BoraBora} alt="Bora Bora beach" />
            <img className="w-full h-full object-cover" src={BoraBora2} alt="Bora Bora beach" />
            <img className="w-full h-full object-cover" src={Maldives} alt="Maldives beach" />
            <img className="w-full h-full object-cover" src={Maldives2} alt="Maldives beach" />
            <img className="w-full h-full object-cover" src={KeyWest} alt="Key West beach" />
        </div>
    </div>
  )
}

export default Destinations
