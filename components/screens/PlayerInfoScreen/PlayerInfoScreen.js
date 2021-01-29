import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';


const PlayerInfoScreen = ({ navigation }) => {
  const [playersReady, setPlayersReady] = useState(0);

  const handlePick = () => navigation.navigate('EnterPlayerInfoScreen');

  return (
    <View style={styles.container}>
      <PlayerOne handlePick={handlePick} playersReady={playersReady} setPlayersReady={setPlayersReady} />
      <PlayerTwo handlePick={handlePick} playersReady={playersReady} setPlayersReady={setPlayersReady} />
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
