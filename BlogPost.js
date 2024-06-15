import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

const BlogPost = ({ navigation }) => {
    return (
  <ImageBackground
  source={require('../assets/timetrove-img.jpg')} // Replace with your actual image path
  style={styles.background}
  resizeMode="cover"
  >
    <View style={styles.overlay}>
        
    
         <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('BlogPostContent')} // Replace with your actual screen name
                >
                    <Text style={styles.buttonText}>Blog Post 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('BlogPostContent2')} // Replace with your actual screen name
                >
                    <Text style={styles.buttonText}>Blog Post 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('BlogPostContent3')} // Replace with your actual screen name
                >
                    <Text style={styles.buttonText}>Blog Post 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('BlogPostContent4')} // Replace with your actual screen name
                >
                    <Text style={styles.buttonText}>Blog Post 4</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.bottomButtonsContainer}>
                <TouchableOpacity
                    style={[styles.bottomButton, styles.blogButton]}
                    onPress={() => navigation.navigate('BlogScreen')} // Replace with your actual screen name
                >
                    <Text style={styles.bottomButtonText}>Blog</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
                <TouchableOpacity
                    style={styles.bottomButton}
                    onPress={() => navigation.navigate('CameraScreen')} // Replace with your actual screen name
                >
                    <Text style={styles.bottomButtonText}>Camera</Text>
                </TouchableOpacity>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,
    },
    button: {
        width: '90%',
        paddingVertical: 30,
        paddingHorizontal: 30,
        backgroundColor: '#87CBC7',
        borderRadius: 50, // Set the borderRadius to half of the button's height for ellipsis shape
        marginVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 26,
        fontWeight: 'bold',
    },
    bottomButtonsContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 100, // Set the height of the button container
    },
    bottomButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#64b5f6',
    },
    blogButton: {
        backgroundColor: '#295FF4', // Change this to the desired color for the Blog button
    },
    divider: {
        width: 1,
        backgroundColor: '#fff',
    },
    bottomButtonText: {
        color: '##000000',
        fontSize: 25,
        fontWeight: 'bold',
    },
});

export default BlogPost;
