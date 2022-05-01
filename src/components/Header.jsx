import React from 'react';
import { useLocation } from 'react-router-dom';
import frenchPolynesia from '../assets/french-polynesia.jpg';
import { SearchIcon } from '@heroicons/react/solid';
import Hero from './Hero';
import Navbar from './Navbar';

function Header() {
    let location = useLocation();

    const WhichHeader = () => location.pathname === "/" ? <HeaderHome /> : <HeaderOther />;

    return (
        <WhichHeader />
    )
}

//5B92A9

function HeaderOther() {
    return (
        <>
        <Navbar />
        <div className="w-full h-[80px] relative bg-blue-500">
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
            </div>
        </div>
        </>
    )
}

function HeaderHome() {
    return (
        <>
        <Navbar />
        <Hero />
        </>
    )
}

export default Header;