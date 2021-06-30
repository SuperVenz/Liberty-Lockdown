import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  @media (min-width: 600px) {
    grid-area: Btn;
    margin-left: 5%;
    margin-right: 10%;
    margin-top: 15%;
  }
  @media (min-width: 1000px) {
    width: 50%;
    margin-left: 3%;
  }
`;
const Button = styled.a`
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 25%;
  padding: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background: #facf03;
  border-radius: 10px;
  text-decoration: none;
  @media (min-width: 600px) {
    margin-right: 0%;
    margin-left: 0%;
    margin-top: 0%;
  }
`;
const H3 = styled.h3`
  margin-right: 24px;
`;
const Icon = styled(GatsbyImage)``;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-around;
  padding-top: 5%;
`;
const SocialImage = styled(GatsbyImage)``;
const SocialLink = styled.a``;

function HeroButton({
  text,
  icon,
  iconAlt,
  url,
  instaIcon,
  instaUrl,
  instaAlt,
  twitterIcon,
  twitterUrl,
  twitterAlt,
}) {
  const iconImage = getImage(icon);
  return (
    <Container>
      <Button href={url}>
        <H3>{text}</H3>
        <Icon image={iconImage} alt={iconAlt} objectFit="contain" />
      </Button>

      <SocialContainer>
        <SocialLink href={instaUrl}>
          <SocialImage image={instaIcon} alt={instaAlt} />
        </SocialLink>

        <SocialLink href={twitterUrl}>
          <SocialImage image={twitterIcon} alt={twitterAlt} />
        </SocialLink>
      </SocialContainer>
    </Container>
  );
}

export default HeroButton;
