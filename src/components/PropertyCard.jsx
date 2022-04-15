import React, { useState } from 'react';
import ReviewsBox from './ReviewsBox';
import currencyConverter from '../utils/currencyConverter.js';

function PropertyCard(props) {
    return (
        <div className="flex px-5 my-4">
            <div className="mr-5">
                <img src={props.data.images.picture_url} className="bg-black w-[300px] h-[200px] rounded-md" />
            </div>
            <div className="flex flex-col w-full justify-between">
                <div>
                    <p>{ `${props.data.room_type} in ${props.data.address.market}` }</p>
                    <h3 className="font-normal">{props.data.name}</h3>
                    <div className="text-gray-500 flex flex-wrap w-[500px]">
                        {props.data.amenities.splice(0,6).map((item, index) => (
                                <span className="px-1" key={index}>{item} · </span>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between">
                    <ReviewsBox
                        rating={props.data.review_scores.review_scores_rating}
                        totalReviews={props.data.reviews.length}
                    />
                    <div>
                        <p className="font-bold">${currencyConverter(props.data.price.$numberDecimal, props.country)} / night</p>
                        <p>${props.data.price.$numberDecimal * 5} total</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard