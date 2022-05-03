import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import calculateNumberOfNights from '../utils/calculateNumberOfNights';
import marketsData from '../utils/marketsData';

function Properties(props) {
    
    const [isLoading, setIsLoading] = useState(true);
    const [country, setCountry] = useState("Australia");
    const [market, setMarket] = useState("All");
    const [markets, setMarkets] = useState(marketsData[country]);
    const [listings, setListings] = useState(undefined);
    
    useEffect(() => {
        console.log("use effect happened");
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


    // function fetchData(country, market = "All") {
    //     setIsLoading(true);
    //     setLimit(10);
    //     const formattedCountry = formatString(country);
    //     const formattedMarket  = formatString(market);
    //     let url = `/destinations?country=${formattedCountry}&market=${formattedMarket}`;
    //     fetch(url)
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setListings(data);
    //         setIsLoading(false);
    //     })
    // }


    // function handleChange() {
    //     const countryValue = document.querySelector("#selectCountry").value;
    //     const marketValue = document.querySelector("#selectMarket").value;
    //     setCountry(countryValue);
    //     setMarket(marketValue);
    //     setMarkets(marketsData[countryValue]);
    //     fetchData(countryValue, marketValue);
        

    // }



    // function formatString(str) {
    //     let formattedStr = str.replace(" ", "%20");
    //     return formattedStr;
    // }

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
                <div className="mx-auto pb-4">
                    <h1 className="m">Property Search</h1>
                    <form className="w-full grid grid-cols-2 gap-4 px-2" name="myForm" id="theForm">
                        <div className="col-span-2 md:col-span-1 flex flex-col my-0 md:my-2">
                            <label>Country</label>
                            <select
                                value={country}
                                id="selectCountry"
                                className="border rounded-md p-2 focus:outline-none"
                                name="countrySelect"
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
                        <div className="col-span-2 md:col-span-1 flex flex-col my-0 md:my-2">
                            <label>City/Area</label>
                            <select
                                value={market}
                                id="selectMarket"
                                className="border rounded-md p-2 focus:outline-none"
                                name="marketSelect"
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
                        return <PropertyCard key={index} data={item}/>
                    })
                        : <p className="text-center">Loading...</p>}
                </div>
            </div>
        </>
    )
}




export default Properties;