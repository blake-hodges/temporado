import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

function ReviewsBox(props) {
    
    return (
        <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-red-500" />
            <span>{props.rating}</span>
            <span className="pl-2">( {props.numberOfReviews} {(props.numberOfReviews === 1) ? "Review" : "Reviews"} )</span>
        </div>
    )
}

export default ReviewsBox;