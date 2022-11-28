import React from 'react';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, Alert } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        width: '95%',
        minHeight: '30%',
        backgroundColor: theme.signInForm.background,
        alignSelf: 'center',
        marginTop: 10,
        borderColor: theme.signInForm.border,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        justifyContent: 'center'

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
})


const SignInForm = () => {
    const [text, onChangeText] = useState("Useless Text");


    return (
        <SafeAreaView style={styles.container}>
             <TextInput
             style={styles.input}
             placeholder="Email"/>
             <TextInput
             style={styles.input}
             placeholder="Password"/>
             <Button
             title='Sign In'
             onPress={()=> Alert.alert('Press Sign In')}/>
        </SafeAreaView>
    );
};

export default SignInForm;