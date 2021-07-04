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
          srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href={`${url}?autoplay=1`}><img src=https://img.youtube.com/vi/Y8Wp3dafaMQ/hqdefault.jpg alt='featured video'><span>▶</span></a>"
          loading="lazy"
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
