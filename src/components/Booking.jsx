import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChatIcon, PhoneIcon } from '@heroicons/react/outline/';

function Booking() {
    const today = new Date();
    const todayDateString = today.toISOString().slice(0,10);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDateString = tomorrow.toISOString().slice(0,10);
    const [country, setCountry ] = useState("Australia");
    const [ checkIn, setCheckIn ] = useState(todayDateString);
    const [ checkOut, setCheckOut ] = useState(tomorrowDateString);
    function handleCountryChange(e) {
        setCountry(e.target.value);
    }
    function handleCheckInChange(e) {
        setCheckIn(e.target.value);
    }
    function handleCheckOutChange(e) {
        setCheckOut(e.target.value);
    }
    
    return (
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 px-4 py-16">
            <div className="md:col-span-2 justify-evenly p-5">
                <div>
                    <h2>Let us help you find your next destination.</h2>
                    <p className="py-4">Established in 2020, Temporado has developed from a small start-up to one of the world’s most popular holiday booking sites. We empower travelers from around the world as well as property property owners to find solutions that work for them. Wherever you need to go and anything you need to do, Temporado makes it simple and hassle-free.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col text-center items-center">
                    <Link to="/contact"><PhoneIcon className="w-7 h-7" /></Link>
                        <div>
                            <h3><Link to="/contact">Contact Us</Link></h3>
                            <p>Please contact us with any questions you have. We are available to respond 24/7. We will get back to you as soon as possible.</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center items-center">
                        <ChatIcon className="w-7 h-7" />
                        <div>
                            <h3>Customer Service</h3>
                            <p>Confirm your booking information here. If you have a problem with your booking feel free to contact us.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:col-span-1 bg-blue-500 rounded-md">
                <div className="text-center border-b">
                    <h3 className="pt-2 px-1">Check available properties.</h3>
                    <h4 className="py-2 text-gray-200">10% OFF MONTH-LONG STAYS</h4>
                </div>
                <form className="w-full px-2">
                    <div className="flex flex-col my-2">
                        <label>Destination</label>
                        <select
                            className="border rounded-md p-2"
                            value={country}
                            name="countryInput"
                            onChange={handleCountryChange}
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
                    <div className="flex flex-col my-4">
                        <label>Check-In</label>
                        <input
                        className="p-2 border rounded-md"
                        type="date"
                        name="checkInInput"
                        value={checkIn}
                        onChange={handleCheckInChange} />
                    </div>
                    <div className="flex flex-col my-4">
                        <label>Check-Out</label>
                        <input
                        className="p-2 border rounded-md"
                        type="date"
                        name="checkOutInput"
                        value={checkOut}
                        onChange={handleCheckOutChange}
                         />
                    </div>
                    <Link
                        to={`/properties?countryName=${country}&checkIn=${checkIn}&checkOut=${checkOut}`}>
                            <button className="w-full my-4">Check Availability</button>
                    </Link>
                </form>
            </div>
        </div>
  )
}

export default Booking;