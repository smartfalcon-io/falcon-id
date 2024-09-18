import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../../../components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../../../components/misc/Buttons";
import ResponsiveVideoEmbed from "../../../helpers/ResponsiveVideoEmbed.js";
import HubspotContactForm from "../hubspot/Contactform.js";

const Container = tw.div`relative `;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-2/3 flex-shrink-0 md:pt-20  h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const CustomPopUp = tw.div`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50`;
const PopUpContent = tw.div`flex flex-col items-center justify-center bg-white p-8 rounded shadow`;
const ColorButton = tw(PrimaryButtonBase)`bg-[#6415ff] hover:bg-[#6415ff] text-white font-bold py-2 px-4 rounded`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default ({
  subheading = "",
  heading = <>Feel free to<span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
//   description = "For more information about Smartfalcon, get in touch with us and we assure you that all your queries will be taken care of.",
  submitButtonText = "Demo",
  formAction = "https://ssidemo.smartfalcon.io/",
  formMethod = "get",
  textOnLeft = true,
  hubspotformid = "f45d2a3f-b106-41ea-ab40-28926be1590c",
  videourl="https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Ffarmer_usecase.mp4"
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  


  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <StyledResponsiveVideoEmbed
              url={videourl}
              background="transparent"
            />
            <videoPopup/>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {/* <Form action={formAction} method={formMethod} onSubmit={handleSubmit}>
              <Input type="email" name="email" placeholder="Your Email Address" onChange={handleInputChange} />
              <Input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} />
              <Input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleInputChange} />
              <Input type="text" name="companyName" placeholder="Company Name" onChange={handleInputChange} />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form> */}
            <Form>
            <HubspotContactForm
                  region="na1"
                  portalId="44235887"
                  formId= {hubspotformid}/>
            </Form>
            {/* <HubspotContactForm
                  region="na1"
                  portalId="44235887"
                  formId="b2504fa9-a511-4700-afb1-5e70004d2fb5"/> */}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
