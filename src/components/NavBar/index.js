import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink, LogoSrc, PhoneIcon, Title, Gauche, Droite} from './NavbarElements';
import Logo from '../../images/logo.png';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const fadeTop = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <IconContext.Provider value={{ color:'var(--rouge)'}}>
                <Nav scrollNav={scrollNav}>
                    <motion.h1
                        variants={fadeTop}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1.8 }}
                    >
                        <NavbarContainer>
                            <Gauche>
                                <NavLogo to='/' onClick={toggleHome}>
                                    <LogoSrc src={Logo} />
                                    <Title scrollNav={scrollNav}>Yan Events</Title>
                                </NavLogo>
                                <MobileIcon onClick={toggle}>
                                    <FaBars />
                                </MobileIcon>
                            </Gauche>
                            <Droite>
                                <NavMenu>
                                    <NavItem scrollNav={scrollNav}>
                                        <NavLinks to='services'
                                                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                        >Our services</NavLinks>
                                    </NavItem>
                                    <NavItem scrollNav={scrollNav}>
                                        <NavLinks to='about'
                                                  smooth={true} duration={500} spy={true} exact='true' offset={0}
                                        >About</NavLinks>
                                    </NavItem>
                                    <NavItem scrollNav={scrollNav}>
                                        <NavLinks to='gallery'
                                                  smooth={true} duration={500} spy={true} exact='true' offset={0}
                                        >Gallery</NavLinks>
                                    </NavItem>
                                    <NavItem scrollNav={scrollNav}>
                                        <NavLinks to='contact'
                                                  smooth={true} duration={500} spy={true} exact='true' offset={0}
                                        >Contact us</NavLinks>
                                    </NavItem>
                                </NavMenu>
                                <NavBtn>
                                    <NavBtnLink>
                                        <Link to="/donation"><PhoneIcon /> Book us</Link>
                                    </NavBtnLink>
                                </NavBtn>
                            </Droite>
                    </NavbarContainer>
                    </motion.h1>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
