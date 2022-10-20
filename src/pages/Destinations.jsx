import React,{ useState } from 'react';
import CardsGallery from '../components/CardsGallery';
import DestinationsComponent from '../components/Destinations';
import ImageCarousel from '../components/ImageCarousel';

function Destinations() {
    return (
        <>
        <CardsGallery />
        <ImageCarousel />
        </>
    )
}

export default Destinations;