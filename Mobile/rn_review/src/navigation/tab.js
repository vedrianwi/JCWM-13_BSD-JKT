import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import screen
import HomeScreen from '../screens/home';
import DrawerNav from './drawer';

// create tab navigaton
const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="drawer-nav" component={DrawerNav} />
        </Tab.Navigator>
    );
};

export default TabNav;
