import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';


const EnterPlayerInfoScreen = ({ navigation, route }) => {
    const [oneName, setOneName] = useState('Name');
    const [oneFood, setOneFood] = useState('Fight for...');
    const [twoName, setTwoName] = useState('Name');
    const [twoFood, setTwoFood] = useState('Fight for...');
    const player = route.params;

    const handleOnChangeName = text => {
        if (player == 'one') {
            setOneName(text);
        } else {
            setTwoName(text);
        }
    };

    const handleOnChangeFood = text => {
        if (player == 'one') {
            setOneFood(text);
        } else {
            setTwoFood(text);
        }
    };

    const handlePress = () => {
        if (player == 'one') {
            navigation.navigate('PlayerInfoScreen');
        } else {
            navigation.navigate('RPSGame');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={(player == 'one') ? styles.textInputOne : styles.textInputTwo}
                onChangeText={text => handleOnChangeName(text)}
                value={(player == 'one') ? oneName : twoName}
            />
            <TextInput
                style={(player == 'one') ? styles.textInputOne : styles.textInputTwo}
                onChangeText={text => handleOnChangeFood(text)}
                value={(player == 'one') ? oneFood : twoFood}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => handlePress()}
            >
                {(player == 'one')
                ?
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
    },
});

export default EnterPlayerInfoScreen;
