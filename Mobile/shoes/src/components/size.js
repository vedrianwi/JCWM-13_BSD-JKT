import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Size = ({ size, onTouch, color = {} }) => {
    return (
        <TouchableOpacity style={[styles.size, color]} onPress={onTouch}>
            <View style={styles.sizebox}>
                <Text>{size}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    size: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
    },
    sizebox: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Size;
