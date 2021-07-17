import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link } from "gatsby";
const Wrapper = styled.div`
  background: #1c1f22;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
const H2 = styled.h2`
  padding-top: 40%;
  @media (min-width: 1000px) {
    padding-top: 10%;
  }
`;
const StyledLink = styled(Link)`
  margin-top: 10%;
  font-weight: bold;
  color: black;
  text-decoration: none;
  text-align: center;
  padding: 10px 0px;
  background: #facf03;
  width: 50%;
  border-radius: 10px;
  @media (min-width: 600px) {
    width: 40%;
    padding: 15px 0px;
    font-size: 24px;
  }
  @media (min-width: 1000px) {
    width: 20%;
  }
`;
function Thankyou(props) {
  return (
    <Layout>
      <Wrapper>
        <H2>Thank you for the submission.</H2>
        <StyledLink to="/index"> Go back</StyledLink>
      </Wrapper>
    </Layout>
  );
}

export default Thankyou;
