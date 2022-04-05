import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    

    return (
        <div className="flex flex-col md:flex-row items-center">
            <div className="hidden md:block">
                <h1>Temporado</h1>
            </div>
            <div className="hidden md:flex">
                <li className="">Home</li>
                <li className="">Destinations</li>
                <li className="">Book a Trip</li>
                <li className="">Become a Host</li>
            </div>
            <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {!menuOpen ? <MenuIcon className="h-10 w-10" /> :  <XIcon className="h-10 w-10" />}
            </div>
            <div className={menuOpen ? "md:hidden w-screen bg-black" : "absolute left-[-100%]"}>
                <ul className={`text-center w-full bg-slate-300`}>
                    <li className="border-b">Home</li>
                    <li className="border-b">Destinations</li>
                    <li className="border-b">Book a Trip</li>
                    <li className="border-b">Become a Host</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;