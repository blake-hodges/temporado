import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaPinterest,
    FaInstagram
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-gray-100 py-1'>
            <div className='md:flex md:justify-between'>
                <ul className='text-center md:flex'>
                    <li className="py-1 my-auto"><NavLink to="/">Home</NavLink></li>
                    <li className="py-1 my-auto"><NavLink to="/destinations">Destinations</NavLink></li>
                    <li className="py-1 my-auto"><NavLink to="/properties">Properties</NavLink></li>
                    <li className="py-1 my-auto"><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
                <div className='p-2 flex justify-center'>
                    <a href="https://facebook.com/mustdotravels" target="_blank" className="p-2">
                        <FaFacebook className="icon" />
                    </a>
                    <a href="https://twitter.com/TravelLeisure" target="_blank" className="p-2">
                        <FaTwitter className='icon' />
                    </a>
                    <a href="https://www.youtube.com/watch?v=Hmu4bQxfpDA" target="_blank" className="p-2">
                        <FaYoutube className='icon' />
                    </a>
                    <a href="https://www.pinterest.com/search/pins/?q=travel" target="_blank" className="p-2">
                        <FaPinterest className='icon' />
                    </a>
                    <a href="https://www.instagram.com/explore/tags/travel/" target="_blank" className="p-2">
                        <FaInstagram className='icon' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;