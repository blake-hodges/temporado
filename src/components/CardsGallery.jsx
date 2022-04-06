import React from 'react';
import Card from './Card';

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';

function CardsGallery({data}) {
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