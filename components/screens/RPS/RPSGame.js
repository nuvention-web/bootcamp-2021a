import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RockButton from './RockButton';
import PaperButton from './PaperButton';
import ScissorButton from './ScissorButton';

const RPSGame = ({ navigation }) => {
  const [playerTurn, setPlayerTurn] = useState(0);

  const handlePick = () => ;

  return (
    <View style={styles.container}>
      <RockButton hand='Rock' handlepick={handlePick} />
      <PaperButton hand='Paper'  handlepick={handlePick}  />
      <ScissorButton hand='Scissor'  handlepick={handlePick}  />
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

export default RPSGame;
