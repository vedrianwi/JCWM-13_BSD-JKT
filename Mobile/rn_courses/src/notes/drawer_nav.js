import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// SCREEN
const Home = ({ navigation }) => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                title="Open Drawer"
                onPress={() => navigation.openDrawer()}
            />
            <Button
                title="Go to Setting"
                onPress={() => navigation.navigate('Setting')}
            />
        </View>
    );
};

const Setting = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Setting</Text>
        </View>
    );
};

const About = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.text}>About</Text>
        </View>
    );
};

// DRAWER NAVIGATION
const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Setting" component={Setting} />
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
