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
  color: gray;
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
  width: 30%;
  @media (min-width: 600px) {
    width: 10%;
  }
  @media (min-width: 1000px) {
    width: 5%;
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-flow: column wrap;
  height: 20vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const H3 = styled.h3`
  color: white;
`;
const Li = styled.li`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 16px;
  width: 50%;
  @media (min-width: 600px) {
    width: 15%;
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
        <Ul>
          <H3>Social Media</H3>
          {socialMedia.map((obj) => {
            return (
              <Li key={obj.favcon.alt}>
                <Icon
                  image={obj.favcon.asset.gatsbyImageData}
                  alt={obj.favcon.alt}
                />
                <A href={obj.url}>{obj.text}</A>
              </Li>
            );
          })}
        </Ul>
      </LinkContainer>
    </Wrapper>
  );
}

export default Footer;
