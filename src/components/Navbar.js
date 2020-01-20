import React from "react";
import styled from "styled-components";

const Navbar = () => (
  <NavBanner>
    <Text>FLEXY LOADING COMPONENT</Text>
  </NavBanner>
);

const NavBanner = styled.div`
  padding: 5%;
  background: #4fadb5;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
`;

const Text = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  color: white;
`;

export default Navbar;
