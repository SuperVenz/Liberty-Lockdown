import React from "react";
import styled from "styled-components";
import { LiteYoutubeEmbed } from "react-lite-yt-embed";
const Container = styled.div`
  padding-top: 15%;
  @media (min-width: 600px) {
    order: 1;
    padding-top: 0%;
    grid-area: Vid;
    width: 95%;
  }
`;
const H2 = styled.h2`
  padding-bottom: 16px;
  @media (min-width: 600px) {
    color: white;
    padding-bottom: 24px;
  }
`;

function HeroVideo({ title, url }) {
  return (
    <Container>
      <H2>{title}</H2>
      <LiteYoutubeEmbed id={url} mute={false} isMobile={true} noCookie={true} />
    </Container>
  );
}

export default HeroVideo;
