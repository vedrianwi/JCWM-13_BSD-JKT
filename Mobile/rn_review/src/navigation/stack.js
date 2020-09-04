import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import SplashScreen from '../screens/splash';
import LoginScreen from '../screens/login';
import TabNav from './tab';

// create stack navigation
const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen
                options={{ title: 'Login Screen', headerShown: true }}
                name="login"
                component={LoginScreen}
            />
            <Stack.Screen name="tab-nav" component={TabNav} />
        </Stack.Navigator>
    );
};

export default StackNav;
