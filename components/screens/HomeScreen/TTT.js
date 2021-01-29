import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';


const TTT = ({ handlePick, gameName }) => {
    return (
        <TouchableOpacity
            style={styles.game}
            onPress={() => handlePick(gameName)}>
            <Image
                style={styles.gameLogo}
                source={require(`../../../assets/ttt.png`)}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    game: {
        margin: 30,
    },
    gameLogo: {
        width: 100,
        height: 100,
    },
});

export default TTT;
