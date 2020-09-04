import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import Cart from '../screens/cart';
import PaymentType from '../screens/payment_type';
import PaymentReceipt from '../screens/payment_receipt';

const Stack = createStackNavigator();

const OrderNav = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="cart" component={Cart} />
            <Stack.Screen name="payment-type" component={PaymentType} />
            <Stack.Screen name="payment-receipt" component={PaymentReceipt} />
        </Stack.Navigator>
    );
};

export default OrderNav;
