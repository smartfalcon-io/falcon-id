import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "../components/header/MainHeader";
import Footer from "../components/footer/Fivecolumndark";
import Feature1 from "../components/features/Feature1";
import TrydemoContact from "../components/forms/TrydemoContact";
import UsecaseFeature from "MyLandingWebsite/components/features/UsecaseFeature";


import i1 from "../images/Travel/1.svg"
import i2 from "../images/Travel/2.svg"
import i3 from "../images/Travel/3.svg"
import i4 from "../images/Travel/4.svg"
import i5 from "../images/Travel/5.svg"
import i6 from "../images/Travel/6.svg"
import i7 from "../images/Travel/7.svg"
import i8 from "../images/Travel/8.svg"
import i9 from "../images/Travel/9.svg"

import ReactGA from "react-ga4";
import { useEffect } from "react";


export default () => {
  const  Customposts = [
    {
      title: "Secure Digital Credentials for Seamless Check-ins:",
      description:
        "With SSI, travelers can seamlessly check in using verifiable digital credentials, reducing the reliance on physical documents and enhancing the security of the overall process.",
      featured: false,
      "imageSrc": i1
    },
  {
      title: "Enhanced Document Authenticity:",
      description:
        "By providing travelers with verifiable digital credentials, SSI significantly reduces the risk of document forgery, ensuring the legitimacy of crucial travel documents.",
      featured: false,
      "imageSrc": i2
  },
  {
      title: "Personalized Loyalty Programs:",
      description:
        "Travelers can enjoy more personalized and targeted loyalty benefits as SSI allows for secure management and sharing of loyalty credentials without compromising privacy.",
      featured: false,
      "imageSrc": i3
  },
  {
      title: "Streamlined Transactions for Efficiency:",
      description:
        "The adoption of SSI leads to more streamlined and efficient transactions, eliminating unnecessary paperwork and enhancing the overall efficiency of travel-related processes.",
      featured: false,
      "imageSrc": i4
  },
  {
      title: "Efficient Travel Insurance Processes:",
      description:
        "Travelers benefit from a smoother and faster insurance experience as SSI facilitates secure and verifiable management of travel insurance credentials.",
      featured: false,
      "imageSrc": i5
  },
  {
      title: "Priority on Data Privacy:",
      description:
        "Travelers can selectively share data, ensuring a heightened level of privacy and aligning with evolving data protection regulations and expectations.",
      featured: false,
      "imageSrc": i6
  },
  {
      title: "Heightened Security and Efficiency:",
      description:
        "With cutting-edge cryptographic measures, SSI ensures a secure digital environment, boosting confidence in the authenticity of services and transactions, ultimately leading to a more trustworthy digital landscape.",
      featured: false,
      "imageSrc": i7
  },
  {
    title: "Seamless Contactless Payments:",
    description:
      " SSI enables secure, contactless payments in travel, linking digital wallets to identities for frictionless transactions. Enhance traveler convenience, reduce reliance on physical currency, and ensure a modern payment experience.",
    featured: false,
    "imageSrc": i8
  },
  {
    title: "Digital Health Passports for Safe Travel:",
    description:
      "SSI integrates digital health passports, securely storing and sharing health credentials. Streamline safety compliance, verify health status at travel venues, and contribute to a responsible travel environment.",
    featured: false,
    "imageSrc": i9
  },
];

const hubspotformid = "f45d2a3f-b106-41ea-ab40-28926be1590c"

const customBackground = {
  backgroundColor: "#009EE3",
  backgroundImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E",
};

useEffect(() =>{
  ReactGA.send({ hitType: "pageview", page: "/usecases/travel", title: "Travel Usecase" })
},[]);
  return (
    <AnimationRevealPage>
      <Header />
      <Feature1
        subheading="Usecase"
        heading=" Transforming Travel and Hospitality with Self-Sovereign Identity"
        description="Embark on a groundbreaking journey into the future of travel and hospitality, where Self-Sovereign Identity (SSI) takes center stage, redefining the very essence of how we explore the world. In this era of digital empowerment, SSI emerges as the catalyst, ushering in a new age of secure, seamless, and personalized travel experiences. Here's a detailed exploration of how SSI transforms various aspects of the industry:"
        imageSrc="https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fuctravelandhospitality.png"
      />
      <UsecaseFeature posts={Customposts} background={customBackground}/>
      <TrydemoContact hubspotformid={hubspotformid}/>
      <Footer />
    </AnimationRevealPage>
  );
};

