import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "../components/header/MainHeader";
import Footer from "../components/footer/Fivecolumndark";
import Feature1 from "../components/features/Feature1";
import TrydemoContact from "../components/forms/TrydemoContact";


import i1 from "../images/Educationusecase/1.svg"
import i2 from "../images/Educationusecase/2.svg"
import i3 from "../images/Educationusecase/3.svg"
import i4 from "../images/Educationusecase/4.svg"
import i5 from "../images/Educationusecase/5.svg"
import i6 from "../images/Educationusecase/6.svg"
import i7 from "../images/Educationusecase/7.svg"
import i8 from "../images/Educationusecase/8.svg"
import i9 from "../images/Educationusecase/9.svg"
import UsecaseFeature from "MyLandingWebsite/components/features/UsecaseFeature";

import ReactGA from "react-ga4";
import { useEffect } from "react";

export default () => {
   const customposts = [
    {
        "title": "Empower Your Academic Data Management:",
        "description": "Control and Privacy at Your Fingertips: Students now wield unprecedented influence over the dissemination of their academic records and personal information, ensuring a heightened sense of ownership and privacy.",
        "featured": false,
        "imageSrc": i1
    },
    {
        "title": "Enhance Legitimacy with Digital Academic Credentials:",
        "description": "Credible Achievements, Digitally Verified: Academic accomplishments undergo a transformation into secure digital credentials, significantly reducing the susceptibility to fraudulent claims and bolstering overall transparency and credibility.",
        "featured": false,
        "imageSrc": i2
    },
    {
        "title": "Secure and Streamlined Access to Educational Resources:",
        "description": "Elevating Educational Access Security: Leveraging Self-Sovereign Identity (SSI), students can confidently access institutional resources such as libraries and laboratories through a secure framework, guaranteeing data integrity and optimizing the educational experience.",
        "featured": false,
        "imageSrc": i3
    },
    {
        "title": "Efficiency through Decentralized Identities:",
        "description": "Optimizing Administrative Processes: Administrative complexities related to enrollment, document submissions, and agreements are streamlined through the implementation of decentralized digital identities, fostering operational efficiency and alleviating administrative burdens.",
        "featured": false,
        "imageSrc": i4
    },
    {
        "title": "Cultivate Trust in Educational Institutions:",
        "description": "Ensuring Academic Transaction Integrity: All stakeholders—students, educators, and institutions—can repose trust in the reliability of academic records and transactions, thereby establishing a foundation for a more dependable and trustworthy educational ecosystem.",
        "featured": false,
        "imageSrc": i5
    },
    {
        "title": "Selective Information Sharing for Robust Data Privacy:",
        "description": "Adherence to Data Protection Norms: Students exercise discernment in selectively sharing pertinent information, aligning with evolving data protection regulations. This proactive approach ensures an environment that prioritizes privacy and security.",
        "featured": false,
        "imageSrc": i6
    },
    {
        "title": "Seamless Educational Processes with SSI:",
        "description": "Enhancing Operational Fluidity: The integration of Self-Sovereign Identity  translates into heightened efficiency across key educational processes, encompassing enrollment, verification, and communication, culminating in a seamless and user-centric educational journey for both students and educators.",
        "featured": false,
        "imageSrc": i7
    },
    {
      "title": "Real-time Academic Achievements Updates:",
      "description": "SSI enables instant, secure updates of academic achievements, ensuring real-time access for students and stakeholders. Enhance transparency, communication, and recognition within the educational ecosystem.",
      "featured": false,
      "imageSrc": i8
    },
    {
      "title": "Automated Graduation Processes:",
      "description": "Streamline graduation procedures with SSI, automating degree verification, certificate issuance, and alumni records. Improve administrative efficiency, reduce manual workload, and provide graduates with quick, reliable credentials.",
      "featured": false,
      "imageSrc": i9
    }
];

const hubspotformid = "f45d2a3f-b106-41ea-ab40-28926be1590c"

const customBackground = {
  backgroundColor: "#FFFFFF",
  backgroundImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%2317b8ff' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23009ee3' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%2313b7ff' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23009bdf' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%2310b6ff' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%230098db' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%230bb4ff' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%230096d7' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%2307b3ff' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%230093d3' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%2303b2ff' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%230090cf' points='943 900 1210 900 971 687'/%3E%3C/svg%3E",
};
useEffect(() =>{
  ReactGA.send({ hitType: "pageview", page: "/usecases/education", title: "Education Usecase" })
},[]);
  return (
    <AnimationRevealPage>
      <Header />
      <Feature1
        subheading="Usecase"
        heading="Empowering Higher Education with Self-Sovereign Identity"
        description="In higher education, Self-Sovereign Identity (SSI) emerges as a transformative force, granting students control over their data. This innovation fosters transparent academic credentialing, secures access to services, and simplifies agreements through decentralized digital identities. Here's a detailed exploration of how SSI empowers the educational landscape:"
        imageSrc="https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fuceducationusecase.png"
      />
      <UsecaseFeature posts={customposts} background={customBackground}/>
      <TrydemoContact hubspotformid={hubspotformid}/>
      <Footer />
    </AnimationRevealPage>
  );
};

