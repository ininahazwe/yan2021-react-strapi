import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaPhone} from "react-icons/all";

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? 'var(--blanc)' : 'transparent')};
  box-shadow: ${({scrollNav}) => (scrollNav ? 'rgba(0, 0, 0, 0.125) 0 0 10px' : 'none')};
  height: ${({scrollNav}) => (scrollNav ? '60px' : '80px')};
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px){
    background: ${({scrollNav}) => (scrollNav ? 'var(--color5)' : 'transparent')};
    transition: 0.8s all ease;
    box-shadow: none;
  }
`;

export const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
`
export const Title = styled.h1`
  color:${({scrollNav}) => (scrollNav ? 'var(--rouge)' : 'var(--blanc)')};
  font-size: 2rem;
    @media screen and (max-width: 768px){
      font-size: 1.5rem;
    }
`;

export const LogoSrc = styled.img`
  width: 80px;
  padding: 8px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding-right: 75px;
  padding-left: 75px;
  //margin-right: -22px;

  @media screen and (max-width: 960px){
    padding-right: 0px;
    padding-left: 0px;
  }

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  
    a{
      color:${({scrollNav}) => (scrollNav ? 'var(--gris)' : 'var(--blanc)')};
      text-decoration: none;
      padding: 0 1rem;
      cursor: pointer;
    }
`;

export const NavLinks = styled(LinkS)`
  color:${({scrollNav}) => (scrollNav ? 'var(--rouge)' : 'var(--blanc)')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 90%;
  cursor: pointer;
  font-size: 1rem;
  
      &.active {
      border-bottom: 3px solid var(--rouge);
      }
  
      a{
        color:${({scrollNav}) => (scrollNav ? 'var(--blanc)' : 'var(--rouge)')};
      }
`;

export const Gauche = styled.div`
  display: flex;
`
export const Droite = styled.div`
  display: flex;
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
      @media screen and (max-width: 768px){
      display: none;
      }
`;

export const NavBtnLink = styled(LinkS)`
  background: var(--violet);
  white-space: nowrap;
  padding: 10px 22px;
  color: var(--blanc);
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
      &:hover{
      transition: all 0.2s ease-in-out;
      transform: scale(0.98);
      box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .1);
      }
`;

export const PhoneIcon = styled(FaPhone)`
  fill: var(--rouge);
  font-size: 0.7rem;
  margin-right: 5px;
`
