// import Module
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

// INTERMEDIETE COMPONENT : CARD and LIST
const App = () => {
    return (
        <View style={styles.root}>
            <WebView
                source={{ uri: 'https://www.youtube.com/embed/E4oZpU_2WUo' }}
                style={styles.web}
            />
            <Text>Description</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'pink',
    },
    web: {
        flex: 0.4,
    },
});

export default App;
