import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={['white', '#ddb52f']} style={BaseStyles.rootScreen}>
        <ImageBackground imageStyle={BaseStyles.imageBackground} style={BaseStyles.rootScreen} source={{ uri: "https://picsum.photos/1080/1920" }} resizeMode="cover">
          <SafeAreaView style={BaseStyles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient></>
  );
}

const BaseStyles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  imageBackground: {
    opacity: 0.15
  }
});
