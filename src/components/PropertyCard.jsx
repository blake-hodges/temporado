import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewsBox from './ReviewsBox';
import currencyConverter from '../utils/currencyConverter.js';
import Amenities from '../components/Amenities';

function PropertyCard(props) {
    function getRating(val) {
        function convertToStarRating(rating) {
            //convert rating out of 100 to rating out of five stars
            return (rating * 0.05).toFixed(1);
        }
        if (val) {
            return convertToStarRating(val);
        } else {
            // find random number between 70 and 99 
            let randomNumber = (Math.random() * 30) + 70;
            return convertToStarRating(randomNumber);
        }
    }
    function getReviews(reviews) {
        if (reviews) {
            return reviews;
        } else {
            return (Math.random() * 20).toFixed();
        }
    }
    const numberOfReviews = getReviews(props.data.reviews.length);
    const rating = getRating(props.data.review_scores.review_scores_rating)
    return (
        <div className="flex flex-col md:flex-row px-5 pb-4 my-4 border-b border-gray-300">
            <div className="mr-5">
                <img src={props.data.images.picture_url} className="md:w-[300px] md:h-[200px] rounded-md" />
            </div>
            <div className="flex flex-col w-full justify-between">
                <div>
                    <Link to={`/property/${props.data._id}`} state={
                        {
                            data: props.data,
                            checkIn: props.checkIn,
                            checkOut: props.checkOut,
                            rating: rating,
                            numberOfReviews: numberOfReviews

                        }
                    }>
                        <h2>{ `${props.data.room_type} in ${props.data.address.market}` }</h2>
                        <span className="font-thin block mb-1">{props.data.name}</span>
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
                        rating={rating}
                        numberOfReviews={numberOfReviews}
                    />
                    <div>
                        <span className="font-bold block">${currencyConverter(props.data.price.$numberDecimal, props.data.address.country)} / night</span>
                        <span>${currencyConverter(props.data.price.$numberDecimal, props.data.address.country) * props.numberOfNights} total</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard