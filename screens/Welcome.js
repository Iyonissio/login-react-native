import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

//icones
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

//colors
import { Avatar, Colors, WelcomeContainer, WelcomeImage } from './../components/styles';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  StyledButtong,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from './../components/styles';

import { View } from 'react-native';

//cores
const { brand, darkLight, primary } = Colors;

const Welcome = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <>
      <StatusBar style="dark" />
      <InnerContainer>
      <WelcomeImage resizeMode="cover" source={require('../assets/logoo.png')} />
        <WelcomeContainer>
          <PageTitle welcome={true}> Welcome! Brow </PageTitle>
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

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Welcome;
