import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const BackgroundScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/timetrove-img.jpg')} // Adjust this path if your image is located elsewhere
      style={styles.background}
      resizeMode="cover" // Adjust the image size and aspect ratio
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BlogScreen')} // Replace 'BlogScreen' with your actual screen name 
            >
            <Text style={styles.buttonText}>Blog</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CameraScreen')} // Replace 'CameraScreen' with your actual screen name
          >
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcomeText: {
    position: 'absolute',
    top: '20%', // Adjust the top position as needed
    fontSize: 77,
    fontWeight: 'bold',
    color: '#000000',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 100, // Set the height of the button container
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#64b5f6',
  },
  divider: {
    width: 1,
    backgroundColor: '#0000',
  },
  buttonText: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default BackgroundScreen;
