import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {  ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";


import i1 from "../../images/Educationusecase/1.svg"
import i2 from "../../images/Educationusecase/2.svg"
import i3 from "../../images/Educationusecase/3.svg"
import i4 from "../../images/Educationusecase/4.svg"
import i5 from "../../images/Educationusecase/5.svg"
import i6 from "../../images/Educationusecase/6.svg"
import i7 from "../../images/Educationusecase/7.svg"

const HeadingRow = tw.div`flex justify-center items-center`;
const Heading = tw(SectionHeading)`text-black`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8 `}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg `;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");
     background-size: contain;
    background-repeat: no-repeat;
    background-position: center;`}
  ${tw`h-64 w-full bg-primary-200 bg-center rounded-t-lg border-t-2 border-r-2 border-l-2`}
`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  ${props => css`background-image: url("${props.backgroundImage}");
     background-color: ${props.backgroundColor}`}
`;


const Info = tw.div`p-8  bg-gray-100 border-2 rounded-lg rounded-t-none h-80 overflow-hidden `;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div`flex-grow-0`;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  posts = [
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
        }
    ],

    background= {
        backgroundColor: "#FFFFFF",
        backgroundImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23a273ff' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%235a13e6' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%239f6eff' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%235412d6' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%239c6aff' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%234e11c7' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%239965ff' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%234810b7' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%239660ff' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23420ea8' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23935bff' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%233c0d99' points='943 900 1210 900 971 687'/%3E%3C/svg%3E"
    }
}) => {
  const [visible, setVisible] = useState(9);
  const onLoadMoreClick = () => {
    setVisible(v => v + 3);
  };
  return (
      <Container backgroundColor={background.backgroundColor} backgroundImage={background.backgroundImage}>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>Features</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                  <Image imageSrc= {post.imageSrc} />
                  <Info>
                    <Title>{post.title}</Title>
                    { post.description && <Description>{post.description}</Description>}
                  </Info>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
  );
};

