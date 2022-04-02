import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Patients from "./Patients";
import PatientD from "./PatientDetails";
import Reviews from "./Reviews";
const Stack = createStackNavigator();

function MStack() {
  return (
    <Stack.Navigator >
      
      <Stack.Screen 
      name="Patients" 
      component={Patients} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen 
      name="PatientD" 
      component={PatientD} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name="Reviews" 
      component={Reviews} 
      options={{ headerShown: false }} 
      />
      
      
      
      

</Stack.Navigator>
  );
}

export default MStack;