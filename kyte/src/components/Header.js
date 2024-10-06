import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaUser, FaCog } from 'react-icons/fa';

// Styled Components
const HeaderWrapper = styled.header`
  background-color: #1a1a1a; // Dark theme color
  padding: 10px 0;
  color: white;
  text-align: center;
`;

const Logo = styled.h1`
  font-family: 'Gaglin', sans-serif; // Gaglin font
  font-size: 36px; // Larger font size for h1
  color: #4caf50; // Green accent color
  margin: 0; // Remove default margin
  padding: 20px 0; // Add some padding around the logo
  background-color: #121212; // Optional: Add a background for better separation
`;

const NavWrapper = styled.nav`
  background-color: #1a1a1a; // Dark theme color
  padding: 10px 0;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
  
  a {
    color: #4caf50; // Green accent color
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  svg {
    margin-left: 15px;
    cursor: pointer;

    &:hover {
      color: #4caf50; // Green accent color on hover
    }
  }
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Logo>KYTE</Logo>
      <HeaderWrapper>
        <NavWrapper>
          <NavList>
            <NavItem><a href="/">Trending</a></NavItem>
            <NavItem><a href="/mods">Mods</a></NavItem>
            <NavItem><a href="/textures">Textures</a></NavItem>
            <NavItem><a href="/skin-packs">Skin Packs</a></NavItem>
            <NavItem><a href="/maps">Maps</a></NavItem>
            <NavItem><a href="/blogs">Blogs</a></NavItem>
          </NavList>
          <IconGroup>
            <FaShoppingCart />
            <FaUser />
            <FaCog />
          </IconGroup>
        </NavWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
