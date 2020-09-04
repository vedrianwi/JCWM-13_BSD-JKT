import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.root}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.goBack()}>
                <Text>Go Back</Text>
            </Button>
            <Button onPress={() => navigation.navigate('login')}>
                <Text>Go To Login</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: '10%',
    },
});

export default HomeScreen;
