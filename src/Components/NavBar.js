import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SectionContainer, SectionTitle, SectionText, SectionLink } from './Styles/globalStyle';

// Styled Components for Navbar
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px; /* Space between links */
  background-color: #0b0b0d;
  padding: 10px;
  color: white;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;

  &:hover {
    background-color: #555;
    border-radius: 5px;
  }
`;


const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">My Work</NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
    </Nav>
  );
}

export default NavBar;
