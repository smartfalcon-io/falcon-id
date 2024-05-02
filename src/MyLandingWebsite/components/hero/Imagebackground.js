import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { NavLink } from "../header/BasicHeader";
import MainHeader from "../header/MainHeader";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fhome%20main.png");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;


const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;


export default () => {


  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <MainHeader/>
        <Content>
          <Heading>
              Unlock Your Digital Freedom with
              <br />
              Decentralized Identity.
          </Heading>
          <PrimaryAction><NavLink href="/falcon-id/trydemo">Try Demo</NavLink></PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};

