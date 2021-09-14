// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SignUp,
    SignIn
} from './../../Screens/index'
const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;