import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

const Description = styled.p`
  margin: 10px 0 0;
  font-size: 1.2em;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Weather Dashboard</Title>
    <Description>Interactive visualizations of current weather data</Description>
  </HeaderContainer>
);

export default Header;
