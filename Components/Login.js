
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Login = ({ onSwitch, onRegister }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.loginText}>Log In Page</Text>
    </View>

    <TextInput  label="Email" mode="outlined" style={styles.input}/>
    <TextInput label="Password" mode="outlined" secureTextEntry style={styles.input} />
        
    <Button mode="contained" style={styles.button} onPress={() => {}}> Login </Button>
    <Button mode="text" onPress={onSwitch}textColor="#fff">  Forgot Password? </Button>
    <Button mode="text" onPress={onRegister}textColor="#fff"> Sign Up </Button>

  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 210,
    backgroundColor: '#738678',
  },
  header: {
    alignItems: 'center', 
    marginBottom: 20,
    color: '#000000',
  },
  loginText: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
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

export default Login;
