import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const EnterPlayerInfoScreen = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}>
                Hello
            </TextInput>
            <TextInput style={styles.textInput}>
                Fight for...
            </TextInput>
            <TouchableOpacity
                style={styles.button}
                // onPress={() => handlePick()}
            >
                <Image
                    style={styles.buttonImage}
                    source={require(`../../../assets/ready.png`)}
                />
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
    textInput: {
        backgroundColor: '#d8c6ff',
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
