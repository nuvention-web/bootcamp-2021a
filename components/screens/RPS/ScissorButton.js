import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const ScissorButton = ({ handlepick }) => (
  <TouchableOpacity
      style={styles.button}
      onPress={() => handlePicked()}
  >
      <Image
          style={styles.buttonstyle}
          source={require(`../../../assets/scissor.png`)}
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

export default ScissorButton;
