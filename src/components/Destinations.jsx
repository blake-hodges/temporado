import React, { useEffect } from 'react';

import china from "../assets/china.jpg";
import australia from "../assets/australia.jpg";
import brazil from "../assets/brazil.jpg";
import canada from "../assets/canada.jpg";
import hongKong from "../assets/hongKong.jpg";


function DestinationsComponent({data}) {
    
    return (
        <div>
            <h1>World Class Resorts</h1>
            <p>Find your beach!</p>
            <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
                <img
                    className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
                    src={china}
                    alt="China"
                />
                <img
                    className="w-full h-full object-cover"
                    src={australia}
                    alt="Australia"
                />
                <img
                    className="w-full h-full object-cover"
                    src={brazil}
                    alt="Brazil"
                />
                <img
                    className="w-full h-full object-cover"
                    src={canada}
                    alt="Canada"
                />
                <img
                    className="w-full h-full object-cover"
                    src={hongKong}
                    alt="Hong Kong"
                />
            </div>
        </div>
    )
}

export default DestinationsComponent


{/* <div>
    //     <h1>World Class Resorts</h1>
    //     <p>Find your beach!</p>
    //     <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
    //         <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={BoraBora} alt="Bora Bora beach" />
    //         <img className="w-full h-full object-cover" src={BoraBora} alt="Bora Bora beach" />
    //         <img className="w-full h-full object-cover" src={Maldives} alt="Maldives beach" />
    //         <img className="w-full h-full object-cover" src={Maldives2} alt="Maldives beach" />
    //         <img className="w-full h-full object-cover" src={KeyWest} alt="Key West beach" />
    //     </div>
    // </div> */}