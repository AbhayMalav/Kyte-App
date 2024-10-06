import React from 'react';
import styled from 'styled-components';

// Styled Components
const HomeWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <h2>Welcome to Kyte Marketplace</h2>
      <p>Explore the best Minecraft PE mods!</p>
    </HomeWrapper>
  );
};

export default Home;
