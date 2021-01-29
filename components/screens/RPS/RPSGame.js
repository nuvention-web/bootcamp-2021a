import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PaperButton from './PaperButton';
import RockButton from './RockButton';
import ScissorButton from './ScissorButton';

const RPSGame = ({ navigation }) => {
  const [playerTurn, setPlayerTurn] = useState('one');
  const [playerOnePick, setPlayerOnePick] = useState('');
  const [playerTwoPick, setPlayerTwoPick] = useState('');

  const handlePick = pick => {
    if (playerTurn == 'one') {
      setPlayerOnePick(pick);
      setPlayerTurn('two');
    } else {
      setPlayerTwoPick(pick);
      if (playerOnePick == playerTwoPick) {
        setPlayerOnePick('');
        setPlayerTwoPick('');
        setPlayerTurn('one');
      } else {
        if ((playerOnePick == 'scissors' && playerTwoPick == 'paper') || (playerOnePick == 'rock' && playerTwoPick == 'scissors') || (playerOnePick == 'paper' && playerTwoPick == 'rock')) {
          navigation.navigate('WinnerScreen', 'one');
        } else {
          navigation.navigate('WinnerScreen', 'two');
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {`Player ${playerTurn}, pick.`}
      </Text>
      <RockButton handlePick={handlePick} />
      <PaperButton handlePick={handlePick} />
      <ScissorButton handlePick={handlePick} />
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
  text: {
    fontSize: 30,
  }
});

export default RPSGame;
