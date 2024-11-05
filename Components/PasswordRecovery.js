

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const PasswordRecovery = ({ onSwitch }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.recoveryText}>Forgot your Password?</Text>
      <Text style={styles.recoveryMessage}>Enter the email associated with your account and we'll send and email instructions to recover your password.</Text>
    </View>

    <TextInput label="Email" mode="outlined" style={styles.input} />

    <Button mode="contained" style={styles.button} onPress={() => {}}textColor="#FFF"> Send instructions </Button>
    <Button mode="text" onPress={onSwitch}textColor="#FFF"> Back to Login </Button>
    
  </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 260,
        backgroundColor: '#738678',
        top: -20,
      },
    header: {
        alignItems: 'center',
        top: -20,
    },
    recoveryText: {
        fontWeight: 'bold',
        color: '#fff',
    },
    recoveryMessage: {
        paddingVertical: 15,
        paddingHorizontal: 32,
        color: '#fff',
        textAlign: 'center',
    },
    input: {
        marginBottom: 16,
        width: '90%',
        alignSelf: 'center',
    },
    button: {
        marginBottom: 16,
        width: 200, 
        alignSelf: 'center',
        backgroundColor: '#485C4E',
      },
});

export default PasswordRecovery;