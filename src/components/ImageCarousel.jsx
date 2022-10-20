import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import keyWest from '../assets/keyWest.jpg';
import canada from '../assets/canada.jpg';
import china from '../assets/china.jpg';
import brazil from '../assets/brazil.jpg';
import australia from '../assets/australia.jpg';
import hongKong from '../assets/hongKong.jpg';

const data = [
    { img: keyWest, country: "United States" },
    { img: canada, country: "Canada" },
    { img: china, country: "China" },
    { img: brazil, country: "Brazil" },
    { img: australia, country: "Australia" },
    { img: hongKong, country: "Hong Kong" }

]

function ImageCarousel() {
    const images = data.map((item, index) => {
        return (
            <div>
                <Link to={`/properties/?country=${item.country}&market=All`}>
                    <img src={item.img} className="w-full rounded-md select-none" alt={item.country} />
                </Link>
                <div className="relative">
                    <h3 className="text-white absolute bottom-3 left-3">{item.country}</h3>
                </div>
            </div>
        )
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