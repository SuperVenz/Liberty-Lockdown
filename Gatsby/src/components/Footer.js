import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  padding-top: 10%;
  background: #1c1f22;
  @media (min-width: 600px) {
    padding-top: 0%;
  }
  @media (min-width: 1000px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`;
const Image = styled(GatsbyImage)`
  @media (min-width: 1000px) {
    width: 50%;
  }
`;
const Copywright = styled.p`
  margin: 10px;
  color: white;
  font-family: Helvetica Neue LT Std;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-around;
  background: black;
  align-items: center;
  height: 100%;
  padding: 20px 0;
  @media (min-width: 1000px) {
    width: 100%;
  }
`;
const Logo = styled(GatsbyImage)`
  margin-left: 24px;
  width: 20%;
  margin-right: 24px;
  @media (min-width: 600px) {
    width: 10%;
  }
  @media (min-width: 1000px) {
    width: 5%;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 40vh;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    height: 100%;
  }
`;
const H3 = styled.h3`
  color: white;
  @media (min-width: 600px) {
    margin-bottom: 32px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 24px;
  width: 50%;
  @media (min-width: 600px) {
    width: 20%;
    padding-left: 5%;
  }
  @media (min-width: 1000px) {
    margin-top: 24px;
  }
`;
const A = styled.a`
  margin-left: 10px;
  text-decoration: none;
  color: white;
  font-size: 16px;
`;
const Icon = styled(GatsbyImage)``;
function Footer({ src, alt, logoAlt, logoSrc, socialMedia }) {
  const date = new Date();
  return (
    <Wrapper>
      {console.log(socialMedia)}
      <Image image={src} alt={alt} />
      <Copywright>All Rights Reserved ©{date.getFullYear()}</Copywright>
      <LinkContainer>
        <Logo image={logoSrc} alt={logoAlt} />
        <SocialMedia>
          {socialMedia.map((obj) => {
            return (
              <Div key={obj.favcon.alt}>
                <Icon
                  image={obj.favcon.asset.gatsbyImageData}
                  alt={obj.favcon.alt}
                  objectFit="contain"
                />
                <A href={obj.url}>{obj.text}</A>
              </Div>
            );
          })}
        </SocialMedia>
      </LinkContainer>
    </Wrapper>
  );
}

export default Footer;
