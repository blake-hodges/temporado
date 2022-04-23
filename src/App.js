import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Property from './pages/Property';


function App() {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/properties" element={<Properties />} />
                    <Route path="/property/:id" element={<Property />} />
                </Route>
            </Routes>
        </>
    )
    
    
    
}

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;



            