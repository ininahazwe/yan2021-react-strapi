import React from 'react';
import {HeroContainer, HeroContent, HeroIllustration} from "./Hero.elements";

const HeroSection = () => {

    return (
        <HeroContainer>
            <HeroContent>
                <h1>Gauche</h1>
            </HeroContent>
            <HeroIllustration>
                <h1>Droite</h1>
            </HeroIllustration>
        </HeroContainer>
    );
};

export default HeroSection;