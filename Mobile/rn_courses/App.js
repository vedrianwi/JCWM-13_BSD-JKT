import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// STACK SCREEN
const Home = ({ navigation }) => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                title="go to produk"
                onPress={() => navigation.navigate('Produk')}
            />
        </View>
    );
};

const Produk = ({ navigation }) => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Produk Screen</Text>
        </View>
    );
};

const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Produk" component={Produk} />
        </Stack.Navigator>
    );
};

// TAB SCREEN
const Account = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Account</Text>
        </View>
    );
};

const Profile = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Profile</Text>
        </View>
    );
};

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Account" component={Account} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
    );
};

// DRAWER SCREEN
const About = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>About</Text>
        </View>
    );
};

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="HomeNavigation"
                    component={HomeNavigation}
                />
                <Drawer.Screen name="TabNavigation" component={TabNavigation} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
});

export default App;
