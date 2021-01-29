import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';


const PlayerInfoScreen = ({ navigation }) => {
  const handlePick = player => {
    navigation.navigate('EnterPlayerInfoScreen', player);
  }

  return (
    <View style={styles.container}>
      <PlayerOne handlePick={handlePick} />
      <PlayerTwo handlePick={handlePick} />
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

export default PlayerInfoScreen;
