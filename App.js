import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Appstack from './navigation/AppStack';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Appstack/>
           
        </NavigationContainer>
    )
}

export default App;