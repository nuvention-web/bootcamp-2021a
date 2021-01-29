import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PlayerInfoScreen from '../screens/PlayerInfoScreen/PlayerInfoScreen';
import EnterPlayerInfoScreen from '../screens/EnterPlayerInfoScreen/EnterPlayerInfoScreen';
import WinnerScreen from '../screens/WinnerScreen/WinnerScreen';
import RPSGame from '../screens/RPS/RPSGame';


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Food Fight', headerTitleStyle: {color: 'white', fontSize: 30}, headerStyle: {backgroundColor: '#fecc91'}, headerTitleAlign: 'center'}} />
            <Stack.Screen name='PlayerInfoScreen' component={PlayerInfoScreen} options={{title: 'Food Fight', headerTitleStyle: {color: 'white', fontSize: 30}, headerStyle: {backgroundColor: '#fecc91'}, headerTitleAlign: 'center'}} />
            <Stack.Screen name='EnterPlayerInfoScreen' component={EnterPlayerInfoScreen} options={{title: 'Food Fight', headerTitleStyle: {color: 'white', fontSize: 30}, headerStyle: {backgroundColor: '#fecc91'}, headerTitleAlign: 'center'}} />
            <Stack.Screen name='RPSGame' component={RPSGame} options={{title: 'Food Fight', headerTitleStyle: {color: 'white', fontSize: 30}, headerStyle: {backgroundColor: '#fecc91'}, headerTitleAlign: 'center'}} />
            <Stack.Screen name='WinnerScreen' component={WinnerScreen} options={{title: 'Food Fight', headerTitleStyle: {color: 'white', fontSize: 30}, headerStyle: {backgroundColor: '#fecc91'}, headerTitleAlign: 'center'}} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
