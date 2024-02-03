import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import image from "../../images/Educationusecase/1.svg"

const Container = styled.div`
  ${tw`relative -mx-8 mt-8 bg-center bg-cover h-full min-h-144 flex flex-col justify-center items-center`};
`;

const InsideContainer = styled.div`
  ${tw`relative  bg-center bg-cover w-3/4 flex flex-col justify-center items-center`};
  ${(props) => css`
    background-image: url("${props.backgroundImage}");
    background-color: url("${props.backgroundColor}");
  `}
`;

const IllustrationContainer = tw.div`flex justify-center items-center`;

const ContextContainer = styled.div`
  ${tw`relative w-5/6 sm:w-9/12 lg:w-1/2 md:w-5/6`};
`;

const TextContent = tw.div`text-center`;

// const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-15`;

// const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-40 flex flex-col`;
// const Content = styled.div`
//   ${tw`px-4 flex flex-col justify-center items-center h-full`};
// `;

// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const TextHeading = tw(
  SectionHeading
)`mt-4 font-black text-left text-2xl sm:text-xl lg:text-3xl text-center md:text-left leading-tight text-black`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TextSubHeading = tw(
  SectionHeading
)`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-black`;

const Link = tw.a`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-primary-100 underline`

const Heading = styled.h1`
  ${tw`text-2xl text-center sm:text-3xl lg:text-4xl xl:text-5xl w-3/4 font-black text-black leading-snug`};
  span {
    ${tw`inline-block mt-2`};
  }
`;

// const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

export default ({
  dynamic = {
    title: [],
    backgroundColor: "#FFFFFF",
    backgroundImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23333333' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23666666' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23999999' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23cccccc' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23FFFFFF' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E",
    image: image,
    subhead1: "subheading 1",
    desc1: [
      "para1",
      "para2"
    ],
    subhead2:"subheading 2",
    desc2:[
      "para1",
      "para2"
    ],
    subhead3: "subheading3",
    desc3:[
      "para1",
      "para2"
    ],
    subhead4:" Faq",
    desc4:[
      {
        q:"Q1?",
        a:"answer"
      },
      {
        q:"Q2?",
        a:"answer"
      },
      {
        q:"Q3?",
        a:"answer"
      }
    ],
    subhead5:"Conclusion",
    desc5:[
      "para1",
      "para2",
      {
      beforelink:"text before link ",  
      linkword:"link name",
      link:"link href",
      afterlink:"text after link"
      }
    ]

 },
}) => {
  return (
    <Container>
      <InsideContainer backgroundImage={dynamic.backgroundImage}>
      <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={dynamic.image} alt="Design Illustration" />
      </IllustrationContainer>
      </InsideContainer>
      {dynamic.title.map((line,index)=>(<Heading key={index}>{line}</Heading>))}
      <ContextContainer>
        <TextContent>
          <TextHeading>{dynamic.subhead1}</TextHeading>
          {dynamic.desc1.map((paragraphs,index)=>(<Description key={index}>{typeof paragraphs === 'object' ? (<>{paragraphs.afterlink && paragraphs.beforelink && paragraphs.link && paragraphs.linkword &&(<p>{paragraphs.beforelink}<Link href={paragraphs.link}>{paragraphs.linkword}</Link>{paragraphs.afterlink}</p>)}</>):(<><p>{paragraphs}</p></>)} </Description>))}
          <TextHeading>{dynamic.subhead2}</TextHeading>
          {dynamic.desc2.map((paragraphs,index)=>(<Description key={index}>{typeof paragraphs === 'object' ? (<>{paragraphs.afterlink && paragraphs.beforelink && paragraphs.link && paragraphs.linkword &&(<p>{paragraphs.beforelink}<Link href={paragraphs.link}>{paragraphs.linkword}</Link>{paragraphs.afterlink}</p>)}</>):(<><p>{paragraphs}</p></>)} </Description>))}
          <TextHeading>{dynamic.subhead3}</TextHeading>
          {dynamic.desc3.map((paragraphs,index)=>(<Description key={index}>{typeof paragraphs === 'object' ? (<>{paragraphs.afterlink && paragraphs.beforelink && paragraphs.link && paragraphs.linkword &&(<p>{paragraphs.beforelink}<Link href={paragraphs.link}>{paragraphs.linkword}</Link>{paragraphs.afterlink}</p>)}</>):(<><p>{paragraphs}</p></>)} </Description>))}
          <TextHeading>{dynamic.subhead4}</TextHeading>
          {dynamic.desc4.map((faq,index)=>(<Description key={index}><TextSubHeading>{faq.q}</TextSubHeading>{faq.a}</Description>))}
          <TextHeading>{dynamic.subhead5}</TextHeading>
          {/* {dynamic.desc5.map((paragraph,index)=>(<Description key={index}>{paragraph}</Description>))} */}
          {dynamic.desc5.map((paragraphs,index)=>(<Description key={index}>{typeof paragraphs === 'object' ? (<>{paragraphs.afterlink && paragraphs.beforelink && paragraphs.link && paragraphs.linkword &&(<p>{paragraphs.beforelink}<Link href={paragraphs.link}>{paragraphs.linkword}</Link>{paragraphs.afterlink}</p>)}</>):(<><p>{paragraphs}</p></>)} </Description>))}
        </TextContent>
      </ContextContainer>
    </Container>
  );
};
