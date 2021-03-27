import React, {useState} from 'react';
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import HeroSection from "../components/HeroSection";
import Intro from "../components/IntroSection";

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
            <Intro />
        </>
    );
};

export default Home;
