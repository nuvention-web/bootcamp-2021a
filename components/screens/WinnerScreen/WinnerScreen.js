import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const WinnerScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.pepper}
                source={require(`../../../assets/pepper.png`)}
            />
            <Text style={styles.winnerNameText}>
                Joe
            </Text>
            <Text style={styles.winsText}>
                Wins!
            </Text>
            <Image
                style={styles.taco}
                source={require(`../../../assets/taco.png`)}
            />
            <Image
                style={styles.chicken}
                source={require(`../../../assets/chicken.png`)}
            />
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
    pepper: {
        width: 100,
        height: 100,
    },
    taco: {
        width: 100,
        height: 100,
    },
    chicken: {
        width: 100,
        height: 100,
    },
    winnerNameText: {
        color: 'orange',
        fontSize: 100,
    },
    winsText: {
        color: 'orange',
        fontSize: 50,
    },
});

export default WinnerScreen;
