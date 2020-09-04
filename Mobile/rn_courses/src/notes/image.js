// import Module
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

const image = require('./src/image01.jpg');
const imageURL =
  'https://images.unsplash.com/photo-1597250540935-94ebdd0f045e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';

// INTERMEDIETE COMPONENT
const App = () => {
  return (
    <ImageBackground source={{uri: imageURL}} style={styles.root}>
      <StatusBar backgroundColor="pink" />
      <ActivityIndicator size="large" color="#00ff00" />
      <Text>Hello React</Text>
      {/* Image from local storage */}
      <Image source={image} style={styles.image} />
      {/* image from url */}
      <Image source={{uri: imageURL}} style={styles.image} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default App;
