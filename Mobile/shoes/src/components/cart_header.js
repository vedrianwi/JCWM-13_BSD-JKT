import React from 'react';
import { StyleSheet } from 'react-native';
import AppbarHeader from 'react-native-paper/lib/commonjs/components/Appbar/AppbarHeader';
import AppbarContent from 'react-native-paper/lib/commonjs/components/Appbar/AppbarContent';
import AppbarBackAction from 'react-native-paper/lib/commonjs/components/Appbar/AppbarBackAction';
import AppbarAction from 'react-native-paper/lib/commonjs/components/Appbar/AppbarAction';

const CartHeader = ({ onTouch, onRefresh }) => {
    return (
        <AppbarHeader style={styles.header}>
            <AppbarBackAction onPress={onTouch} />
            <AppbarContent title="Cart" />
            <AppbarAction icon="refresh" onPress={onRefresh} />
        </AppbarHeader>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0984e3',
        height: 70,
    },
});

export default CartHeader;
