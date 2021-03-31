import React from 'react';
import {homeObjFour, homeObjThree} from "../components/IntroSection/Data";
import InfoSection from "../components/IntroSection";
import Footer from "../components/Footer";

const About = () => {
    return(
        <>
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Footer />
        </>
    );
};

export default About;