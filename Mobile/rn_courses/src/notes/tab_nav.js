import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// SCREEN
const Home = ({ navigation }) => {
    return (
        <View style={styes.root}>
            <Text style={styes.text}>Home Screen</Text>
            <Button
                title="Goto Setting"
                onPress={() => navigation.navigate('Setting')}
            />
        </View>
    );
};

const Setting = ({ navigation }) => {
    return (
        <View style={styes.root}>
            <Text style={styes.text}>Setting Screen</Text>
            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

// CREATE TAB NAVIGATION
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Setting') {
                            iconName = focused
                                ? 'settings'
                                : 'settings-outline';
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                color={color}
                                size={size}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#e74c3c',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Setting" component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styes = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default App;
