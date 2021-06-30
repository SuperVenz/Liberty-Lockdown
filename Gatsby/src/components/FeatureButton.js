import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;
const Button = styled.a`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20%;
  padding: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background: #facf03;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  text-decoration: none;
  @media (min-width: 600px) {
    margin-top: 0%;
    display: none;
  }
`;
function FeatureButton({ url, text }) {
  return (
    <Container>
      <Button href={url}>{text}</Button>
    </Container>
  );
}

export default FeatureButton;
