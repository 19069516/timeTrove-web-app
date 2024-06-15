import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import React from 'react';

import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import Screen4 from './Components/Screen4';
import Screen5 from './Components/Screen5';
import Screen6 from './Components/Screen6';
import Screen7 from './Components/Screen7';
import Screen8 from './Components/Screen8';
import Screen9 from './Components/Screen9';
import Screen10 from './Components/Screen10';
import Screen11 from './Components/Screen11';
import Screen12 from './Components/Screen12';
import Screen13 from './Components/Screen13';
import BlogScreen from './Components/BlogScreen';
import BackgroundScreen from './Components/BackgroundScreen';
import BlogPost from './Components/BlogPost';
import BlogPostContent from './Components/BlogPostContent.js';
import BlogPostContent2 from './Components/BlogPostContent2.js';
import BlogPostContent3 from './Components/BlogPostContent3.js';
import BlogPostContent4 from './Components/BlogPostContent4.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ title: 'Login Screen' }}
        />
        
        <Stack.Screen
          name="BackgroundScreen"
          component={BackgroundScreen}
          options={{ title: 'HomeScreen' }}
        />

         <Stack.Screen
          name="BlogScreen"
          component={BlogScreen}
          options={{ title: 'BlogScreen' }}
        />

        <Stack.Screen
        name='BlogPost'
        component={BlogPost}
        options={{title: 'BlogPost'}}
        />
        
        <Stack.Screen
        name='BlogPostContent'
        component={BlogPostContent}
        options={{title: 'BlogPostContent'}}
        />
          <Stack.Screen
        name='BlogPostContent2'
        component={BlogPostContent2}
        options={{title: 'BlogPostContent2'}}
        />
             <Stack.Screen
        name='BlogPostContent3'
        component={BlogPostContent3}
        options={{title: 'BlogPostContent3'}}
        />
            <Stack.Screen
        name='BlogPostContent4'
        component={BlogPostContent4}
        options={{title: 'BlogPostContent4'}}
        />

        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ title: 'Sign-Up Screen' }}
        />
         <Stack.Screen
          name="Screen4"
          component={Screen4}
          options={{ title: 'Chat Screen' }}
        />
         <Stack.Screen
          name="Screen5"
          component={Screen5}
          options={{ title: 'View User Details' }}
        />
          <Stack.Screen
          name="Screen6"
          component={Screen6}
          options={{ title: '6' }}
        />
           <Stack.Screen
          name="Screen7"
          component={Screen7}
          options={{ title: 'Contacts List' }}
        />
         <Stack.Screen
          name="Screen8"
          component={Screen8}
          options={{ title: '8' }}
        />
           <Stack.Screen
          name="Screen9"
          component={Screen9}
          options={{ title: 'BlockList' }}
        />
              <Stack.Screen
          name="Screen10"
          component={Screen10}
          options={{ title: 'View Chat Details' }}
        />
              <Stack.Screen
          name="Screen11"
          component={Screen11}
          options={{ title: 'Start A New Chat' }}
        />
              <Stack.Screen
          name="Screen12"
          component={Screen12}
          options={{ title: 'Chat Screen' }}
        />
              <Stack.Screen
          name="Screen13"
          component={Screen13}
          options={{ title: 'Edit Chats' }}

  
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
