import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

function ReviewsBox(props) {
    function convertToStarRating(rating) {
        //convert rating out of 100 to rating out of five stars
        return (rating * 0.05).toFixed(1);
    }
    function getRating(val) {
        if (val) {
            return convertToStarRating(val);
        } else {
            // find random number between 70 and 99 
            return convertToStarRating((Math.random() * 30) + 70 );
        }
    }
    function getReviews(reviews) {
        if (reviews) {
            return reviews;
        } else {
            return (Math.random() * 20).toFixed();
        }
    }


    const numberOfReviews = getReviews(props.totalReviews);
    
    return (
        <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-red-500" />
            <span>{getRating(props.rating)}</span>
            <span className="pl-2">( {numberOfReviews} {(numberOfReviews === 1) ? "Review" : "Reviews"} )</span>
        </div>
    )
}

export default ReviewsBox;