import React, { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import paris from '../assets/paris.jpg';
import morocco from '../assets/morocco.jpg';
import china from '../assets/china.jpg';
import hokkaido from '../assets/hokkaido.jpg';
import frenchPolynesia from '../assets/french-polynesia.jpg';

function ImageCarousel({data}) {
    const images = data.map((item, index) => {
       return <img src={item.img} className="w-full rounded-md select-none" alt="/" />
    })
    console.log(images)
    const [currentImage, setCurrentImage] = useState(0);
    const nextImage = () => {
        if (currentImage === data.length - 1) {
            setCurrentImage(0);
        } else {
            return setCurrentImage(currentImage + 1);
        }
    }
    const previousImage = () => {
        currentImage === 0 ? setCurrentImage(data.length - 1) : setCurrentImage(currentImage - 1)
    }
    return (
        <div className="relative max-w-[1240px] mx-auto px-4 py-16">
            <ArrowLeftIcon className="h-10 w-10 absolute top-[50%] left-8 text-white cursor-pointer" onClick={previousImage} />
            <ArrowRightIcon className="h-10 w-10 absolute top-[50%] right-8 text-white cursor-pointer" onClick={nextImage} />
            <div>
                {images[currentImage]}
            </div>

        </div>
  )
}

export default ImageCarousel