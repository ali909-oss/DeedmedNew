import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import AppointmentScreen from "./AppointmentScreen";
import AppointmentDetails from "../components/AppointmentDetails";
import Pastinfo from "../components/Pastinfo";
import Reviews from "./Reviews";
import VideoCall from "../components/Videocall";
import Comment from "../components/Comment";
import Prescrption from "../components/Prescrption";
import Appoint from "./Appoint";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
        <Stack.Screen 
      name="Appoint" 
      component={Appoint} 
      options={{ headerShown: false }} 
      />
      
     
       {/* <Stack.Screen 
      name="Appointments" 
      component={AppointmentScreen} 
      options={{ headerShown: false }} 
      /> */}
     
       <Stack.Screen 
      name="Pastinfo" 
      component={Pastinfo} 
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

export default MyStack;