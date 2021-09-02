import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from './../components/styles';

const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/logoo.png')} />
                <PageTitle>Login</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;