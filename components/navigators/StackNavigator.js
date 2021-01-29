import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PlayerInfoScreen from '../screens/PlayerInfoScreen/PlayerInfoScreen';
import EnterPlayerInfoScreen from '../screens/EnterPlayerInfoScreen/EnterPlayerInfoScreen';


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='PlayerInfoScreen' component={PlayerInfoScreen} />
            <Stack.Screen name='EnterPlayerInfoScreen' component={EnterPlayerInfoScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
