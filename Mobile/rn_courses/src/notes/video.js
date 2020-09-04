import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const file = require('./src/video.webm');

const App = () => {
    return (
        <View style={styles.root}>
            <Video
                source={file}
                style={styles.backgroundVideo}
                controls
                fullscreen
                paused
                resizeMode="contain"
                // pictureInPicture
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default App;
