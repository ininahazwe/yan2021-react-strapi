import React from 'react';
import {Button} from "../ButtonElements";
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, BtnWrap, ImgWrap, Img} from "./Intro.elements";
import {Link} from "react-router-dom";
import Image from "../../images/fond-about.png"
import Fade from 'react-reveal/Fade';

const Intro = ({lightBg, id, imgStart, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, link}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <Fade bottom>
                        <InfoRow imgStart={imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <Heading lightText={lightText}>{headline}</Heading>
                                    <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <BtnWrap>
                                        <Button to='about'
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                exact="true"
                                                offset={-80}
                                                primary={primary ? 1 : 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0}
                                        >
                                            <Link to={link}>{buttonLabel}</Link>
                                        </Button>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={Image} alt={alt}/>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </Fade>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default Intro;
