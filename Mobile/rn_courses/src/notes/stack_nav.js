import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
const Home = ({ navigation, route }) => {
    console.log('route : ', route);
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                containerStyle={styles.button}
                title="Go To Product Details"
                // Passing parameters to routes
                onPress={() =>
                    navigation.navigate('Product-Details', {
                        name: 'Sepatu Adidaw',
                        harga: 15000000,
                    })
                }
            />
        </View>
    );
};

const ProductDetails = ({ navigation, route }) => {
    console.log('route : ', route);
    return (
        <View style={styles.root}>
            <Text style={styles.text}>Product Details Screen</Text>
            <Text>data from Home : {route.params.name}</Text>
            <Button
                containerStyle={styles.button}
                title="Go To Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                containerStyle={styles.button}
                title="Go To Cart"
                onPress={() =>
                    navigation.navigate('Cart', {
                        cart: 'data details sepatu',
                    })
                }
            />
            <Button
                containerStyle={styles.button}
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const UserCart = ({ navigation, route }) => {
    console.log('route : ', route);
    return (
        <View style={styles.root}>
            <Text style={styles.text}>User Cart Screen</Text>
            <Text>data from product details : {route.params.cart}</Text>
            <Button
                containerStyle={styles.button}
                title="Go To Product Details"
                onPress={() => navigation.navigate('Product-Details')}
            />
            <Button
                containerStyle={styles.button}
                title="Go To Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                containerStyle={styles.button}
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
            <Button
                containerStyle={styles.button}
                title="Push to Home"
                onPress={() => navigation.push('Home')}
            />
            <Button
                containerStyle={styles.button}
                title="Push to Cart"
                onPress={() => navigation.push('Cart')}
            />
        </View>
    );
};

// STACK NAVIGATION
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                // screenOptions={{
                //     headerStyle: {
                //         backgroundColor: '#f1c40f',
                //         height: 100,
                //     },
                //     headerTitleStyle: { color: '#ffffff', fontSize: 32 },
                // }}
                // headerMode="none"
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    initialParams={{ name: 'home screen' }}
                    // options={{
                    //     title: 'Home Screen',
                    //     headerStyle: {
                    //         backgroundColor: '#f1c40f',
                    //         height: 100,
                    //     },
                    //     headerTitleStyle: { color: '#ffffff', fontSize: 32 },
                    //     // headerTransparent: true,
                    // }}
                    // add component to header
                    options={{
                        headerRight: () => <Button title="back" />,
                        headerLeft: () => <Button title="left" />,
                    }}
                />
                <Stack.Screen
                    name="Product-Details"
                    component={ProductDetails}
                />
                <Stack.Screen name="Cart" component={UserCart} />
            </Stack.Navigator>
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
        fontSize: 20,
    },
    button: {
        marginVertical: 10,
    },
});

export default App;
