import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';


const PlayerTwo = ({ handlePick }) => {
    return (
        <TouchableOpacity
            style={styles.player}
            onPress={() => handlePick('two')}
        >
            <Image
                style={styles.playerLogo}
                source={require(`../../../assets/dinosaur.png`)}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    player: {
        margin: 30,
    },
    playerLogo: {
        width: 200,
        height: 200,
    },
});

export default PlayerTwo;
