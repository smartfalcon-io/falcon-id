import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "./BasicHeader.js";


const StyledHeader = styled(Header)`
  ${tw`pt-1 max-w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-black hover:border-primary-300 hover:text-primary-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-black hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8  bg-center bg-cover `}
  background-image: url("https://axanljry1b0i.objectstorage.ap-hyderabad-1.oci.customer-oci.com/n/axanljry1b0i/b/ssi-demo/o/LandingWedsite%2FWebsite%2F3(1).png");
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">
        Home
      </NavLink>
      <NavLink href="/technology">
        Technology
      </NavLink>
      <NavLink href="/blogs">
        Blogs
      </NavLink>
      <NavLink href="/usecases">
        Usecases
      </NavLink>
      <NavLink href="/contactus">
        ContactUs
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      {/* <PrimaryLink href="/trydemo"> */}
      {/*   Try Demo */}
      {/* </PrimaryLink> */}
    </NavLinks>
  ];

  return (
    <Container>
         <StyledHeader links={navLinks} />
    </Container>
  );
};
