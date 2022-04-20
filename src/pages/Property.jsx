import React, {useState } from 'react';
import Header from '../components/Header';
import data from '../assets/data.js';
import ReviewsBox from '../components/ReviewsBox';
import Amenities from '../components/Amenities';

function Property() {


    function convertDate(date) {
        let dateString = new Date(date);
        return dateString.toDateString();
    }
    return (
        <>
            <Header />
            <div className="md:w-[960px] my-4 p-10 mx-auto">
                <h1 className="text-xl font-thin">{data.summary}</h1>
                <div className="flex flex-row">
                    <ReviewsBox rating={data.review_scores_rating} totalReviews={data.reviews.length} />
                    <span className="px-2">·</span>
                    <p>{data.address.suburb ? `${data.address.suburb}, ` : null} {data.address.market}, {data.address.country}</p>
                </div>
                <div className="py-4">
                    <img className="rounded-md w-full" src={data.images.picture_url} alt="property" />
                </div>
                <div className="py-4 grid gap-4 grid-cols-2 border-b border-gray-300">
                    <div className="col-span-1">
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
                    <div className="cols-span-1 border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between">
                            <h2>$24 night</h2>
                            <ReviewsBox />
                        </div>
                        <form className="px-2">
                            <div className="flex flex-col my-4">
                                <label>Check-In</label>
                                <input className="p-2 border rounded-md" type="date" />
                            </div>
                            <div className="flex flex-col my-4">
                                <label>Check-Out</label>
                                <input className="p-2 border rounded-md" type="date" />
                            </div>
                            <button className="w-full my-4 text-black">Book</button>
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
                        <ReviewsBox />
                    </div>
                    {data.reviews.map((item, index) => (
                        <div key={index}>
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