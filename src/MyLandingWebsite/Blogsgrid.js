import React, { useState ,useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {  ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "./components/header/MainHeader";
import Footer from "./components/footer/Fivecolumndark";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

import image from "./images/did.png"

const Container =  styled.div`
${tw`relative -mx-8 -mt-8 bg-center bg-cover `}
background-color: #3C0D99;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%233C0D99'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%239e86cc'/%3E%3Cstop offset='1' stop-color='%233C0D99'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`;
;

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full  sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full  sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex  flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 h-64 border-t-0 rounded-lg rounded-t-none `;



const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto bg-black`;

export default ({
  headingText = "Blog Posts",
  posts = [
    {
      imageSrc:"https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Ftts%20main.png",
      category: "Information",
      date: "Dec 21, 2023",
      title: "Empowering Governance: A Deep Dive into the Transformative Realm of Self-Sovereign Identity (SSI)",
      description:
        " In a world where identity is at the crossroads of technology and governance, the advent of Self-Sovereign Identity (SSI) and its inherent principle of decentralized governance promises a paradigm shift.",
      url: "/blogs/gov",
      featured: true
    },{
      imageSrc:"https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fssi.png",
      category: "Technology",
      date: "Dec 24, 2023",
      title: "Unveiling the Future: Understanding Self-Sovereign Identity (SSI)",
      description:
        "In today's digital age, our online presence is like a treasure chest of personal information. But how do we keep this treasure safe? Enter Decentralized Identity (DID) – a superhero in the world of digital identity management. In this guide, we're going to explore what DID is, why it matters for everyone, and how it's changing the game in our online adventures.",
      url: "/blogs/ssi",
      featured: false
    },{
      imageSrc:"https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fdid.png",
      category: "Technology",
      date: "Dec 25, 2023",
      title: "Decentralized Identity (DID): A Blockchain Powered Digital Identity",
      description:
        "In today's digital age, our online presence is like a treasure chest of personal information. But how do we keep this treasure safe? Enter Decentralized Identity (DID) – a superhero in the world of digital identity management. In this guide, we're going to explore what DID is, why it matters for everyone, and how it's changing the game in our online adventures.",
      url: "/blogs/did",
      featured: false
    },{
      imageSrc:"https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Fvc.png",
      category: "Technology",
      date: "Dec 28, 2023",
      title: "Revolutionizing Digital Identity: An In-Depth Exploration of Verifiable Credentials",
      description:
        "In today's digital age, our online presence is like a treasure chest of personal information. But how do we keep this treasure safe? Enter Decentralized Identity (DID) – a superhero in the world of digital identity management. In this guide, we're going to explore what DID is, why it matters for everyone, and how it's changing the game in our online adventures.",
      url: "/blogs/vc",
      featured: false
    }]
  
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 3);
  };
  // const [loading, setLoading] = useState(true); 
  const [blog,setBlog] = useState(null)
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('http://localhost:1337/api/Blogs');
  //       const data = await response.json();
  //       setBlog(data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   }

  //   fetchData(); // <-- Ensure fetchData is only called once
  // }, []); // <-- Provide an empty dependency array to run useEffect only once


  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
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


// posts = [
//   {
//     imageSrc:
//       image,
//     category: "Information",
//     date: "Dec 21, 2023",
//     title: "Decentalized Identity",
//     description:
//       "In today's digital age, our online presence is like a treasure chest of personal information. But how do we keep this treasure safe? Enter Decentralized Identity (DID) – a superhero in the world of digital identity management. In this guide, we're going to explore what DID is, why it matters for everyone, and how it's changing the game in our online adventures.",
//     url: "/blogs/did",
//     featured: true
//   },
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost(),
//   getPlaceholderPost()
// ]

// to make use of cms use this
// <Posts>
// {posts.data.slice(0, visible).map((blogItem) => (
//   <PostContainer key={blogItem.id} featured={blogItem.attributes.featured}>
//     <Post className="group" as="a" href={blogItem.attributes.url}>
//       <Image imageSrc={blogItem.attributes.imageSrc} />
//       <Info>
//         <Category>{blogItem.attributes.category}</Category>
//         <CreationDate>{blogItem.attributes.date}</CreationDate>
//         <Title>{blogItem.attributes.title}</Title>
//         {blogItem.attributes.featured && blogItem.attributes.description && <Description>{blogItem.attributes.description}</Description>}
//       </Info>
//     </Post>
//   </PostContainer>
// ))}
// </Posts>
// {visible < blog.data.length && (
//   <ButtonContainer>
//     <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
//   </ButtonContainer>
// )}