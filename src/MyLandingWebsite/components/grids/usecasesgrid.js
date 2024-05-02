import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

import farmerimage from "../../images/farmerusecase.png"
import travelimage from "../../images/travelandhospitality.png"
import eduimage from "../../images/educationusecase.png"
import citizenusecase from "../../images/citizenusecase.png"

const Container = tw.div`relative`;
// const Container =  styled.div`
// ${tw`relative -mx-8 -mt-8 bg-center bg-cover `}
// background-color: #3C0D99;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%233C0D99' cx='50' cy='0' r='50'/%3E%3Cg fill='%2341149e' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%234719a3' cx='50' cy='100' r='50'/%3E%3Cg fill='%234c1fa8' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%235124ad' cx='50' cy='200' r='50'/%3E%3Cg fill='%235729b2' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%235c2eb7' cx='50' cy='300' r='50'/%3E%3Cg fill='%236133bc' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%236638c1' cx='50' cy='400' r='50'/%3E%3Cg fill='%236b3dc6' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%237042cb' cx='50' cy='500' r='50'/%3E%3Cg fill='%237547d0' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%237a4cd5' cx='50' cy='600' r='50'/%3E%3Cg fill='%237f50da' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%238455e0' cx='50' cy='700' r='50'/%3E%3Cg fill='%23895ae5' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%238e5fea' cx='50' cy='800' r='50'/%3E%3Cg fill='%239364ef' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%239869f4' cx='50' cy='900' r='50'/%3E%3Cg fill='%239d6efa' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23A273FF' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");`;



const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;


const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;


const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;

const Link = styled(PrimaryButton).attrs({as: "a"})`
`

export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };


  const cards=[
    {
         imageSrc: farmerimage ,
         title: "Farmer",
         description: "Self-Sovereign Identity (SSI) in agriculture empowers farmers with control over their data, enabling transparent supply chains, facilitating access to financial services, and streamlining agreements through secure, decentralized digital identities. This ensures a more resilient and efficient ecosystem for farmers in the modern agricultural landscape.",
         link: "/falcon-id/usecases/farmer"
    },
    {
        imageSrc: eduimage,
         title: "Education",
         description: "In the realm of higher education, Self-Sovereign Identity (SSI) empowers students with data ownership, fostering transparent academic credentialing, facilitating secure access to services, and streamlining agreements through decentralized digital identities. This enhances trust, data privacy, and efficiency within the dynamic landscape of educational institutions.",
         link: "/falcon-id/usecases/education"
    },
    {
        imageSrc: travelimage,
         title: "Travel and Hospitality",
         description: "Self-Sovereign Identity (SSI) transforms travel and hospitality by offering secure digital credentials for seamless check-ins, document authenticity, and personalized loyalty programs. It streamlines transactions, enhances travel insurance processes, and prioritizes data privacy. The result is a more secure, efficient, and personalized experience for both travelers and service providers.",
         link: "/falcon-id/usecases/travel"
    },
    {
        imageSrc: citizenusecase,
         title: "Government",
         description: "In civic contexts, Self-Sovereign Identity (SSI) empowers citizens by providing them control over their personal data, enhancing privacy, and enabling secure interactions with government services. This decentralized identity model fosters trust, transparency, and individual autonomy in the digital landscape of citizen-government interactions.",
         link: "/falcon-id/usecases/education"
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>UseCases</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <Link href={card.link}>Know More</Link>
              {/* <PrimaryButton><a href={card.link}>Know More</a></PrimaryButton> */}
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
