import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: lightblue;
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h1`
  color: darkblue;
  margin-bottom: 1rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const NavItem = styled(Link)`
  color: darkblue;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Brutus Builds</Title>
      <Navbar>
        <NavItem to="reviewForm" smooth={true} duration={500}>Review Form</NavItem>
        <NavItem to="reviews" smooth={true} duration={500}>Reviews</NavItem>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
