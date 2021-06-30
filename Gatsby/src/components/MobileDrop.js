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
  z-index: 50;
  :nth-child(2) {
    width: 25px;
    height: 25px;
    margin-top: 24px;
  }
`;
const Nav = styled.nav`
  display: ${(props) => (props.open ? "flex" : "none")};
  height: 100vh;
  z-index: 10;
  justify-content: center;
  flex-flow: column nowrap;
  align-content: space-around;
  position: absolute;
  width: 100%;
  height: 30vh;
  background: gray;
  justify-content: space-around;
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
      <StyledImg
        image={mobileVector}
        alt={data.sanityIcons.mobileMenuIcon.alt}
        open={open}
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
      />
      <Nav open={open}>
        {data.allSanityMetaData.edges[0].node.socialMedia.map((res) => (
          <a href={res.url} key={res.url}>
            {res.text}
          </a>
        ))}
      </Nav>
    </Menue>
  );
};

export default MobileDrop;
