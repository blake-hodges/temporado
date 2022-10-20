import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import PropertySearch from '../components/PropertySearch';
import calculateNumberOfNights from '../utils/calculateNumberOfNights';
import marketsData from '../utils/marketsData';

function Properties(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    let initialCountry, checkIn, checkOut;
    if (searchParams.get("countryName")) {
        initialCountry = searchParams.get("countryName");
    } else {
        initialCountry = "Australia";
    }   
    if (searchParams.get("checkIn")) {
        checkIn = searchParams.get("checkIn");
    } else {
        const today = new Date();
        const todayDateString = today.toISOString().slice(0,10);
        checkIn = todayDateString;
    }
    if (searchParams.get("checkOut")) {
        checkOut = searchParams.get("checkOut");
    } else {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDateString = tomorrow.toISOString().slice(0,10);
        checkOut = tomorrowDateString;
    }
    const numberOfNights = calculateNumberOfNights(checkIn, checkOut);

    const [country, setCountry] = useState(initialCountry);
    const [market, setMarket] = useState("All");
    const [marketList, setMarketList] = useState(marketsData[country]);
    const [listings, setListings] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(10);
    
    // const [listings, setListings] = useState(undefined);
    
    useEffect(() => {
        let url = `/destinations?country=${initialCountry}&market=All`;
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setListings(data);
            setIsLoading(false);
        })
    }, [])


    
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
                        return <PropertyCard key={index} data={item} checkIn={checkIn} checkOut={checkOut} numberOfNights={numberOfNights}/>
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