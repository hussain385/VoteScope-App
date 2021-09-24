// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SignUp,
    SignIn,
    ConstituentPoll,
    CityPolls,
    PollResult,
    Setting,
    ForgotPassword,
    CreatePoll
} from './../../Screens/index'
const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/> */}
                <Stack.Screen name="ConstituentPoll" component={ConstituentPoll} options={{ headerShown: false }}/>
                <Stack.Screen name="CityPolls" component={CityPolls} options={{ headerShown: false }}/>
                <Stack.Screen name="PollResult" component={PollResult} options={{ headerShown: false }}/>
                <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>
                <Stack.Screen name="CreatePoll" component={CreatePoll} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;