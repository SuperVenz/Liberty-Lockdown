import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding-top: 15%;
  @media (min-width: 600px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: 0%;
  }
`;
const H2 = styled.h2`
  @media (min-width: 600px) {
  }
`;
const VideoWrapper = styled.div`
  padding-top: 32px;
  display: flex;
  justify-content: center;
  height: 250px;
  @media (min-width: 600px) {
    width: 80%;
    height: 334.77px;
  }
  @media (min-width: 1000px) {
    height: 500px;
    width: 50%;
  }
`;
const Iframe = styled.iframe`
  @media (min-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
function Video({ title, url }) {
  return (
    <Container>
      <H2>{title}</H2>
      <VideoWrapper>
        <Iframe
          src={url}
          title={url}
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </VideoWrapper>
    </Container>
  );
}

export default Video;
