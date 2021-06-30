import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import FeatureButton from "../components/FeatureButton";
import styled from "styled-components";
import HeroMain from "../components/HeroComponent/HeroMain";
import ShopifyCarousel from "../components/HeroComponent/ShopifyCarousel";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Video from "../components/HeroComponent/Video";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import ShopifyImageLink from "../components/ShopifyImageLink";
// Styles
const Hero = styled(BackgroundImage)`
  padding-top: 40%;
  opacity: 1 !important;
  background-size: cover;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(37, 37, 37, 1) 100%
  );
  background-size: cover;
  @media (min-width: 600px) {
    padding-top: 15%;
    height: 50vh;
  }
  @media (min-width: 1000px) {
    height: 70vh;
  }
`;
const Feature = styled(BackgroundImage)`
  padding-top: 146px;
  height: 100vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(37, 37, 37, 1) 100%
  );
  @media (min-width: 600px) {
    margin-top: 0%;
    height: 50vh;
    padding: 20% 0%;
  }
  @media (min-width: 1000px) {
    padding: 10% 0%;
    height: auto;
  }
`;
const ShopifySection = styled.div`
  height: 100vh;
  padding-top: 25px;
  background: #1c1f22;
  @media (min-width: 1000px) {
    height: auto;
  }
`;
const ShopifyTitle = styled.h2`
  margin-bottom: 15%;
  @media (min-width: 1000px) {
    margin-bottom: 5%;
    padding-top: 2%;
  }
`;
// markup
const IndexPage = ({ data }) => {
  const heroBackground = getImage(
    data.sanityIndex.backgroundImages[0].asset.gatsbyImageData
  );
  const featureBackground = getImage(
    data.sanityIndex.backgroundImages[1].asset.gatsbyImageData
  );

  const heroConverted = convertToBgImage(heroBackground);
  const featureConverted = convertToBgImage(featureBackground);
  return (
    <Layout
      pageMeta={{
        keywords: [
          "Web Development",
          "Contact",
          "Liberty Lockdown",
          "San Diego",
        ],
        description: "Test Test Test",
      }}
    >
      <Hero {...heroConverted} preserveStackingContext>
        <HeroMain
          heroTitle={data.sanityIndex.heroTitle}
          heroText={data.sanityIndex.heroText}
          videoTitle={data.sanityIndex.heroVideoString}
          videoUrl={data.sanityIndex.heroVideoUrl}
          buttonText={data.sanityIndex.heroCTA}
          buttonIcon={data.sanityIcons.heroButtonIcon.asset.gatsbyImageData}
          buttonIconAlt={data.sanityIcons.heroButtonIcon.alt}
          buttonUrl={data.sanityIndex.heroButtonUrl}
          instaIcon={
            data.allSanityMetaData.edges[0].node.socialMedia[1].favcon.asset
              .gatsbyImageData
          }
          instaUrl={data.allSanityMetaData.edges[0].node.socialMedia[1].url}
          instaAlt={
            data.allSanityMetaData.edges[0].node.socialMedia[1].favcon.alt
          }
          twitterIcon={
            data.allSanityMetaData.edges[0].node.socialMedia[0].favcon.asset
              .gatsbyImageData
          }
          twitterUrl={data.allSanityMetaData.edges[0].node.socialMedia[0].url}
          twitterAlt={
            data.allSanityMetaData.edges[0].node.socialMedia[0].favcon.alt
          }
        />
      </Hero>
      <Feature {...featureConverted} preserveStackingContext>
        <Video
          url={data.sanityIndex.videoURL}
          title={data.sanityIndex.videoHeader}
        />
        <FeatureButton
          url={data.sanityIndex.featuredCtaLink}
          text={data.sanityIndex.featuredCTA}
        />
      </Feature>
      <ShopifySection>
        <ShopifyTitle>{data.sanityIndex.storeHeader}</ShopifyTitle>
        <ShopifyCarousel
          title={data.sanityIndex.shopifyHeader}
          shopifyFeature={data.sanityIndex.shopifyFeature}
        />
        <ShopifyImageLink
          title={data.sanityIndex.shopifyHeader}
          shopifyData={data.sanityIndex.shopifyFeature}
        />
        <FeatureButton
          text={data.sanityIndex.shopifyCTA}
          url={data.sanityIndex.shopifyURL}
        />
      </ShopifySection>
      <Form title={data.sanityIndex.formTitle} />
      <Footer
        src={data.sanityIndex.formPicture.asset.gatsbyImageData}
        alt={data.sanityIndex.formPicture.alt}
        logoSrc={data.sanityMetaData.logo.asset.gatsbyImageData}
        logoAlt={data.sanityMetaData.logo.alt}
        socialMedia={data.allSanityMetaData.edges[0].node.socialMedia}
      />
    </Layout>
  );
};
export const query = graphql`
  {
    sanityIndex {
      backgroundImages {
        asset {
          gatsbyImageData
        }
        alt
      }
      heroTitle
      heroText
      heroVideoString
      heroCTA
      heroButtonUrl
      heroVideoUrl
      videoHeader
      videoURL
      featuredCTA
      featuredCtaLink
      shopifyCTA
      shopifyFeature {
        alt
        shopifyPicture {
          asset {
            gatsbyImageData
          }
        }
        shopifyURL
        shopifyButton
      }
      storeHeader
      formTitle
      formPicture {
        asset {
          gatsbyImageData
        }
        alt
      }
      shopifyURL
    }
    sanityIcons {
      heroButtonIcon {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityMetaData {
      edges {
        node {
          socialMedia {
            favcon {
              asset {
                gatsbyImageData
              }
              alt
            }
            url
            text
          }
        }
      }
    }
    sanityMetaData {
      logo {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;
export default IndexPage;
