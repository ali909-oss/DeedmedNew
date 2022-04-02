import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View,Text, Image,StyleSheet, TouchableOpacity,size } from "react-native";


import { Home,Appointments,Notification,Profile,Patient} from "../screens"
import { COLORS } from "../constants"
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from "react-native-vector-icons/dist/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Feather from 'react-native-vector-icons/dist/Feather';



const Tab = createBottomTabNavigator()

const Tabs = () => {
  

    return (
        <Tab.Navigator
            tabBarOptions={{showLabel: false ,
              style: {
                height: 60,
                width: 400,
                flexDirection: 'column',
                alignSelf: 'center',
                elevation: 3,
                borderTopStartRadius: 5,
                borderTopEndRadius: 5,

            },
                
            }}
        >
            
            {<Tab.Screen
                name="Home"
                component={Home}
                

               options={{
                showLabel: false ,
                    tabBarIcon: ({focused}) => {
                      return (
                        <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                           <FontAwesome5
                name="heartbeat"
                size={30}
                color={focused ? '#7cc' : '#ccc'}
                
             />
                        </View>
                       
                        
          
                      
                      );
                    }, }}
                
            />
            }
            
           
          
            <Tab.Screen
                name="Time"
                component={Appointments}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>

                            <MaterialCommunityIcons
                 name="calendar-clock"
                 size={30}

                 color={focused ? '#7cc' : '#ccc'}
                 
              />
              
                         </View>
                        
                         
           
                         
                       );
                     }, }}
           
            />
            <Tab.Screen
                name="Select"
                component={Patient}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                            <Feather
                 name="user-plus"
                 size={30}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
                         </View>
                        
                         
           
                       
                        );
                     },
                       } }
           
            />
             <Tab.Screen
                name="notification"
                component={Notification}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                            <Ionicons
                 name="notifications-outline"
                 size={30}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
                         </View>
                        );
                     },
                       } }
           
            />
             <Tab.Screen
                name="Profile"
                component={Profile}
                style = {{headerShown:false}}
                options={{
                     tabBarIcon: ({focused}) => {
                       return (
                         <View style = {{justifyContent:'center',alignItems:'center',top:1}}>
                            <AntDesign
                 name="user"
                 size={30}
                 color={focused ? '#7cc' : '#ccc'}
                 
              />
                         </View>
                        
                         
           
                       
                        );
                     },
                       } }
           
            />
        </Tab.Navigator>
    )
}

export default Tabs;