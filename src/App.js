import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import CardsGallery from './components/CardsGallery';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import Booking from './components/Booking';
import axios from 'axios';

function App() {
    const [data, setData] = useState(['']);
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
        axios.get("/listings")
        .then(res => {
            setIsFetching(false)
            setData(res.data);
        })
    }, [])

    if (isFetching) {
        return <h1>loading</h1>
    } else {
        return (
            <>
                <Navbar />
                <Hero />
                <Destinations data={data}  />
                <Booking />
                <CardsGallery data={data} />
                <ImageCarousel data={data} />
                <Footer />
            </>
        )
    }
    
    
}

export default App;

