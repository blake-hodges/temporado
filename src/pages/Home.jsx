import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import CardsGallery from '../components/CardsGallery';
import ImageCarousel from '../components/ImageCarousel';
import Booking from '../components/Booking';


function Home() {

    return (
        <>  
            <Hero />
            <Destinations />
            <Booking />
        </>

    )
}

export default Home;
