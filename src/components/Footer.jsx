import React from 'react';
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
            <div className='max-w-[1240px] mx-auto flex flex-row justify-between px-4'>
                <div className='flex justify-between'>
                    <ul className='text-left lg:flex'>
                        <li className="py-6">Home</li>
                        <li className="py-6">Destinations</li>
                        <li className="py-6">Book a Trip</li>
                        <li className="py-6">Become a Host</li>
                    </ul>
                </div>
                <div className='sm:flex text-center justify-between items-center'>
                    <div className='flex justify-around w-full sm:max-w-[280px] my-4'>
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
        </div>
    );
};

export default Footer;