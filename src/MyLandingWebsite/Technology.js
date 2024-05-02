import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "./components/header/MainHeader.js";
import Footer from "./components/footer/Fivecolumndark.js";
import MainFeature1 from "./components/features/Feature1.js";
import MainFeature2 from "./components/features/Techfeature2.js";
import SideFeatures from "./components/features/Tectfeature3.js";


import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

import ReactGA from "react-ga4";
import { useEffect } from "react";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {

  useEffect(() =>{
    ReactGA.send({ hitType: "pageview", page: "/falcon-id/technology", title: "Technology Page" })
  },[]);
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading></Subheading>}
        heading="Transforming Digital Identity Innovatively."
        description="Welcome to SmartFalocn, where we revolutionize digital identity through cutting-edge technology. Specializing in Self-Sovereign Identity (SSI) and identity blockchain, we empower individuals to control and secure their digital identities. Our solutions leverage decentralized identifiers (DIDs) and blockchain, ensuring privacy, security, and interoperability. Join us in reshaping the future of digital identity, where innovation meets user-centric design."
        imageSrc="https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Ftts%20main.png"
      />
      <MainFeature2/>
      <SideFeatures/>
      <Footer />
    </AnimationRevealPage>
  );
};
