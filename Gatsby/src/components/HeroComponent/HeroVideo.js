import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding-top: 15%;
  @media (min-width: 600px) {
    order: 1;
    padding-top: 0%;
    grid-area: Vid;
    width: 90%;
  }
  @media (min-width: 1000px) {
    display: flex;
    flex-flow: column nowrap;
    width: 98%;
    justify-content: center;
    align-items: center;
  }
`;
const H2 = styled.h2`
  @media (min-width: 600px) {
    color: white;
  }
`;
const Video = styled.div`
  padding-top: 32px;
  display: flex;
  justify-content: center;
  height: 250px;
  @media (min-width: 600px) {
    height: 90%;
    width: 100%;
  }
  @media (min-width: 1000px) {
    height: 500px;
    width: 90%;
  }
`;
const Iframe = styled.iframe`
  @media (min-width: 600px) {
    width: 100%;
    height: 90%;
  }
`;
function HeroVideo({ title, url }) {
  return (
    <Container>
      <H2>{title}</H2>
      <Video>
        <Iframe
          src={url}
          title={url}
          frameBorder="0"
          loading="lazy"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </Video>
    </Container>
  );
}

export default HeroVideo;
