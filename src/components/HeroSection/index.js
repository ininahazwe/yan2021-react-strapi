import React from 'react';
import {HeroContainer, HeroContent, HeroDate, HeroH1, HeroIllustration, ServicesList, Service, ImgHomeWrap, Cadre} from "./Hero.elements";
import yan from '../../images/anim.png'
import {Img} from "../IntroSection/Intro.elements";
import {FaDrum, FaGuitar, FaHandHolding, FaMicrophone, FaMugHot, FaMusic} from "react-icons/all";
import {motion} from "framer-motion";

const HeroSection = () => {

    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };
    const fadeRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: -420 }
    };

    return (
        <HeroContainer>
            <HeroIllustration>
                <ImgHomeWrap>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 6 }}
                    >
                    <Img src={yan} alt=""/>
                    </motion.div>
                </ImgHomeWrap>
                <motion.h1
                    variants={fadeRight}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 2 }}
                >
                    <Cadre/>
                </motion.h1>
            </HeroIllustration>
            <motion.h1
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{ duration: 2 }}
            >
                <HeroContent>
                    <HeroH1>Light up</HeroH1>
                    <HeroDate>your events</HeroDate>
                    <ServicesList>
                        <Service><FaDrum />Drums</Service>
                        <Service><FaMusic />Dances</Service>
                        <Service><FaMicrophone />Sound System</Service>
                        <Service><FaGuitar />Bands</Service>
                        <Service><FaHandHolding />Handcrafts</Service>
                        <Service><FaMugHot />Pottery</Service>
                    </ServicesList>
                </HeroContent>
            </motion.h1>
        </HeroContainer>
    );
};

export default HeroSection;