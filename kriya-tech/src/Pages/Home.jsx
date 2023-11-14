import React from "react";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Cards from '../components/Cards'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div>
            <Hero />
            <Section />
            <Cards />
            <Footer />
        </div>
    );
};

export default Home;
