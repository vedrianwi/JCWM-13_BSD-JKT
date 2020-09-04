import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import Home from '../screens/home';
import ProductDetails from '../screens/product_details';

const Stack = createStackNavigator();

const ProductNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={() => ({ headerShown: false })}
            />
            <Stack.Screen
                name="details"
                component={ProductDetails}
                options={({ route }) => {
                    return {
                        title: route.params.product.nama,
                    };
                }}
            />
        </Stack.Navigator>
    );
};

export default ProductNav;
