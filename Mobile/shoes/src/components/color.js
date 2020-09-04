import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Color = ({ color, onTouch, opacity = 1, border = 0 }) => {
    return (
        <TouchableOpacity style={styles.color} onPress={onTouch}>
            <View
                style={[
                    styles.box,
                    {
                        backgroundColor: color,
                        opacity: opacity,
                        borderWidth: border,
                    },
                ]}></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    color: {
        height: 50,
        width: 50,
    },
    box: {
        height: '100%',
        width: '100%',
        borderRadius: 25,
    },
});

export default Color;
