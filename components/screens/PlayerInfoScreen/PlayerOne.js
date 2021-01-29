import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';


const PlayerOne = ({ handlePick }) => {
    return (
        <TouchableOpacity
            style={styles.player}
            onPress={() => handlePick('one')}
        >
            <Image
                style={styles.playerLogo}
                source={require(`../../../assets/unicorn.png`)}
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

export default PlayerOne;
