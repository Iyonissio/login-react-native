import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

//icones
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

//colors
import { Colors } from './../components/styles';

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
  TextLinkContent
} from './../components/styles';

import { View } from 'react-native';

//cores
const { brand, darkLight, primary } = Colors;

//keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('../assets/logoo.png')} />
        <PageTitle> Bem Vindo </PageTitle>
        <SubTitle> Login da conta </SubTitle>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email"
                icon="mail"
                placeholder="qualquer@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Senha"
                icon="lock"
                placeholder="* * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                  <ButtonText>Entrar</ButtonText>
              </StyledButton>
              <Line />
              <StyledButtong google={true} onPress={handleSubmit}>
                    <Fontisto name="google" color={primary} size={20}/>
                  <ButtonText google={true}>Entrar usando o Google</ButtonText>
              </StyledButtong>
              <ExtraView>
                <ExtraText>Ainda nao tem uma conta ? </ExtraText>
                <TextLink>
                  <TextLinkContent>Cadastrar-me</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
            
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon,isPassword, hidePassword, setHidePassword,...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
          <RightIcon onPress={() => setHidePassword(!hidePassword)}>
             <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/> 
          </RightIcon>
      )}
    </View>
  );
};

export default Login;