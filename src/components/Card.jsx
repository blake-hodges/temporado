import React from 'react'

function Card({background, caption}) {
  return (
    <div className="relative">
        <img className="w-full h-full object-cover" src={background} alt={caption} />
        <div className="absolute top-0 left-0 bg-gray-900/30 w-full h-full">
            <p className="absolute left-4 bottom-4 text-2xl font-bold text-white">{caption}</p>
        </div>
    </div>
  )
}

export default Card