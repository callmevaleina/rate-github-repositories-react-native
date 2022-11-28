import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert} from 'react-native';
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import SignInForm from './SignInForm.jsx';


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.signIn.background,
        // marginVertical: 20,
        // marginHorizontal: 20,
        borderRadius: 5,
        // alignSelf: 'center',
        padding: 15,
        minHeight: '100%'
    },
    text: {
        color: theme.signIn.textPrimary,
        fontSize: theme.signIn.title,
        fontWeight: theme.fontWeights.bold,
        alignSelf: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }

})

const SignIn = () => {
    return (
        <View style={styles.container}>
            <StyledText TouchableWithoutFeedback={true} onPress={()=> Alert.alert('Tocando el Sign In')} style={styles.text}>Sign In</StyledText>
            <SignInForm/>
        </View>
    );
};

export default SignIn;