// import React from 'react';

import Aboutme from "../../Components/AboutMe/Aboutme";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/HeroSection/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Project from "../../Components/Project/Project";

const Home = () => {
    return (
        <div>
            <div class="absolute top-0 z-[-2] h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Aboutme></Aboutme>
            <Project></Project>
            <Contact></Contact>
        </div>

    );
};

export default Home;
