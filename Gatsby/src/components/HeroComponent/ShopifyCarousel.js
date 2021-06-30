import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Container = styled.div`
  margin: 0px 15%;
  @media (min-width: 1000px) {
    display: none;
  }
`;
const H3 = styled.h3``;
const Wrapper = styled.div`
  width: 100%;
  padding: 10% 20%;
  background: white;
  border-radius: 10px;
  @media (min-width: 600px) {
    padding: 10% 10%;
  }
`;
const StyledImage = styled(GatsbyImage)`
  margin-bottom: 24px;
  height: 200px;
  @media (min-width: 600px) {
    height: 40vh;
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
const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  /* Background */
  .control-next.control-arrow,
  .control-next.control-arrow:hover {
    height: 20%;
    margin-top: 40%;
    opacity: 0.5;
    z-index: 1;
    @media (min-width: 1000px) {
      height: 100%;
      margin-top: 0;
    }
  }
  .control-prev.control-arrow,
  .control-prev.control-arrow:hover {
    opacity: 0.5;
    z-index: 1;
  }
  /* Arrow opacity */
  .control-arrow,
  .carousel-slider .control-arrow {
    height: 20%;
    margin-top: 40%;
    opacity: 0.5;
    z-index: 1;
    @media (min-width: 1000px) {
      height: 100%;
      margin-top: 0;
    }
  }
  /* before Arrow */
  .control-next.control-arrow:before {
    content: "";
    border: solid #facf03;
    border-width: 0 8px 8px 0;
    display: block;
    padding: 8px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  .carousel .control-prev.control-arrow:before {
    border: solid #facf03;
    content: "";
    border-width: 0 8px 8px 0;
    display: block;
    padding: 8px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
`;
function ShopifyCarousel({ title, shopifyFeature }) {
  return (
    <Container>
      <H3>{title}</H3>
      <StyledCarousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={true}
        autoplay={false}
        swipeable={true}
        useKeyboardArrows={true}
      >
        {shopifyFeature.map((obj) => {
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
      </StyledCarousel>
    </Container>
  );
}

export default ShopifyCarousel;
