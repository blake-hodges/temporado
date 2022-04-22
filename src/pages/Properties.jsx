import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import Header from '../components/Header';
import axios from 'axios';

function Properties(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(10);
    const initialCountry = searchParams.get("countryName");
    const marketsData = {
        "Australia": ["All", "Sydney"],
        "Brazil": ["All", "Rio De Janeiro", "Barra de Guaratiba" ],
        "Canada": ["All", "Montreal"],
        "China": ["All"],
        "Hong Kong": ["All"],
        "Portugal": ["Aveiro", "Porto"],
        "Spain": ["All", "Barcelona"],
        "Turkey": ["All", "Istanbul", "Sile"],
        "United States": [
            "All",
            "Kauai",
            "Maui",
            "Molokai",
            "New York",
            "Oahu",
            "The Big Island"
          ]
    }
    const [listings, setListings] = useState(undefined);
    const [markets, setMarkets] = useState(marketsData[initialCountry]);

    useEffect(() => {
        axios.get(`/destinations?country=${initialCountry}&market=All`).then((res) => {
            setListings(res.data);
            setIsLoading(false);
        });
    }, [])




    function handleChange(e) {
        if (e.target.name === "countrySelect") {
            const country = e.target.value;
            setMarkets(marketsData[country]);
            const marketSelect = document.querySelector('select[name="marketSelect"]');
            marketSelect.value = "All";
            fetchData(country)
        }
        if (e.target.name === "marketSelect") {
            const market = e.target.value;
            const countrySelect = document.querySelector('select[name="countrySelect"]');
            const country = countrySelect.value;
            fetchData(country, market);
            
        }

    }


    function fetchData(country, market = "All") {
        setIsLoading(true);
        setLimit(10);
        const formattedCountry = formatString(country);
        const formattedMarket  = formatString(market);
        let url = `/destinations?country=${formattedCountry}&market=${formattedMarket}`;
        axios.get(url).then((res) => {
            console.log(res.data);
            setListings(res.data);
            setIsLoading(false);
        })
    }

    function formatString(str) {
        let formattedStr = str.replace(" ", "%20");
        return formattedStr;
    }

    function SeeMore() {
        if (listings.length <= limit) {
            return <p>that's all the properties</p>
        } else {
            return <button className="text-black" onClick={() => setLimit(limit + 10)}>See more</button>
        }
    }

    return (
        <>
            <Header />
            <div className="w-[960px] my-4 p-10 mx-auto">
                <div className="w-[400px] mx-auto bg-blue-500 pb-4">
                    <div className="text-center border">
                        <p className="py-4">Change Destination</p>
                    </div>
                    <form className="w-full px-2" name="myForm">
                        <div className="flex flex-col my-2">
                            <label>Country</label>
                            <select
                                className="border rounded-md p-2"
                                defaultValue={initialCountry}
                                name="countrySelect"
                                onChange={handleChange}
                            >
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
                            <select
                                className="border rounded-md p-2"
                                defaultValue="All"
                                name="marketSelect"
                                onChange={handleChange}
                            >
                                {markets.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })}
                            </select>
                        </div>
                        {/* <button className="w-full my-4">See Properties</button> */}
                    </form>
                </div>
                <div className="my-10">
                    { !isLoading ? listings.map((item, index) => {
                        if (index < limit) {
                        return ( <PropertyCard
                            key={index}
                            data={item}
                        />)
                        }
                    })
                        : <Loading />}
                </div>
                <SeeMore />
            </div>
        </>
    )
}

function Loading() {
    return <p>Loading...</p>
}



export default Properties