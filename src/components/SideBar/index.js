import React from "react";
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap, SidebarMenu} from "./Sidebar.elements";
import {Link} from "react-router-dom";
import {FaPhone} from "react-icons/all";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="gallery" onClick={toggle}>Gallery</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute>
                        <Link to="/donation"><FaPhone /> Book us</Link>
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;