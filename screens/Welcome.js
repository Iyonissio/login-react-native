import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//colors
import { Avatar, WelcomeContainer, WelcomeImage } from './../components/styles';

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
} from './../components/styles';

const Welcome = () => {

  return (
    <>
      <StatusBar style="dark" />
      <InnerContainer>
      <WelcomeImage resizeMode="contain" source={require('../assets/Frutas.jpg')} />
        <WelcomeContainer>
          <PageTitle welcome={true}> Bem vindo! Brow </PageTitle>
          <SubTitle welcome={true}> Iyonissio Daniel Sitoe </SubTitle>
          <SubTitle welcome={true}> Iyonissio01@gmail.com </SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('../assets/logoo.png')} />
            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>Sair</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
