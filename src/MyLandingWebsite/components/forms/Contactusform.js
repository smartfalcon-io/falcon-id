import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../../../components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../../../components/misc/Buttons";
import EmailIllustrationSrc from "../../images/Schedule-illustration.svg";
import HubspotContactForm from "../hubspot/Contactform.js";


// const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Container =  styled.div`
${tw`relative -mx-8 -mt-8 bg-center bg-cover `}
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%230082BA' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%2317B8FF' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2316b6fd' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2315b5fc' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2314b3fa' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2313b2f8' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2311b0f7' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2310aff5' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230fadf3' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230dacf2' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%230caaf0' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%230ba9ef' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%2309a7ed' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%2307a6eb' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2306a4ea' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2304a3e8' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%2303a1e6' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%2301a0e5' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23009EE3' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");`;


const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`
const SubmitButton = tw.button`backdrop-blur-3xl backdrop-brightness-75  backdrop-opacity-25 border-black border px-8 py-3 font-bold rounded transition duration-300 bg-primary-500 shadow text-black hocus:bg-primary-500 hocus:text-gray-900`;


export default ({
  subheading = "Contact Us",
  heading = <>Get <span tw="text-white">connect</span><wbr/> with us.</>,
  description = "For more information about Smartfalcon,schedule a meet to get connect with us and we assure you that all your queries will be taken care of.",
  submitButtonText = "Schedule a Meet",
  formAction = "https://calendly.com/contact-falcon/30min",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod}>
              {/* <Input type="email" name="email" placeholder="Your Email Address" />
              <Input type="text" name="name" placeholder="Full Name" />
              <Input type="text" name="subject" placeholder="Subject" />
              <Textarea name="message" placeholder="Your Message Here" /> */}
              <SubmitButton  type="submit">{submitButtonText}</SubmitButton>
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
