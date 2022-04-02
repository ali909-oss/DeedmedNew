import React from 'react';
import { width ,isLargeScreen, View,style,StyleSheet,Button, Text} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from "../screens/Tabs"


import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import Patients from '../screens/Patients';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import PaymentHistory from '../screens/PaymentHistory';
import Avail from '../screens/Availaiblity';
import Rates from '../screens/MyRates';
import Privacy from '../screens/PrivacyControl';
import Security from '../screens/SecurityControl';
import Notify from '../screens/NotificationSetting';
import Help from '../screens/HelpCenter';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import Navigators from './Index';

const Drawer = createDrawerNavigator();

const Appstack = () => {
  return (
    

    <Drawer.Navigator drawerContent ={props => <CustomDrawer {...props}/>}
    drawerStyle={{
       width:widthPercentageToDP('100%'),
      }}
    drawerContentOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'white',

      
      labelStyle:{
         marginLeft:wp('1%'),
         fontSize:17,

        
      }
    }}
    >
     <Drawer.Screen
        name = "Home"
        component={Navigators}
        options={{
          drawerIcon: () => (
             
             <Ionicons
                name="md-home"
                size={20}
                color={'#fff'}
             />
          ),
       }}
        
        />
        <Drawer.Screen
        name = "Patients"
        component={Patients}
        options={{
          drawerIcon: ({focused, size}) => (
             <FontAwesome
                name="user"
                size={20}
                color={'#fff'}
             />
          ),
       }}
        
       
      
        />
        <Drawer.Screen
        name = "Payment History"
        component={PaymentHistory}
        options={{
          drawerIcon: ({focused, size}) => (
             <FontAwesome5
                name="money-check-alt"
                size={19}
                color={'#fff'}
             />
          ),
       }}
        
       
      
        />
        <Drawer.Screen
        name = "Availaiblity"
        component={Avail}
        options={{
          drawerIcon: ({focused, size}) => (
             <AntDesign
                name="calendar"
                size={20}
                color={'#fff'}
             />
          ),
       }}
        
       
      
        />
        <Drawer.Screen
        name = "My Rates"
        component={Rates}
        options={{
          drawerIcon: ({focused, size}) => (
             <Entypo
                name="price-tag"
                size={20}
                color={'#fff'}
             />
          ),
       }}
        
       
      
        />
        <Drawer.Screen
        name = "Privacy Control"
        component={Privacy}
        options={{
          drawerIcon: ({focused, size}) => (
             <MaterialIcons
                name="privacy-tip"
                size={20}
                color={'#fff'}
             />
          ),
       }}
        
       
      
        />
        <Drawer.Screen
        name = "Security Control"
        component={Security}
        options={{
          drawerIcon: ({focused, size}) => (
             <MaterialIcons
                name="security"
                size={20}
                color={'#fff'}
             />
          ),
       }}
        
       
      
        />
        <Drawer.Screen
        name = "Notification Setting"
        component={Notify}
        options={{
          drawerIcon: ({focused, size}) => (
             <EvilIcons
                name="bell"
                size={22}
                color={'#fff'}
             />
          ),
       }}
        
       
      
        />
        <Drawer.Screen
        name = "Help Center"
        component={Help}
        options={{
          drawerIcon: ({focused, size}) => (
             <Feather
                name="help-circle"
                size={20}
                color={'#fff'}
             />
          ),
       }}
        
       
      
        />
        
        
       
      
       
        
    </Drawer.Navigator>
    
    
  );
};

export default Appstack;

