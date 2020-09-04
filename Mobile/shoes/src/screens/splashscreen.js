import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { logo } from '../assets';

const SplashScreen = () => {
    return (
        <View style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={logo} style={styles.image} />
            </View>
            <Text style={styles.title}>Shoes App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 130,
        height: 130,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2C3A47',
        textTransform: 'uppercase',
    },
});

export default SplashScreen;
