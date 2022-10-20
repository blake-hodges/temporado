import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import DestinationsComponent from '../components/Destinations';
import CardsGallery from '../components/CardsGallery';
import ImageCarousel from '../components/ImageCarousel';
import Booking from '../components/Booking';


function Home() {

    return (
        <>  
            <DestinationsComponent />
            <Booking />
        </>

    )
}

export default Home;
