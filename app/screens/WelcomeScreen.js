import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.loginButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5C65',
  },
});

export default WelcomeScreen;
