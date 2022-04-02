import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Patients from "./Patients";
import NotificationScreen from "./NotificationScreen";
const Stack = createStackNavigator();

function NStack() {
  return (
    <Stack.Navigator >
      
      <Stack.Screen 
      name="NotificationScreen" 
      component={NotificationScreen} 
      options={{ headerShown: false }} 
      />
      
      
      
      

</Stack.Navigator>
  );
}

export default NStack;