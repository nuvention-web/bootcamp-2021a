import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const EnterPlayerInfoScreen = ({ navigation, route}) => {
    const player = route.params;

    const handlePress = () => {
        if (player == 'one') {
            navigation.navigate('PlayerInfoScreen');
        } else if (player == 'two') {
            navigation.navigate('WinnerScreen');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={(player == 'one') ? styles.textInputOne : styles.textInputTwo}>
                Hello
            </TextInput>
            <TextInput style={(player == 'one') ? styles.textInputOne : styles.textInputTwo}>
                Fight for...
            </TextInput>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handlePress()}
            >
                {(player == 'one') ?
                <Image
                    style={styles.buttonImage}
                    source={require(`../../../assets/ready.png`)}
                />
                :
                <Image
                    style={styles.buttonImage}
                    source={require(`../../../assets/go.png`)}
                />}
            </TouchableOpacity>
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
    button: {
        margin: 30,
    },
    buttonImage: {
        width: 200,
        height: 200,
    },
    textInputOne: {
        backgroundColor: '#d8c6ff',
        color: 'white',
        textAlign: 'center',
        borderRadius: 20,
        fontSize: 30,
        width: 300,
        height: 100,
        margin: 20,
    },
    textInputTwo: {
        backgroundColor: '#60be86',
        color: 'white',
        textAlign: 'center',
        borderRadius: 20,
        fontSize: 30,
        width: 300,
        height: 100,
        margin: 20,
    }
});

export default EnterPlayerInfoScreen;
