import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const Menue = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 50;
  }
`;
const StyledImg = styled(GatsbyImage)`
  @media (min-width: 600px) {
    width: 50px;
    height: 50px;
    margin: 10px 24px;
    z-index: 50;
  }
  @media (min-width: 1000px) {
    width: 100px;
    height: auto;
  }
`;
const Navbar = styled.nav`
  padding-right: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;
const A = styled.a`
  align-items: center;
  display: flex;
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin-left: 16px;
  @media (min-width: 1000px) {
    font-size: 18px;
  }
`;

const Icon = styled(GatsbyImage)`
  margin-right: 8px;
  width: 25px;
`;
function Nav(props) {
  const data = useStaticQuery(graphql`
    {
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
          asset {
            gatsbyImageData
          }
          alt
        }
      }
    }
  `);
  const logo = getImage(data.sanityMetaData.logo.asset.gatsbyImageData);

  return (
    <Menue>
      <StyledImg image={logo} alt={data.sanityMetaData.logo.alt} />
      <Navbar>
        {data.allSanityMetaData.edges[0].node.socialMedia.map((res) => (
          <A href={res.url} key={res.url}>
            <Icon
              image={res.favcon.asset.gatsbyImageData}
              alt={res.favcon.alt}
              objectFit="contain"
            />
            {res.text}
          </A>
        ))}
      </Navbar>
    </Menue>
  );
}

export default Nav;
