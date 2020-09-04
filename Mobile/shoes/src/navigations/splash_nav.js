import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

// import navigation
import HomeNavigation from './home_nav';

// import screen
import Login from '../screens/login';
import Register from '../screens/register';
import SplashScreen from '../screens/splashscreen';

// import action
import { CheckLoginAction } from '../actions';

const Stack = createStackNavigator();

const SplashNavigation = () => {
    // get data from global storage / redux
    const { id, loading } = useSelector((state) => {
        return {
            id: state.userReducer.id,
            loading: state.userReducer.authloading,
        };
    });

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(CheckLoginAction());
    }, []);

    if (loading) {
        return <SplashScreen />;
    }

    return (
        <Stack.Navigator headerMode="none">
            {id ? (
                <Stack.Screen name="home-nav" component={HomeNavigation} />
            ) : (
                <>
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="register" component={Register} />
                </>
            )}
        </Stack.Navigator>
    );
};

export default SplashNavigation;
