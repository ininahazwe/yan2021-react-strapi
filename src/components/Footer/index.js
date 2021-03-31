import React from 'react';
import {FooterWrapper, LogoContainer, SocialMedia, Copyright} from "./Footer.elements";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/all";

const Footer = () => {
    const today = new Date();

    return (
        <>
            <FooterWrapper>
                <LogoContainer>YAN EVENTS</LogoContainer>
                <Copyright>©{today.getFullYear()}All rights reserved</Copyright>
                <SocialMedia>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaYoutube/>
                </SocialMedia>
            </FooterWrapper>
        </>
    );
};

export default Footer;
