import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const PaperButton = ({ handlePick }) => (
  <TouchableOpacity
      style={styles.button}
      onPress={() => handlePick('paper')}
  >
      <Image
          style={styles.buttonstyle}
          source={require(`../../../assets/paper.png`)}
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

export default PaperButton;
