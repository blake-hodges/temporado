import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewsBox from './ReviewsBox';
import currencyConverter from '../utils/currencyConverter.js';
import Amenities from '../components/Amenities';

function PropertyCard(props) {
    return (
        <div className="flex px-5 pb-4 my-4 border-b border-gray-300">
            <div className="mr-5">
                <img src={props.data.images.picture_url} className="bg-black w-[300px] h-[200px] rounded-md" />
            </div>
            <div className="flex flex-col w-full justify-between">
                <div>
                    <p>{ `${props.data.room_type} in ${props.data.address.market}` }</p>
                    <Link to={`/property/${props.data._id}`} state={
                        {
                            data: props.data,
                            checkIn: props.checkIn,
                            checkOut: props.checkOut

                        }
                    }>
                        <h3 className="font-normal">{props.data.name}</h3>
                    </Link>
                    <Amenities
                        beds={props.data.beds}
                        bathrooms={props.data.bathrooms.$numberDecimal}
                        bedrooms={props.data.bedrooms}
                        amenities={props.data.amenities}
                        guests={props.data.guests_included.$numberDecimal}
                    />
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