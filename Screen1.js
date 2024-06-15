
//Login-Welcome Screen
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

class Screen1 extends Component {
  state = {
    email: '',
    password: '',
  };

  // Function to handle email
  handleEmailChange = (email) => {
    this.setState({ email });
  };

  // Function to handle password 
  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  // Function to handle login
  handleLoginPress = async () => {
    // Simulated hardcoded credentials
    const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = 'password';
  
    const { email, password } = this.state;
  
    try {
      // Check if entered credentials match the hardcoded ones
      if (email === hardcodedEmail && password === hardcodedPassword) {
        // Simulated successful login
        const token = 'simulatedToken123'; // You can generate a token here if needed
        await AsyncStorage.setItem('token', token); // Store token in AsyncStorage
  
        // Navigate to the next screen
        this.props.navigation.navigate('BackgroundScreen');
      } else {
        // Simulated login failure
        throw new Error('Invalid email/password');
      }
    } catch (error) {
      console.error(error);
      alert('Invalid email/password');
    }
  };
  
//Function for handling Forgotten Password
  handleForgotPasswordPress = () => {
    

  };

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={this.handleEmailChange}
          placeholder="Username"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={this.handlePasswordChange}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.loginButton} onPress={this.handleLoginPress}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword} onPress={this.handleForgotPasswordPress}>
          Forgot Password?
        </Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => this.props.navigation.navigate('Screen2')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#69DDC9',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    fontSize: 16,
    color: '#FFFFFF',
  },
  loginButton: {
    backgroundColor: '#58BFEF',
    paddingVertical: 22,
    paddingHorizontal: 70,
    borderRadius: 50,
    marginBottom: 20,
    marginTop:20,
  },
  signupButton: {
    backgroundColor: '#64b5f6',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom: 
    20,
  },
  chatButton: {
  backgroundColor: '#3f51b5',
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 5,
  marginBottom: 20,
  },
  buttonText: {
  color: '##000000',
  fontSize: 25,
  fontWeight: 'bold',
  textAlign: 'center',
  },
  forgotPassword: {
  color: '#2196f3',
  marginTop: 10,
  fontSize: 16,
  fontWeight: 'bold',
  },
  });
  
  export default Screen1;
  
