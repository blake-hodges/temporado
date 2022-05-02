import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Host from './pages/Host';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Property from './pages/Property';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';


function App() {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/properties" element={<Properties />} />
                    <Route path="/property/:id" element={<Property />} />
                    <Route path="/host" element={<Host />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    )
    
    
    
}

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App;



            