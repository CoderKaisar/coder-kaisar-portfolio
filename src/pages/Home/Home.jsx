import React from 'react';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Header/Navbar';
import Achievement from '../../components/Achievement/Achievement';
import Services from '../../components/Services/Services';
import Skills from '../../components/Skills/Skills';
import Portfolios from '../../components/Portfolios/Portfolios';
import Contact from '../../components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Achievement />
            <Services />
            <Skills />
            <Portfolios />
            <Contact />
        </div>
    );
};

export default Home;