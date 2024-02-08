// screens/HomeScreen.js

import React from 'react';
import styled from 'styled-components/native';

const MyScreen = () => {
  return (
    <Container>
      <Text>Welcome to the My Screen!</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
`;

export default MyScreen;