import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground 
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.background}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo-red.png')} style={styles.logo} />
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Login" color={colors.primary} />
          <AppButton title="Register" color={colors.secondary} />
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
  },
  tagline: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 16,
  },
  logo: {
    width: 100,
    height: 100,
    
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  }
})

export default WelcomeScreen;