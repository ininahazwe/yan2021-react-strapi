import React from 'react';
import {ServicesContainer, Service, Title, ServicesWrapper, Subtitle, SubDescription} from "./Services.elements";

const Services = () => {
    return (
        <>
            <ServicesContainer>
                <Title>Our services</Title>
                <ServicesWrapper>
                    <Service>
                        <Subtitle>Event planning</Subtitle>
                        <SubDescription>We organize, participate and offers various services for different events like festivals, Concert, Weddings, Conferences, Inaugurations, Anniversaries, Crusades, and more.</SubDescription>
                    </Service>
                    <Service>
                        <Subtitle>Entertainment</Subtitle>
                        <SubDescription>We provide performing arts such as Burundian drums, Traditional dances, Poetry, Musical band (African style), Sound system, MCs and Traditional dresses.</SubDescription>
                    </Service>
                    <Service>
                        <Subtitle>Handcrafting</Subtitle>
                        <SubDescription>Different artistic and cultural goods are found at Yan Events such as Canvas, Sculpture, handcraft and pottery products.</SubDescription>
                    </Service>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    );
};

export default Services;
