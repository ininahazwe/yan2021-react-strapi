import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink, LogoSrc, PhoneIcon, Title} from './NavbarElements';
import Logo from '../../images/logo.png';
import {Link} from "react-router-dom";

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
    return (
        <>
            <IconContext.Provider value={{ color:'var(--rouge)'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <LogoSrc src={Logo} />
                            <Title scrollNav={scrollNav}>Yan Events</Title>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='services'
                                          smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Our services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='about'
                                          smooth={true} duration={500} spy={true} exact='true' offset={0}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='gallery'
                                          smooth={true} duration={500} spy={true} exact='true' offset={0}
                                >Gallery</NavLinks>
                            </NavItem>
                            <NavItem>
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
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
