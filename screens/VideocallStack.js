import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import VideoCall from "../components/Videocall";
import Comment from "../components/Comment";
import Prescrption from "../components/Prescrption";
import Sappoint from "../components/SuggestAppointments";
import TestOrder from "../components/TestOrder";
import Medical from "../components/MedicalCertificate";
import Letter from "../components/Letter";
const Stack = createStackNavigator();

const VideoStack =() => {
  return (
    <Stack.Navigator >
      
     
       <Stack.Screen 
      name="VideoCall" 
      component={VideoCall} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen 
      name="Comment" 
      component={Comment} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen 
      name="Prescrption" 
      component={Prescrption} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name="Sappoint" 
      component={Sappoint} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name="TestOrder" 
      component={TestOrder} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen 
      name="Medical" 
      component={Medical} 
      options={{ headerShown: false }} 
      />
        <Stack.Screen 
      name="Letter" 
      component={Letter} 
      options={{ headerShown: false }} 
      />
       
      
     
      
      
      
      

</Stack.Navigator>
  );
}

export default VideoStack;