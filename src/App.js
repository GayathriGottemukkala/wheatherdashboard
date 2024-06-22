import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ChartContainer from './components/ChartContainer';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
`;

const App = () => (
  <AppContainer>
    <Header />
    <ChartContainer />
  </AppContainer>
);

export default App;
