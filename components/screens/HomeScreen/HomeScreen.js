import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TTT from './TTT';
import Snowman from './Snowman';
import RPS from './RPS';


const HomeScreen = ({ navigation }) => {
  const [gamePicked, setGamePicked] = useState('');

  const handlePick = gameName => {
    setGamePicked(gameName);
    navigation.navigate('PlayerInfoScreen');
    // then navigate to next screen
  };

  return (
    <View style={styles.container}>
      <TTT handlePick={handlePick} />
      <Snowman handlePick={handlePick} />
      <RPS handlePick={handlePick} />
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
