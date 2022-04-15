import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import Hero from '../components/Hero';
import axios from 'axios';

function Properties(props) {
    const [listings, setListings] = useState(props.data);
    const [country, setCountry] = useState("Portugal");

    useEffect(() => {
        axios.get("/destinations?country=Portugal").then((res) => {
            console.log(res.data);
            setListings(res.data);
        });
    }, [])
    

    function handleSubmit(e) {
        e.preventDefault();
        let formattedStr = country.replace(" ", "%20");
        let url = `/destinations?country=${formattedStr}`;
        axios.get(url).then((res) => {
            console.log(res.data);
            setListings(res.data);
        })

    }

    function handleChange(e) {
        setCountry(e.target.value);
    }
 
    return (
        <>
            <Hero />
            <div className="w-[960px] my-4 p-10 mx-auto">
                <div>
                {listings ? listings.map((item, index) => (
                    <PropertyCard
                        key={index}
                        data={item}
                        country={country}
                    />
                ))
                : <p>Loading...</p> }
                </div>
            </div>
        </>
    )
}

export default Properties