import React from 'react';
import Card from './Card';
import paris from '../assets/paris.jpg';
import morocco from '../assets/morocco.jpg';
import china from '../assets/china.jpg';
import hokkaido from '../assets/hokkaido.jpg';
import frenchPolynesia from '../assets/french-polynesia.jpg';

const data = [
    {
        img: paris,
        destination: "paris"
    },
    {
        img: morocco,
        destination: "morocco"
    },
    {
        img: china,
        destination: "china"
    },
    {
        img: hokkaido,
        destination: "hokkaido"
    },
    {
        img: frenchPolynesia,
        destination: "French Polynesia"
    }

]


function CardsGallery() {
    const CardsList = data.map((item, index) => (
        <Card background={item.img} caption={item.destination} key={index} />
    ))
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CardsList}
        </div>
    )
}

export default CardsGallery