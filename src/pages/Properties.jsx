import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import Header from '../components/Header';
import axios from 'axios';

function Properties() {
    const marketsData = {
        "Australia": ["All", "Sydney", "Other"],
        "Brazil": ["All", "Rio De Janeiro", "Other" ],
        "Canada": ["All", "Montreal", "Other"],
        "China": ["All"],
        "Hong Kong": ["All"],
        "Portugal": ["All", "Aveiro", "Porto", "Other"],
        "Spain": ["All", "Barcelona", "Other"],
        "Turkey": ["All", "Istanbul", "Other"],
        "United States": [
            "All",
            "Kauai",
            "Maui",
            "New York",
            "Oahu",
            "The Big Island",
            "Other"
          ]
    }
    const [listings, setListings] = useState(undefined);
    const [country, setCountry] = useState("Portugal");
    const [market, setMarket] = useState("All");
    const [markets, setMarkets] = useState(["All", "Porto", "Other"]);

    // useEffect(() => {
    //     axios.get("/destinations?country=Portugal&market=All").then((res) => {
    //         console.log(res.data);
    //         setListings(res.data);
    //     });
    // }, [])


    function handleSubmit(e) {
        e.preventDefault();
        let formattedStr = country.replace(" ", "%20");
        let url = `/destinations?country=${formattedStr}&market=${market}`;
        axios.get(url).then((res) => {
            console.log(res.data);
            setListings(res.data);
        })

    }

    function handleCountryChange(e) {
        let country = e.target.value;
        setCountry(country);
        setMarkets(marketsData[country]);
    }

    function handleMarketChange(e) {
        let market = e.target.value;
        setMarket(market);
    }



    return (
        <>
            <Header />
            <div className="w-[960px] my-4 p-10 mx-auto">
                <div className="w-[400px] mx-auto bg-blue-500 mb-[20px]">
                    <div className="text-center border">
                        <p className="py-4">Change Destination</p>
                    </div>
                    <form className="w-full px-2" onSubmit={handleSubmit}>
                        <div className="flex flex-col my-2">
                            <label>Country</label>
                            <select className="border rounded-md p-2" onChange={handleCountryChange} defaultValue="Portugal">
                                <option value="Australia">Australia</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Canada">Canada</option>
                                <option value="China">China</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Spain">Spain</option>
                                <option value="Turkey">Turkey</option>
                                <option value="United States">United States</option>
                            </select>
                        </div>
                        <div className="flex flex-col my-2">
                            <label>City/Area</label>
                            <select className="border rounded-md p-2" defaultValue="All" onChange={handleMarketChange}>
                                {markets.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })}
                            </select>
                    </div>
                        <button className="w-full my-4">See Properties</button>
                    </form>
                </div>
                <div>
                    {listings ? listings.map((item, index) => (
                        <PropertyCard
                            key={index}
                            data={item}
                        />
                    ))
                        : <p>Loading...</p>}
                </div>
            </div>
        </>
    )
}

export default Properties