import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "./components/header/MainHeader.js";
import Footer from "./components/footer/Fivecolumndark.js";
import Contactusform from "./components/forms/Contactusform";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import HubspotContactForm from "./components/hubspot/Contactform.js";

import ReactGA from "react-ga4";
import { useEffect } from "react";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;
const Mainheader = tw(Header)`bg-black`



export default () => {
  useEffect(() =>{
    ReactGA.send({ hitType: "pageview", page: "/falcon-id/contactus", title: "ContactUs Page" })
  },[]);
  return (
    <AnimationRevealPage>
      <Mainheader/>
      <Contactusform />
      {/* <HubspotContactForm
      region="na1"
      portalId="44235887"
      formId="b2504fa9-a511-4700-afb1-5e70004d2fb5"/> */}
      <ContactDetails
        cards={[
          {
            title: "Hyderabad",
            description: (
              <>
                <Address>
                  <AddressLine>Smartfalcon LLP,4th Floor,</AddressLine>
                  <AddressLine>THub Phase 2, Plot No 1/C, </AddressLine>
                  <AddressLine>Sy No 83/1,Raidurgam panmaktha,</AddressLine>
                  <AddressLine>Hyderabad Knowledge City, Serilingampally,</AddressLine>
                  <AddressLine>Hyderabad, Telangana - 500 081</AddressLine>
                </Address>
                <Email>contact@smartfalcon.io</Email>
                <Phone>+91 98662 27022</Phone>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};

 
 