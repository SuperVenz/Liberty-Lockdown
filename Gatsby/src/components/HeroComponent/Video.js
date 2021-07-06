import React from "react";
import styled from "styled-components";
import { LiteYoutubeEmbed } from "react-lite-yt-embed";
const Container = styled.div``;
const H2 = styled.h2`
  padding-bottom: 32px;
  @media (min-width: 600px) {
  }
`;
const Div = styled.div`
  @media (min-width: 600px) {
    width: 70%;
    height: 70%;
    padding-left: 15%;
  }
  @media (min-width: 600px) {
    width: 40%;
    height: 50%;
    padding-left: 30%;
  }
`;

function Video({ title, url }) {
  return (
    <Container>
      <H2>{title}</H2>
      <Div>
        <LiteYoutubeEmbed id={url} mute={false} />
      </Div>
    </Container>
  );
}

export default Video;
