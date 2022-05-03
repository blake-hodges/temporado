import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import PropertySearch from '../components/PropertySearch';
import calculateNumberOfNights from '../utils/calculateNumberOfNights';
import marketsData from '../utils/marketsData';

function Properties(props) {
    const [country, setCountry] = useState("Australia");
    const [market, setMarket] = useState("All");
    const [marketList, setMarketList] = useState(marketsData[country]);
    const [listings, setListings] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(10);
    
    // const [listings, setListings] = useState(undefined);
    
    useEffect(() => {
        let url = `/destinations?country=Australia&market=All`;
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setListings(data);
            setIsLoading(false);
        })
    }, [])


    // const [limit, setLimit] = useState(10);
    // const [listings, setListings] = useState(undefined);
    // const numberOfNights = calculateNumberOfNights(checkIn, checkOut);
    
    // const [searchParams, setSearchParams] = useSearchParams();
    // let initialCountry = searchParams.get("countryName");
    // let checkIn = searchParams.get("checkIn");
    // let checkOut = searchParams.get("checkOut");


    //console.log(initialCountry, checkIn, checkOut);


    function fetchData(country, market = "All") {
        setIsLoading(true);
        const formattedCountry = formatString(country);
        const formattedMarket  = formatString(market);
        let url = `/destinations?country=${formattedCountry}&market=${formattedMarket}`;
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setListings(data);
            setIsLoading(false);
        })
    }


    function handleChange(e) {
        if (!isLoading) {
            const countryValue = document.querySelector("#selectCountry").value;
            const marketValue = document.querySelector("#selectMarket").value;
            setCountry(countryValue);
            setMarket(marketValue);
            setMarketList(marketsData[countryValue]);
            fetchData(countryValue, marketValue);
        }
        

    }



    function formatString(str) {
        let formattedStr = str.replace(" ", "%20");
        return formattedStr;
    }

    // function SeeMore() {
    //     if (listings !== undefined && listings.length <= limit) {
    //         return null
    //     } else {
    //         return <button className="text-black" onClick={() => setLimit(limit + 10)}>See more</button>
    //     }
    // }

    return (
        <>
            <div className="w-full max-w-[960px] my-4 p-10 mx-auto">
                <PropertySearch
                    country={country}
                    market={market}
                    marketList={marketList}
                    handleChange={handleChange}
                />
                <div className="my-10">
                    { !isLoading ? listings.map((item, index) => {
                        if (index <= limit) {
                        return <PropertyCard key={index} data={item}/>
                        }
                    })
                        : <p className="text-center">Loading...</p>}
                </div>
                <div className="flex justify-center">
                    {isLoading ? null : <button className="bg-blue-500" onClick={() => setLimit(limit + 10)}>See More</button>}
                </div>
            </div>
        </>
    )
}




export default Properties;