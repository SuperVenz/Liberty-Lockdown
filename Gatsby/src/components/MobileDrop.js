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
  @media (min-width: 600px) {
    display: none;
  }
`;
const StyledImg = styled(GatsbyImage)`
  width: 15%;
  margin: 10px 24px;
  z-index: 51;
  :nth-child(2) {
    width: 25px;
    height: 25px;
    margin-top: 24px;
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
  margin-right: 24px;
  margin-left: 5%;
`;
const A = styled.a`
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
`;
const P = styled.p``;
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
      <StyledImg
        image={mobileVector}
        alt={data.sanityIcons.mobileMenuIcon.alt}
        open={open}
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
      />
      <Nav open={open}>
        {data.allSanityMetaData.edges[0].node.socialMedia.map((res) => (
          <A href={res.url} key={res.url}>
            <Icon image={res.favcon.asset.gatsbyImageData} alt={res.alt} />
            <P>{res.text}</P>
          </A>
        ))}
      </Nav>
    </Menue>
  );
};

export default MobileDrop;
