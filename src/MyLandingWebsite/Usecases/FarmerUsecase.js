import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "../components/header/MainHeader";
import Footer from "../components/footer/Fivecolumndark";
import Feature1 from "../components/features/Feature1";
import TrydemoContact from "../components/forms/TrydemoContact";
import UsecaseFeature from "MyLandingWebsite/components/features/UsecaseFeature";

import i1 from "../images/Farmerusecase/1.svg";
import i2 from "../images/Farmerusecase/2.svg";
import i3 from "../images/Farmerusecase/3.svg";
import i4 from "../images/Farmerusecase/4.svg";
import i5 from "../images/Farmerusecase/5.svg";
import i6 from "../images/Farmerusecase/6.svg";
import i7 from "../images/Farmerusecase/7.svg";
import i8 from "../images/Farmerusecase/8.svg";
import i9 from "../images/Farmerusecase/9.svg";

import ReactGA from "react-ga4";
import { useEffect } from "react";


export default () => {
  const  Customposts = [
      {
          "title": "Secure Farming Records:",
          "description": "Keeping Your Crop Info Safe: Using SSI ensures that your crop records are secure. It helps reduce the risk of fake documents by providing farmers with digital credentials that can be easily verified.",
          "featured": false,
          "imageSrc": i1
      },
      {
          "title": "Give Farmers Control with Decentralized Identity:",
          "description": "Your Data, Your Rules: SSI empowers farmers with decentralized identity, giving them control over their data. It's like having your own key to your agricultural information, keeping things private unless you choose to share.",
          "featured": false,
          "imageSrc": i2
      },
      {
          "title": "Streamlining Farming with Less Paperwork:",
          "description": "Less Paper, More Farming: SSI simplifies processes, meaning less paperwork and more straightforward interactions. It leads to efficient farming operations and a better overall experience for farmers.",
          "featured": false,
          "imageSrc": i3
      },
      {
          "title": "Seamless Credential Integration for Farmers:",
          "description": "Credentials Made Easy: SSI makes it easy for farmers to present and share their credentials. It ensures that these credentials are universally recognized and compliant with agricultural regulations.",
          "featured": false,
          "imageSrc": i4
      },
      {
          "title": "Decentralized Farming Rules with SSI:",
          "description": "Everyone Has a Say: SSI promotes decentralized governance, involving the farming community in setting identity and agricultural standards. This adds transparency and community involvement to the mix.",
          "featured": false,
          "imageSrc": i5
      },
      {
          "title": "Boosted Online Security for Farmers:",
          "description": "Secure Farming Online: SSI strengthens online security for farmers, providing them with secure digital identities. This reduces the risk of fraud and ensures trust in online agricultural transactions.",
          "featured": false,
          "imageSrc": i6
      },
      {
          "title": "Adaptable Solutions for Easy Farmer Identity:",
          "description": "Easy Identity Across Platforms: SSI offers adaptable solutions for seamless farmer identity across different digital platforms in agriculture. It ensures a consistent and secure digital experience for farmers.",
          "featured": false,
          "imageSrc": i7
      },
      {
          "title": "Audit Trail You Can Trust for Farming Transactions:",
          "description": "Tracking Your Farming History: SSI provides an unalterable audit trail for farming transactions. It's like a trustworthy history log that promotes accountability and integrity in your interactions with agricultural services.",
          "featured": false,
          "imageSrc": i8
      },
      {
          "title": "Credentials You Can Take Anywhere in Farming:",
          "description": "Your Farming Credentials, Anytime: SSI enables portable credentials for farmers. It allows them to carry verifiable agricultural credentials effortlessly, making interactions throughout their farming journey more efficient.",
          "featured": false,
          "imageSrc": i9
      },
  
];

const hubspotformid = "f45d2a3f-b106-41ea-ab40-28926be1590c"

const customBackground = {
  backgroundColor: "#3C0D99",
  backgroundImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='46' height='46' fill-opacity='0.6' fill='%23A273FF'/%3E%3C/svg%3E",
};

useEffect(() =>{
  ReactGA.send({ hitType: "pageview", page: "/usecases/farmer", title: "Farmern Usecase" })
},[]);

  return (
    <AnimationRevealPage>
      <Header />
      <Feature1
        subheading="Usecase"
        heading="Transforming Agriculture: Empowering Farmers with Self-Sovereign Identity"
        description="Self-Sovereign Identity (SSI) in agriculture empowers farmers with control over their data, enabling transparent supply chains, facilitating access to financial services, and streamlining agreements through secure, decentralized digital identities. This ensures a more resilient and efficient ecosystem for farmers in the modern agricultural landscape. Here's a detailed exploration of the use case:"
        imageSrc="https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fucfarmerusecase.png"
      />
      <UsecaseFeature posts ={Customposts} background={customBackground}/>
      <TrydemoContact hubspotformid={hubspotformid}/>
      <Footer />
    </AnimationRevealPage>
  );
};

