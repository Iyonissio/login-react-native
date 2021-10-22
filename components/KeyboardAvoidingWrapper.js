import React from 'react';
import { Children } from 'react';

//keyboard

import { KeyboardAvoidingView, ScroollView, TouchableWithoutFeedback, Keyboard} from 'react-native';


const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <ScroollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScroollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper;