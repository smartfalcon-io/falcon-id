import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "../components/header/MainHeader";
import Footer from "../components/footer/Fivecolumndark";
import Feature1 from "../components/features/Feature1";
import TrydemoContact from "../components/forms/TrydemoContact";
import UsecaseFeature from "MyLandingWebsite/components/features/UsecaseFeature";

import i1 from "../images/Government/1.svg"
import i2 from "../images/Government/2.svg"
import i3 from "../images/Government/3.svg"
import i4 from "../images/Government/4.svg"
import i5 from "../images/Government/5.svg"
import i6 from "../images/Government/6.svg"
import i7 from "../images/Government/7.svg"
import i8 from "../images/Government/8.svg"
import i9 from "../images/Government/9.svg"


export default () => {
  const  Customposts = [
      {
          "title": "Secure and Trustworthy Government ID:",
          "description": "Keeping Your ID Safe: SSI ensures the security of your ID, reducing the risk of forgery. It's like having a digital ID that can be easily verified for all your government documents.",
          "featured": false,
          "imageSrc": i1
      },
      {
          "title": "Give Citizens Control with Decentralized Identity:",
          "description": "Your Data, Your Choice: SSI empowers citizens by giving them control over their data. It's like having a key to your government credentials, keeping things private unless you decide to share.",
          "featured": false,
          "imageSrc": i2
      },
      {
          "title": "Effortless Public Services with Transparency:",
          "description": "Less Hassle, More Efficiency: SSI streamlines government services, reducing paperwork and making interactions more transparent. It leads to efficient public services and an improved experience for citizens.",
          "featured": false,
          "imageSrc": i3
      },
      {
          "title": "Unalterable Record of Government Transactions:",
          "description": "Trustworthy Government History: SSI provides an unalterable record of government transactions. Think of it as a trustworthy history log that promotes accountability and integrity in your interactions with public services.",
          "featured": false,
          "imageSrc": i4
      },
      {
          "title": "Decentralized Governance for Community Involvement:",
          "description": "Everyone Has a Say: SSI encourages decentralized governance, involving communities in shaping identity and public service standards. This adds transparency and community involvement to the process.",
          "featured": false,
          "imageSrc": i5
      },
      {
          "title": "Enhanced Online Security for Citizens:",
          "description": "Secure Online Identity: SSI strengthens online security for citizens, providing them with secure digital identities. This reduces the risk of fraud and ensures trust in online government transactions.",
          "featured": false,
          "imageSrc": i6
      },
      {
          "title": "Seamless Integration of Verifiable Credentials:",
          "description": "Credentials Made Easy: SSI ensures seamless integration of verifiable credentials across platforms. It ensures that your credentials are universally recognized and compliant with industry standards.",
          "featured": false,
          "imageSrc": i7
      },
      {
          "title": "Adaptable Government Interoperability:",
          "description": "Easy Identity Across Platforms: SSI offers adaptable solutions for seamless citizen identity across different digital government platforms. It ensures a consistent and secure digital experience for citizens.",
          "featured": false,
          "imageSrc": i8
      },
      {
          "title": "Take Your Credentials Anywhere for Civic Engagement:",
          "description": "Your Civic Credentials, Anytime: SSI enables portable credentials, allowing citizens to carry verifiable government credentials effortlessly. It makes interactions across various civic contexts more efficient.",
          "featured": false,
          "imageSrc": i9
      }
  
];

const customBackground = {
  backgroundColor: "#3c0d99",
  backgroundImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%235732b5'/%3E%3Cstop offset='1' stop-color='%238f62ec'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%23868686'/%3E%3Cstop offset='0.09' stop-color='%23ababab'/%3E%3Cstop offset='0.18' stop-color='%23c4c4c4'/%3E%3Cstop offset='0.31' stop-color='%23d7d7d7'/%3E%3Cstop offset='0.44' stop-color='%23e5e5e5'/%3E%3Cstop offset='0.59' stop-color='%23f1f1f1'/%3E%3Cstop offset='0.75' stop-color='%23f9f9f9'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='.5' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E",
};
  return (
    <AnimationRevealPage>
      <Header />
      <Feature1
        subheading="Usecase"
        heading="The Self-Sovereign Identity  Revolution in Citizen Empowerment"
        description="In civic contexts, Self-Sovereign Identity (SSI) revolutionizes the relationship between citizens and government by empowering individuals with control over their personal data. This decentralized identity model not only enhances privacy but also enables secure and efficient interactions with various government services. Here's a detailed exploration of the use case:"
        imageSrc="https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fucgv.png"
      />
      <UsecaseFeature posts={Customposts} background={customBackground}/>
      <TrydemoContact/>
      <Footer />
    </AnimationRevealPage>
  );
};

