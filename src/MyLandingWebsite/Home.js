// #6415ff
import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line



import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero2 from "./components/hero/Imagebackground.js"
import FirstFeature from "components/features/TwoColWithButton.js"
import Advantages from "./components/features/Feature4.js"
import Usecase from "./components/grids/usecasesgrid.js"
import Blogs from "./components/grids/Mainblog.js"
import Faq from "./components/faq/Singlecolumnwithbackground.js"
import Footer from "./components/footer/Fivecolumndark.js"

import image from "./images/did.png"
import icon1 from "./images/ownership.png"
import icon2 from "./images/securitys.png"
import icon3 from "./images/seamless.png"
import icon4 from "./images/privacy1.png"
import icon5 from "./images/user.png"
import icon6 from "./images/trust1.png"

import ReactGA from "react-ga4";
import { useEffect } from "react";


export default () =>{
    const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  useEffect(() =>{
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home Page" })
  },[]);


  return(
    <AnimationRevealPage>
        {/* <FinalHeader/> */}
        <Hero2/>
        <FirstFeature 
        subheading={<Subheading></Subheading>}
        heading={
          <>
            Embrace the Future: Your Identity, Your Rules,
            <wbr /> <HighlightedText>Decentralized.</HighlightedText>
          </>
        }
        description={
          <Description>
            Welcome to smartfalcon, where we revolutionize the way you control and manage your digital identity. Our platform leverages cutting-edge technologies like Decentralized Identity (DID) and Self-Sovereign Identity (SSI) to provide you with a secure, private, and user-centric identity solution.
            <br />
            <br />
            In a world where digital identity is becoming increasingly crucial, decentralized identity puts you in control. Say goodbye to centralized authorities and hello to a new era of empowerment, privacy, and security.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Know More"
        primaryButtonUrl="/technology"
        imageSrc={image}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}/>
        <Advantages heading="Why Choose Decentralized Identity?" subheading = "Key Features" description = ""
        cards={[
            {
              title: "Ownership Control",
              description: " Have full autonomy over your personal data.",
              imageSrc: icon1
            },
            {
                title: "Robust Security",
                description: "Fortify your identity with cutting-edge cryptographic measures.",
                imageSrc: icon2
              },
              {
                title: "Seamless Interoperability",
                description: " Effortlessly integrate your identity across diverse platforms.",
                imageSrc: icon3
              },
              {
                title: "Privacy Assurance",
                description: "Enjoy a heightened level of data privacy in your digital interactions.",
                imageSrc: icon4
              },
              {
                title: "User-Centric Experience",
                description: "Tailor your identity experience according to your preferences.",
                imageSrc: icon5
              },
              {
                title: "Trustworthy Validation",
                description: "Rely on a reliable system for verifying and validating your identity.",
                imageSrc: icon6
              }
          ]}/>
          <Usecase />
          <Blogs/>
          <Faq/>
          <Footer/>
    </AnimationRevealPage>
);
    }