import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import MobileMenu from './MobileMenu';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    

    return (
        <div className="flex flex-col">
            <div className="w-screen bg-black">
                {openMenu ? 
                <XIcon className="text-white h-10 w-10" onClick={() => setOpenMenu(!openMenu)} /> :
                <MenuIcon className="text-white h-10 w-10" onClick={() => setOpenMenu(!openMenu)} /> }
                {openMenu ? <MobileMenu /> : ""  }
            </div>
        </div>
    )
}

export default Navbar;