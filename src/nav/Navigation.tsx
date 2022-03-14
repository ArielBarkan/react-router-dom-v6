import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  padding: 20px 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background-color: pink;
  font-size: 5vh;
`;

function Navigation() {
  return (
    <StyledNavigation>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </StyledNavigation>
  );
}

export default Navigation;
