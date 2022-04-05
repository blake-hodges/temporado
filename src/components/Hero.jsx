import React from 'react';
import beachVid from '../assets/beachVid.mp4';

function Hero() {
  return (
    <div>
        <div className="w-full h-screen relative">
            <video src={beachVid} className="w-full h-full object-cover" autoPlay loop muted />
        </div>
    </div>
  )
}

export default Hero