import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../../../components/misc/Headings.js";
import { ReactComponent as ArrowLeftIcon } from "../../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../../images/svg-decorator-blob-5.svg";
import { Container} from "components/misc/Layouts.js";


import "slick-carousel/slick/slick.css";

// const Container = tw.div`relative `;
const Testcontainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24 w-full `;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-10/12 py-4 flex flex-col justify-between `;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const QuoteName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;


const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-white hover:text-primary-200 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default () => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */
  const testimonials = [
    {
      quotename:"Decentralized Governance",
      quote:
        "Community Engagement: Shape your digital identity with our decentralized governance model, fostering community-driven decisions for heightened ownership.",
    },
    {
      quotename:"Verifiable Credential Ecosystem",
      quote:
        "Portable Credentials: Carry your verifiable credentials effortlessly across platforms, ensuring W3C compliance for seamless integration and universal recognition.",
    },
    {
      quotename:"Immutable Audit Trail",
      quote:
        "Transparent Transactions: Access a secure and transparent audit trail, leveraging blockchain integrity for trustworthy and accountable digital interactions.",
    },
    { 
      quotename:"Biometric Authentication Integration",
      quote:
        "Enhanced Verification: Boost identity security with advanced biometric authentication and multi-factor authentication for authorized access.",
    },
    { 
      quotename:"Cross-Platform Compatibility",
      quote:
        "Adaptive Integration: Seamlessly integrate your identity across platforms for a consistent and secure digital experience, irrespective of the device.",
    },
  ];
  return (
    <Testcontainer>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Discover the Advanced Features</HeadingTitle>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                {/* <ImageContainer>
                  <img src={testimonial.imageSrc} alt={testimonial.customerName} />
                </ImageContainer> */}
                <TextContainer>
                  <QuoteContainer>
                    <QuoteName>{testimonial.quotename}</QuoteName>
                    <Quote>{testimonial.quote}</Quote>
                  </QuoteContainer>
                </TextContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Testcontainer>
  );
};
