import React from "react";
import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 600px) {
    margin-left: 5%;
    grid-area: Txt;
  }
  @media (min-width: 600px) {
    margin-left: 0;
  }
`;

const H1 = styled.h1`
  padding: 0px 3% 50px;

  @media (min-width: 600px) {
    text-align: left;
  }
`;
const P = styled.p`
  padding: 0px 3%;
  @media (min-width: 600px) {
    text-align: left;
  }
  @media (min-width: 1000px) {
    width: 55%;
  }
`;
function HeroText({ title, text }) {
  return (
    <Container>
      <H1>{title}</H1>
      <P>{text}</P>
    </Container>
  );
}

export default HeroText;
