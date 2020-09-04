import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import navigation
import StackNav from './src/navigation/stack';

const App = () => {
    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    );
};

export default App;
