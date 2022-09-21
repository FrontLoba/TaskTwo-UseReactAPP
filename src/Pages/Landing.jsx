import React from 'react';
import './Landing.css';
import Header from '../Homepage/Header';
import Hero from '../Homepage/Hero';
import Conversion from '../Homepage/Conversion';
import ItWorks from '../Homepage/itWorks';
import RatingTable from '../Homepage/Rating';
import WhyCoin from '../Homepage/WhyCoin';
import GetApp from '../Homepage/GetApp';
import Footer from '../Homepage/Footer'

function Landing () {
    return (
        <>
        <Header/>
        <Hero/>
        <Conversion/>
        <ItWorks/>
        <RatingTable/>
        <WhyCoin/>
        <GetApp/>
        <Footer />
        </>
    )
}

export default Landing