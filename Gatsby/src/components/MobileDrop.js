import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const Menue = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 600px) {
    display: none;
  }
`;
const StyledImg = styled(GatsbyImage)`
  width: 15%;
  margin: 10px 24px;
  z-index: 61;
  :nth-child(2) {
    width: 25px;
    height: 25px;
    margin-top: 32px;
  }
`;
const Nav = styled.nav`
  display: ${(props) => (props.open ? "flex" : "none")};
  height: 100vh;
  z-index: 49;
  padding-top: 20%;
  flex-flow: column nowrap;
  align-content: center;
  position: absolute;
  width: 100%;
  height: 30vh;
  background: black;
  justify-content: space-around;
`;
const Icon = styled(GatsbyImage)`
  margin-left: 8px;
`;
const A = styled.a`
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 60%;
`;
const P = styled.p`
  padding-left: 24px;
`;
const OnClicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;
const MobileDrop = () => {
  const data = useStaticQuery(graphql`
    {
      sanityIcons {
        mobileMenuIcon {
          asset {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          alt
        }
      }
      sanityMetaData {
        logo {
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
              url
              text
              favcon {
                asset {
                  gatsbyImageData
                }
                alt
              }
            }
          }
        }
      }
    }
  `);
  const mobileVector = getImage(data.sanityIcons.mobileMenuIcon.asset);
  const logo = getImage(data.sanityMetaData.logo.asset);

  const [open, setOpen] = useState(false);
  return (
    <Menue open={open}>
      <StyledImg image={logo} alt={data.sanityMetaData.logo.alt} />
      <OnClicker
        onTouchStart={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
      >
        <StyledImg
          image={mobileVector}
          alt={data.sanityIcons.mobileMenuIcon.alt}
          open={open}
        />
      </OnClicker>
      <Nav open={open}>
        {data.allSanityMetaData.edges[0].node.socialMedia.map((res) => (
          <A href={res.url} key={res.url}>
            <Icon
              image={res.favcon.asset.gatsbyImageData}
              alt={res.alt}
              objectFit="contain"
            />
            <P>{res.text}</P>
          </A>
        ))}
      </Nav>
    </Menue>
  );
};

export default MobileDrop;
