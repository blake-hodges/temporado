import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import Logo from './Logo';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    

    return (
        <div className="w-full flex flex-col md:flex-row md:items-center absolute z-10 text-white h-20 px-4">
            <div className="hidden md:block">
                <NavLink to="/"><Logo /></NavLink>
            </div>
            <div className="hidden md:flex pl-10">
                <li className=""><NavLink to="/">Home</NavLink></li>
                <li className=""><NavLink to="/destinations">Destinations</NavLink></li>
                <li className=""><NavLink to="/properties">Properties</NavLink></li>
                <li className=""><NavLink to="/host">Become a Host</NavLink></li>
            </div>
            <div className="md:hidden z-10" onClick={() => setMenuOpen(!menuOpen)}>
                {!menuOpen ? <MenuIcon className="h-10 w-10" /> :  <XIcon className="h-10 w-10" />}
            </div>
            <div className={menuOpen ? "md:hidden w-screen bg-black absolute top-0 left-0" : "absolute left-[-100%]"}>
                <ul className={`text-center w-full bg-slate-300`}>
                <li className="border-b"><NavLink to="/">Home</NavLink></li>
                <li className="border-b"><NavLink to="/destinations">Destinations</NavLink></li>
                <li className="border-b"><NavLink to="/properties">Properties</NavLink></li>
                <li className="border-b"><NavLink to="/host">Become a Host</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;