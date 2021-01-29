import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';


const Game = () => {
    return (
        <TouchableOpacity style={styles.game}>
            <Image
                style={styles.gameLogo}
                source={require('../../../assets/favicon.png')}
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

export default Game;
