import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px){
    height: 700px;
  }
`;

export const HeroIllustration = styled.div`
  background: var(--rouge);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroContent = styled.div`
  background: rgb(241,98,98);
  background: linear-gradient(146deg, rgba(241,98,98,1) 0%, rgba(255,255,255,1) 51%, rgba(236,236,236,1) 100%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: var(--color4);
  font-size: 3rem;
  line-height: 3rem;
  text-transform: uppercase;
  font-weight: 100;
  text-align: center;
  
  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;

export const HeroDate = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;
  text-align: center;
  margin: 1rem;
`;

export const HeroHashTag = styled.span`
  font-weight: 600;
  
  &:before{
    content: '#';
    color: var(--color1);
  }
`

export const HeroP = styled.p`
  color: var(--color4);
  margin-bottom: 1rem;
  font-size: 18px;
  font-weight: 100;
  
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
  @media screen and (max-width: 480px){
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  margin-left: 8px;
  font-size: 20px;
`;