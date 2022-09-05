
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login"
import HomeScreen from "./screens/Home"
import SignUpScreen from "./screens/SignUp"
import firebase from 'firebase/app';
import "firebase/auth";
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { SafeAreaView } from 'react-native';

import store from  "./redux/store"
import { Provider } from 'react-redux';


const Stack = createNativeStackNavigator();

export default function App() {

  const RootApp=() =>{
   
      <SafeAreaView>
        
      <TodoHeader/>
      <TodoList/>
     </SafeAreaView>
    
   
  
    

    
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyBOkOnHcWUWNIrXUgRQrH5FdtBcX5F3b8Q",
  authDomain: "authreduxtodo.firebaseapp.com",
  projectId: "authreduxtodo",
  storageBucket: "authreduxtodo.appspot.com",
  messagingSenderId: "480768295793",
  appId: "1:480768295793:web:e18007e616123a8b206cd0",
  measurementId: "G-W6K4369CCH"
  };

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {

    if (user != null) { setIsLoggedIn(true)
     
    } else {
      setIsLoggedIn(false);
    }

  });


 
  return (
    <Provider store={store}>
    <NavigationContainer>
    
      
      <RootApp/>
       
     
      {isLoggedIn ? 
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
     
      </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>}
    </NavigationContainer>
    </Provider>
  );

}

