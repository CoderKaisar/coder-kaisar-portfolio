import React from 'react';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Header/Navbar';
import Achievement from '../../components/Achievement/Achievement';
import Services from '../../components/Services/Services';
import Skills from '../../components/Skills/Skills';
import Portfolios from '../../components/Portfolios/Portfolios';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

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
            <Footer />
        </div>
    );
};

export default Home;