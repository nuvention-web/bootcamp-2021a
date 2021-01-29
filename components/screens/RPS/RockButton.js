import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const RockButton = ({ handlePick }) => (
  <TouchableOpacity
      style={styles.button}
      onPress={() => handlePick('rock')}
  >
      <Image
          style={styles.buttonstyle}
          source={require(`../../../assets/rock.png`)}
      />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        margin: 30,
    },
    buttonstyle: {
        width: 100,
        height: 100,
    },
});

export default RockButton;
