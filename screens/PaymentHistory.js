import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Receipt from "../components/Receipt";
import MonthEarn from '../screens/MonthEarn';
import MonthlyEarnings from "./MonthlyEarnings";
const Stack = createStackNavigator();

const PaymentHistory =() => {
  return (
    <Stack.Navigator >
      
      
      <Stack.Screen 
      name="MonthlyEarnings" 
      component={MonthlyEarnings} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen 
      name="MonthEarn" 
      component={MonthEarn} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name="Receipt" 
      component={Receipt} 
      options={{ headerShown: false }} 
      />
     
     
      
      
      
      

</Stack.Navigator>
  );
}

export default PaymentHistory;