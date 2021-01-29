import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const RockButton = ({ handlepick }) => (
  <TouchableOpacity
      style={styles.button}
      onPress={() => handlePicked()}
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
