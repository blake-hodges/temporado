import React from 'react'

function Amenities(props) {
    let numberOfBedrooms;
    if (props.bedrooms === 0) {
        numberOfBedrooms = <span>Studio · </span> 
    } else if (props.bedrooms === 1) {
        numberOfBedrooms = <span>{props.bedrooms} Bedroom · </span>
    } else {
        numberOfBedrooms = <span>{props.bedrooms} Bedrooms · </span>
    }
    return (
        <div className="text-gray-500">
            <div>
                {numberOfBedrooms}
                <span>{props.beds} {props.beds === 1 ? "Bed" : "Beds"} · </span>
                <span>{props.bathrooms} {Number.parseFloat(props.bathrooms) === 1  ? "Bathroom" : "Bathrooms"} · </span>
                <span>{props.guests} {Number.parseInt(props.guests) === 1 ? "Guest" : "Guests"}</span>
            </div>
            <div>
                <span>{props.amenities[0]} · </span>
                <span>{props.amenities[1]} · </span>
                <span>{props.amenities[2]} · </span>
                <span>{props.amenities[3]} · </span>
                <span>{props.amenities[4]}</span>
            </div>
        </div>
  )
}

export default Amenities