import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const image = 'app/assets/background.jpg';

export default function App() {
  return (
    // <WelcomeScreen />
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  
});
