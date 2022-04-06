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
    const [data, setData] = useState({
        
    });
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
        axios.get("/listings")
        .then(res => {
            const destinations = res.data.destinations;
            const myObj = {
                destinationsData: [],
                cardsGalleryData: [],
                imageCarouselData: []
            }
            for (let i = 0; i < res.data.destinations.length;i++) {
                if (i < 5) {
                    myObj.destinationsData.push(destinations[i]);
                } else if (i >= 5 && i < 11) {
                    myObj.cardsGalleryData.push(destinations[i]);
                } else {
                    myObj.imageCarouselData.push(destinations[i]);
                }
            }
            setData(myObj);
            setIsFetching(false);
        })
    }, [])

    if (isFetching) {
        return <h1>loading</h1>
    } else {
        return (
            <>
                <Navbar />
                <Hero />
                <Destinations data={data.destinationsData}  />
                <Booking />
                <CardsGallery data={data.cardsGalleryData} />
                <ImageCarousel data={data.imageCarouselData} />
                <Footer />
            </>
        )
    }
    
    
}

export default App;

