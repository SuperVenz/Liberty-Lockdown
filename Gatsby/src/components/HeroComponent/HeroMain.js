import React from "react";
import styled from "styled-components";
import HeroText from "./HeroText";
import HeroVideo from "./HeroVideo";
import HeroButton from "./HeroButton";

const Div = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media (min-width: 600px) {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 45% 55%;
    grid-template-rows: auto;
    grid-template-areas:
      "Txt Vid"
      "Btn .";
  }
  @media (min-width: 1000px) {
    grid-template-columns: 50% 50%;

    grid-template-areas:
      "Txt Vid"
      "Btn Vid";
  }
`;
function HeroMain({
  heroTitle,
  heroText,
  videoTitle,
  videoUrl,
  buttonText,
  buttonIcon,
  buttonIconAlt,
  buttonUrl,
  instaIcon,
  instaUrl,
  instaAlt,
  twitterIcon,
  twitterUrl,
  twitterAlt,
}) {
  return (
    <Div>
      <HeroText title={heroTitle} text={heroText} />
      <HeroVideo title={videoTitle} url={videoUrl} />
      <HeroButton
        text={buttonText}
        icon={buttonIcon}
        iconAlt={buttonIconAlt}
        url={buttonUrl}
        instaIcon={instaIcon}
        instaUrl={instaUrl}
        instaAlt={instaAlt}
        twitterIcon={twitterIcon}
        twitterUrl={twitterUrl}
        twitterAlt={twitterAlt}
      />
    </Div>
  );
}

export default HeroMain;
