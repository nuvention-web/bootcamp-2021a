import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Game from './Game';

const HomeScreen = () => {
  const [gamePicked, setGamePicked] = useState('');

  return (
    <View style={styles.container}>
      <Game setGamePicked={setGamePicked} />
      <Game setGamePicked={setGamePicked} />
      <Game setGamePicked={setGamePicked} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
