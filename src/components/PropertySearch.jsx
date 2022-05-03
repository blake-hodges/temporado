import React from 'react';
import marketsData from '../utils/marketsData';

function PropertySearch(props) {
    return (
        <div className="mx-auto pb-4">
                    <h1 className="m">Property Search</h1>
                    <form className="w-full grid grid-cols-2 gap-4 px-2" name="myForm" id="theForm">
                        <div className="col-span-2 md:col-span-1 flex flex-col my-0 md:my-2">
                            <label>Country</label>
                            <select
                                value={props.country}
                                id="selectCountry"
                                className="border rounded-md p-2 focus:outline-none"
                                name="countrySelect"
                                onChange={props.handleChange}
                            >
                                <option value="Australia">Australia</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Canada">Canada</option>
                                <option value="China">China</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Spain">Spain</option>
                                <option value="Turkey">Turkey</option>
                                <option value="United States">United States</option>
                            </select>
                        </div>
                        <div className="col-span-2 md:col-span-1 flex flex-col my-0 md:my-2">
                            <label>City/Area</label>
                            <select
                                value={props.market}
                                id="selectMarket"
                                className="border rounded-md p-2 focus:outline-none"
                                name="marketSelect"
                                onChange={props.handleChange}
                            >
                                {props.marketList.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })}
                            </select>
                        </div>
                        {/* <button className="w-full my-4">See Properties</button> */}
                    </form>
                </div>
    )
}

export default PropertySearch