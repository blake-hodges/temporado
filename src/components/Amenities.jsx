import React from 'react'

function Amenities(props) {
    let numberOfBedrooms;
    if (props.bedrooms === 0) {
        numberOfBedrooms = <span>Studio · </span> 
    } else if (props.bedrooms === 1) {
        numberOfBedrooms = <span key="0">{props.bedrooms} Bedroom · </span>
    } else {
        numberOfBedrooms = <span key="0">{props.bedrooms} Bedrooms · </span>
    }
    return (
        <div className="text-gray-500">
            <div>
                {numberOfBedrooms}
                <span key="1">{props.beds} {props.beds === 1 ? "Bed" : "Beds"} · </span>
                <span key="2">{props.bathrooms} {Number.parseFloat(props.bathrooms) === 1  ? "Bathroom" : "Bathrooms"} · </span>
                <span key="3">{props.guests} {Number.parseInt(props.guests) === 1 ? "Guest" : "Guests"}</span>
            </div>
            <div>
                <span key="0">{props.amenities[0]} · </span>
                <span key="1">{props.amenities[1]} · </span>
                <span  key="2">{props.amenities[2]} · </span>
                <span key="3">{props.amenities[3]} · </span>
                <span key="4">{props.amenities[4]}</span>
            </div>
        </div>
  )
}

export default Amenities