import React, { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import paris from '../assets/paris.jpg';
import morocco from '../assets/morocco.jpg';
import china from '../assets/china.jpg';
import hokkaido from '../assets/hokkaido.jpg';
import frenchPolynesia from '../assets/french-polynesia.jpg';

function ImageCarousel() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [morocco, china, hokkaido, frenchPolynesia, paris];
    const nextImage = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            return setCurrentImage(currentImage + 1);
        }
    }
    const previousImage = () => {
        currentImage === 0 ? setCurrentImage(images.length - 1) : setCurrentImage(currentImage - 1)
    }
    return (
        <div className="relative max-w-[1240px] mx-auto px-4 py-16">
            <ArrowLeftIcon className="h-10 w-10 absolute top-[50%] left-8 text-white cursor-pointer" onClick={previousImage} />
            <ArrowRightIcon className="h-10 w-10 absolute top-[50%] right-8 text-white cursor-pointer" onClick={nextImage} />
            <div>
                <img src={images[currentImage]} className="w-full rounded-md select-none" alt="/" />
            </div>

        </div>
  )
}

export default ImageCarousel