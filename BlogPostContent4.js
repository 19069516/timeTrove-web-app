import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const BlogPostContent4 = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/timetrove-img.jpg')} // Replace with your actual image path
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.header}>Blog Post 4</Text>

                <Text style={styles.loremText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec nisi diam. 
                Integer ipsum ipsum, euismod ut libero non, iaculis hendrerit tortor. 
                Donec porttitor dolor id urna consequat, sed mattis felis pulvinar. 
                Aenean iaculis neque ac massa auctor, in aliquam lorem suscipit. 
                Curabitur at augue bibendum, blandit quam id, bibendum ante. 
                Curabitur at blandit nibh. Quisque nisi ante, semper a velit sed, molestie dignissim eros. 
                Ut bibendum magna nec nisi tempus faucibus. Nulla sagittis lorem ac nisi interdum dapibus. 
                Duis congue sapien vitae urna cursus, non dapibus enim pharetra. 
                Quisque id orci volutpat, tristique lacus non, posuere lorem. 
                Ut eu odio iaculis, molestie lectus sed, scelerisque augue. {'\n'}
                Proin nec odio interdum dui pharetra facilisis vel et eros. 
                Ut pulvinar ipsum fermentum erat commodo, at scelerisque erat luctus. 
                Nunc nec elementum eros, sed mollis felis. Fusce maximus ante nec enim pellentesque, 
                non pulvinar lectus ultrices. Cras venenatis, metus in fringilla accumsan, ligula magna bibendum eros, 
                eget consectetur velit libero non risus. Nam condimentum nunc eget velit cursus sagittis. 
                Duis sodales tempus faucibus. Nam sagittis nisl sit amet orci aliquet vulputate. 
                Integer non tempor leo. Donec ut augue quis, tincidunt efficitur nisi.
                </Text>

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
        padding: 20, // Adjust padding as needed
    },
    header: {
        fontSize: 54,
        color: '#FFFFFF',
        marginBottom: 40, // Space between header and text
        alignSelf: 'flex-start', // Align header to the left
    },
    loremText: {
        fontSize: 22.5,
        color: '#FFFFFF',
        alignSelf: 'flex-start', // Align text to the left
    },
    bottomButtonsContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 100, // Set the height of the button container
        position: 'absolute',
        bottom: 0,
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
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
    },
});

export default BlogPostContent4;
