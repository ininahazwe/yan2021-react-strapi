import React, {useState} from 'react';
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import HeroSection from "../components/HeroSection";
import Intro from "../components/IntroSection";
import {homeObjOne} from "../components/IntroSection/Data";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Images from "../components/Gallery";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Intro {...homeObjOne}/>
            <Services />
            <Images />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
