import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import  Appointments  from "./Appointments";
import Receipt from "../components/Receipt";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      
      <Stack.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen 
      name="Appointments" 
      component={Appointments} 
      options={{ headerShown: false }} 
      />
      
      
     
     
     
     
      
      
      
      

</Stack.Navigator>
  );
}

export default MyStack;