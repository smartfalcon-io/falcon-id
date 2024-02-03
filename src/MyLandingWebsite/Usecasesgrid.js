import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {  ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "./components/header/MainHeader";
import Footer from "./components/footer/Fivecolumndark";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-white`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
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
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;


const Container =  styled.div`
${tw`relative -mx-8 -mt-8 bg-center bg-cover `}
background-color: #3c0d99;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23501db5' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%236633cc' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%238563c8' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23a28dca' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23bdb3d0' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23d6d3dd' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23EEE' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");`;



const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div`flex-grow-0`;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "UseCases",
  posts = [
    {
      imageSrc:
        "https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fucgv.png",
      title: "Government",
      description:
        "In civic contexts, Self-Sovereign Identity (SSI) empowers citizens by providing them control over their personal data, enhancing privacy, and enabling secure interactions with government services. This decentralized identity model fosters trust, transparency, and individual autonomy in the digital landscape of citizen-government interactions.",
      url: "/usecases/government",
      featured: false
    },
      {
        imageSrc:
          "https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fuceducationusecase.png",
        title: "Education",
        description:
          "In the realm of higher education, Self-Sovereign Identity (SSI) empowers students with data ownership, fostering transparent academic credentialing, facilitating secure access to services, and streamlining agreements through decentralized digital identities. This enhances trust, data privacy, and efficiency within the dynamic landscape of educational institutions.",
        url: "/usecases/education",
        featured: false
      },
      {
        imageSrc:
          "https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fucfarmerusecase.png",
        title: "Farmer",
        description:
          "Self-Sovereign Identity (SSI) in agriculture empowers farmers with control over their data, enabling transparent supply chains, facilitating access to financial services, and streamlining agreements through secure, decentralized digital identities. This ensures a more resilient and efficient ecosystem for farmers in the modern agricultural landscape.",
        url: "/usecases/farmer",
        featured: false
      },
      {
        imageSrc:
          "https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fuctravelandhospitality.png",
        title: "Travel and Hospitality",
        description:
          "Self-Sovereign Identity (SSI) transforms travel and hospitality by offering secure digital credentials for seamless check-ins, document authenticity, and personalized loyalty programs. It streamlines transactions, enhances travel insurance processes, and prioritizes data privacy. The result is a more secure, efficient, and personalized experience for both travelers and service providers.",
        url: "/usecases/travel",
        featured: false
      },
  ]
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Title>{post.title}</Title>
                    { post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
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
      <Footer />
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com"
});
