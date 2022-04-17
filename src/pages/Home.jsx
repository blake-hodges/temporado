import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import CardsGallery from '../components/CardsGallery';
import ImageCarousel from '../components/ImageCarousel';
import Booking from '../components/Booking';


function Home() {
    const [db, setDB] = useState([]);

    useEffect(() => {
        fetch('/data')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDB(data.destinations);
            });
    }, []);

    return (
        <>  
            <Hero />
            <Destinations data={db} />
            <Booking />
        </>

    )
}

export default Home;
