import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import screens
import AccountScreen from '../screens/account';
import ProfileScreen from '../screens/profile';

// create drawer
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="account" component={AccountScreen} />
            <Drawer.Screen name="profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNav;
