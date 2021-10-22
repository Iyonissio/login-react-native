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

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        
        <PageTitle> Construindo... </PageTitle>
        <SubTitle> Cadastro </SubTitle>

        <Formik
          initialValues={{ fullName: '',email: '', dateOfBirth: '', password: '', comfirmPassword: ''}}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Nome Completo"
                icon="person"
                placeholder="Iyonissio Daniel Sitoe"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
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
                label="Data de Aniversario"
                icon="calendar"
                placeholder="1956"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={values.dateOfBirth}
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
              <MyTextInput
                label="Confirmar Senha"
                icon="lock"
                placeholder="* * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('comfirmPassword')}
                onBlur={handleBlur('comfirmPassword')}
                value={values.comfirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
             
              <StyledButton onPress={handleSubmit}>
                  <ButtonText>Cadastrar-me</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Ja tem uma conta ? </ExtraText>
                <TextLink>
                  <TextLinkContent>Entre</TextLinkContent>
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

export default Signup;