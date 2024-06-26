import React ,{useEffect} from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Helmet } from "react-helmet";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "./components/header/MainHeader.js";
import Footer from "./components/footer/Fivecolumndark.js";
import Contactusform from "./components/forms/TrydemoContact";

import ReactGA from "react-ga4";


import { Fragment } from 'react'

const Mainheader = tw(Header)`bg-black`

// const hubspotcontactusform = '<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script><script>  hbspt.forms.create({    region: "na1", portalId: "44235887",   formId: "b2504fa9-a511-4700-afb1-5e70004d2fb5" });</script>';


export default ({
  hubspotformid="4fb13be8-80be-44b9-b61c-a117ee769a13"
}) => {

  useEffect(() =>{
    ReactGA.send({ hitType: "pageview", page: "/getcontact", title: "GetContact Page" })
  },[]);
  return (
    <AnimationRevealPage>
      <Mainheader />
      <Contactusform  hubspotformid={hubspotformid} />
      <Footer />
    </AnimationRevealPage>
  );
};

 
 