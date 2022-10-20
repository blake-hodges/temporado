import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import data from '../assets/data.js';
import ReviewsBox from '../components/ReviewsBox';
import Amenities from '../components/Amenities';
import currencyConverter from '../utils/currencyConverter';
import calculateNumberOfNights from '../utils/calculateNumberOfNights';

function Property() {


    const location = useLocation();
    const { data, checkIn, checkOut, rating, numberOfReviews } = location.state;
    const [ checkInDate, setCheckInDate ] = useState(checkIn);
    const [ checkOutDate, setCheckOutDate ] = useState(checkOut);
    const [ nights, setNights ] = useState(getNumberOfNights(checkInDate, checkOutDate));
    const [ price, setPrice ] = useState(currencyConverter(data.price.$numberDecimal, data.address.country));

    function getNumberOfNights(checkIn, checkOut) {
        calculateNumberOfNights(checkIn, checkOut);

    }

    function convertDate(date) {
        let dateString = new Date(date);
        return dateString.toDateString();
    }

    function handleChange(e) {
        if (e.target.name === "checkInInput") {
            setCheckInDate(e.target.value);
        } else if (e.target.name === "checkOutInput") {
            setCheckOutDate(e.target.value);
        }
        console.log('ksjd');
        setNights(calculateNumberOfNights(checkInDate, checkOutDate));

    }

    function sendBookingInfo(e) {
        e.preventDefault();
        let info = {
            checkIn: checkInDate,
            checkOut: checkOutDate
        }
        console.log(info);
        axios.post('/book', info )
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <div className="lg:w-[960px] my-4 p-10 mx-auto">
                <h1>{data.name}</h1>
                <p className="text-xl py-4">{data.summary}</p>
                <div className="flex flex-row">
                    <ReviewsBox rating={rating} numberOfReviews={numberOfReviews} />
                    <span className="px-2">·</span>
                    <p>{data.address.suburb ? `${data.address.suburb}, ` : null} {data.address.market}, {data.address.country}</p>
                </div>
                <div className="py-4">
                    <img className="rounded-md w-full" src={data.images.picture_url} alt="property" />
                </div>
                <div className="py-4 grid gap-4 md:grid-cols-2 border-b border-gray-300">
                    <div className="md:col-span-1">
                        <h3>{data.name}</h3>
                        <p>{data.room_type}</p>
                        <Amenities
                                beds={data.beds}
                                bathrooms={data.bathrooms.$numberDecimal}
                                bedrooms={data.bedrooms}
                                amenities={data.amenities}
                                guests={data.guests_included.$numberDecimal}
                            />
                    </div>
                    <div className="w-full cols-span-2 md:cols-span-1 border border-gray-200 rounded-lg p-2 md:p-6">
                        <div className="flex justify-between">
                            <div className="flex">
                                <h2>${price} night</h2>
                                <p className="px-2 pt-[3px]">${nights} Total</p>
                            </div>
                            <ReviewsBox rating={rating} numberOfReviews={numberOfReviews} />
                        </div>
                        <form className="px-2">
                            <div className="flex flex-col my-4">
                                <label>Check-In</label>
                                <input className="p-2 border rounded-md" type="date" defaultValue={checkIn} name="checkInInput" onChange={handleChange} />
                            </div>
                            <div className="flex flex-col my-4">
                                <label>Check-Out</label>
                                <input className="p-2 border rounded-md" type="date" defaultValue={checkOut} name="checkOutInput" onChange={handleChange} />
                            </div>
                            <button className="w-full my-4 bg-blue-500 text-white" onClick={sendBookingInfo}>Book</button>
                        </form>
                    </div>
                </div>
                <div>
                    <h3>About this property</h3>
                    <p className="py-2">{data.space}</p>
                    <p className="py-2">{data.description}</p>
                    <p className="py-2">{data.neighborhood_overview}</p>
                    <p className="py-2">{data.notes}</p>
                </div>
                <div className="py-4 border-t border-gray-300  grid grid-cols-2 gap-7">
                    <div className="col-span-2">
                    <ReviewsBox rating={rating} numberOfReviews={numberOfReviews} />
                    </div>
                    {data.reviews.map((item, index) => (
                        <div key={index} className="col-span-2 md:col-span-1">
                            <div className="py-2">
                                <h4 className="text-lg">{item.reviewer_name}</h4>
                                <span className="text-sm text-gray-500">{convertDate(item.date)}</span>
                            </div>
                            <p className="font-light">{item.comments}</p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Property