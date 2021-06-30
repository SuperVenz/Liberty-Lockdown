import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Container = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    width: 100%;
  }
`;
const H3 = styled.h3``;
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 500px;
  background: white;
  border-radius: 10px;
`;
const StyledImage = styled(GatsbyImage)`
  margin-bottom: 24px;
  height: 400px;
  @media (min-width: 600px) {
  }
`;
const Text = styled.a`
  color: black;
  background: #facf03;
  height: 40px;
  width: 75%;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

function ShopifyImageLink({ title, shopifyData }) {
  return (
    <Container>
      <H3>{title}</H3>
      {shopifyData.map((obj) => {
        return (
          <Wrapper key={obj.alt}>
            <StyledImage
              objectFit="contain"
              image={obj.shopifyPicture.asset.gatsbyImageData}
              alt={obj.alt}
            />
            <Text href={obj.shopifyURL}>{obj.shopifyButton}</Text>
          </Wrapper>
        );
      })}
    </Container>
  );
}

export default ShopifyImageLink;
