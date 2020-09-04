import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

// import screen
import Account from '../screens/account';
import ProductNav from './product_nav';
import OrderNav from './order_nav';

const Wallet = () => {
    return (
        <View>
            <Text>Wallet Screen</Text>
        </View>
    );
};

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'product-nav') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'receipt') {
                        iconName = 'receipt';
                    } else if (route.name === 'order-nav') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'account') {
                        iconName = focused ? 'account' : 'account-outline';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#0984e3',
                inactiveTintColor: '#485460',
                showLabel: false,
            }}
            ti>
            <Tab.Screen name="product-nav" component={ProductNav} />
            <Tab.Screen name="order-nav" component={OrderNav} />
            <Tab.Screen name="receipt" component={Wallet} />
            <Tab.Screen name="account" component={Account} />
        </Tab.Navigator>
    );
};

export default HomeNavigation;
