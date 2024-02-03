import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../../../components/misc/Headings.js";
// import { Container} from "components/misc/Layouts.js";


// const MainContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100 `;

const Container =  styled.div`
${tw`relative -mx-8 -mt-8 bg-center bg-cover `}
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23A273FF' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23A273FF'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingTitles = tw(HeadingTitle)`text-black`
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-black text-center max-w-sm`;

const Content = tw.div`mt-16 `;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center  items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-2xl mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-black`;
const Description = tw.p`mt-2 text-lg leading-loose text-black`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc: "https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Ftts1104(1)(1).png",
      title: "Self-Sovereign Identity (SSI)",
      description: "Embark on a transformative journey into the forefront of the digital identity era with SmartFalcon's cutting-edge Self-Sovereign Identity (SSI) solutions. Representing a revolutionary shift, SSI prioritizes user control, privacy, and security, bidding farewell to the limitations of centralized systems. Users actively manage their digital identities, ensuring an unprecedented level of autonomy in the vast online landscape.SmartFalcon's SSI solutions redefine the digital experience, enhancing privacy and security. Say goodbye to vulnerabilities associated with centralized databases as individuals gain unparalleled control over how their data is shared and accessed. This user-centric paradigm ensures a heightened sense of security, fostering trust in an interconnected world.As we usher in a new age of autonomy, SmartFalocn's commitment to pioneering SSI technology becomes evident. The emphasis on user control and transparency signifies a transformative journey toward a more secure and privacy-centric digital future. Seamlessly navigate the online landscape with confidence, streamlining digital interactions across platforms.SmartFalcon's SSI solutions not only empower users to own their digital identities but actively participate in their governance. This commitment to self-sovereignty sets the stage for a future where individuals shape their online personas securely. Embrace the revolution; choose Smart for a user-friendly, secure, and privacy-centric digital identity experience."
    },    

    {
      imageSrc:
        "https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Ftts2105(1)(1).png",
      title: "Decentralized Identifiers (DID)",
      description:
        "At the core of SmartFalcon's digital identity solutions are Decentralized Identifiers (DIDs), unique and secure identifiers anchored in blockchain technology. These DIDs provide a tamper-proof representation of identity, addressing key challenges in the digital landscape. SmartFalcon stands out by offering a range of DID methodologies, ensuring flexibility and interoperability for seamless integration with existing systems.DIDs empower users with portable, privacy-preserving identities, mitigating the risks associated with centralized databases. Unlike traditional systems, DIDs enable individuals to selectively share necessary information, enhancing privacy and reducing the threat of identity theft. SmartFalcon envisions a future where DIDs serve as the foundation for a more secure and user-friendly digital experience, instilling trust in online interactions and contributing to a robust and reliable online environment.In this rapidly evolving digital era, the importance of secure digital identities is paramount. SmartFalcon's commitment to DIDs reflects our dedication to shaping this future, where individuals have greater control over their personal data, and organizations benefit from enhanced security and interoperability. Our innovative approach positions us at the forefront of digital identity solutions, paving the way for a more resilient and trustworthy digital landscape.",
    },

    {
      imageSrc:
        "https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2Ftts3102(1)(1).png",
      title: " Identity Blockchain",
      description:
        "Discover the cutting-edge realm of identity protection with SmartFalcon's Identity Blockchain Solutions. Our innovative approach harnesses the power of blockchain, providing a secure and transparent environment for digital identities. Embracing the immutability of blockchain technology, our solutions are designed to fortify digital identities, establishing an unparalleled defense against fraud and unauthorized access.martFalcon's Identity Blockchain Solutions redefine trust in digital interactions by ensuring transactional integrity and robust data protection. With a commitment to setting new standards in security, our blockchain technology creates a resilient foundation for the future of digital identity. Explore how SmartFalcon seamlessly integrates the latest advancements in blockchain to deliver a trustworthy and tamper-proof framework.Experience a heightened level of security and transparency that goes beyond conventional measures. SmartFalcon invites you to unlock the potential of identity blockchain, safeguarding your digital interactions with a foundation built on trust and innovation. Trust SmartFalcon to lead the way in reshaping the landscape of digital identity protection.",
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitles>Technology Stack</HeadingTitles>
          <HeadingDescription>
            Empowering Digital Futures: SSI, DIDs, and Identity Blockchain Solutions.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
