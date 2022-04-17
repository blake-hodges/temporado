import React, { useState } from 'react';
import ReviewsBox from './ReviewsBox';
import currencyConverter from '../utils/currencyConverter.js';

function PropertyCard(props) {
    let numberOfBedrooms;
    if (props.data.bedrooms === 0) {
        numberOfBedrooms = <span>Studio · </span> 
    } else if (props.data.bedrooms === 1) {
        numberOfBedrooms = <span>{props.data.bedrooms} Bedroom · </span>
    } else {
        numberOfBedrooms = <span>{props.data.bedrooms} Bedrooms · </span>
    }
    return (
        <div className="flex px-5 pb-4 my-4 border-b border-gray-300">
            <div className="mr-5">
                <img src={props.data.images.picture_url} className="bg-black w-[300px] h-[200px] rounded-md" />
            </div>
            <div className="flex flex-col w-full justify-between">
                <div>
                    <p>{ `${props.data.room_type} in ${props.data.address.market}` }</p>
                    <h3 className="font-normal">{props.data.name}</h3>
                    <div className="text-gray-500 w-[500px]">
                        <div>
                            {numberOfBedrooms}
                            <span>{props.data.beds} {props.data.beds === 1 ? "Bed" : "Beds"} · </span>
                            <span>{props.data.bathrooms.$numberDecimal} {Number.parseFloat(props.data.bathrooms.$numberDecimal) === 1  ? "Bathroom" : "Bathrooms"} · </span>
                            <span>{props.data.guests_included.$numberDecimal} {Number.parseInt(props.data.guests_included.$numberDecimal) === 1 ? "Guest" : "Guests"}</span>
                        </div>
                        <div>
                            <span>{props.data.amenities[0]} · </span>
                            <span>{props.data.amenities[1]} · </span>
                            <span>{props.data.amenities[2]} · </span>
                            <span>{props.data.amenities[3]}</span>
                        </div>


                    </div>
                </div>
                <div className="flex justify-between">
                    <ReviewsBox
                        rating={props.data.review_scores.review_scores_rating}
                        totalReviews={props.data.reviews.length}
                    />
                    <div>
                        <p className="font-bold">${currencyConverter(props.data.price.$numberDecimal, props.data.address.country)} / night</p>
                        <p>${props.data.price.$numberDecimal * 5} total</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard