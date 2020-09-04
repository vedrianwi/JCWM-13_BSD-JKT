import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SplashNavigation from './splash_nav';

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <SplashNavigation />
        </NavigationContainer>
    );
};

export default MainNavigation;
