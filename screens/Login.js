import React from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea
} from './../components/styles';



const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/logoo.png')} />
                <PageTitle> Whatsapp 1 </PageTitle>
                <SubTitle> Preencha os campos </SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;