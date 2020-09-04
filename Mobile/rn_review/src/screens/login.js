import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.root}>
            <Text>Login Screen</Text>
            <Button onPress={() => navigation.navigate('tab-nav')}>
                <Text>GO TO HOME</Text>
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

export default LoginScreen;
