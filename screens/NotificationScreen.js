import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { Fonts } from '../constants';
import Header from '../components/Header';

const Data = [
  {
    name: 'Your next appointment',
    id: 1,
    details: 'Start at 3:00pm Today',
    page:'AppointmentDetails'
  },
  {
    name: 'New Review',
    id: 2,
    details: 'Ravindu Dhanan',
    page:'Reviews'
  },
  {
    name: 'Payment Recieved',
    id: 3,
    details: 'LKR 50,000',
  },
  {
    name: 'Cancel Appoinment',
    id: 5,
    details: 'Ravindu Dhanan',
  },
  {
    name: 'Visit Clinic',
    id: 5,
    details: 'Ravindu Dhanan',
    page:'AddComment'
  },
];

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
                                          <Header title="Notifications" onPress={()=> navigation.navigate("HomeScreen")} />

      <View style={{marginTop: hp('2%')}}>
        <View style={{height: hp('70%'), marginTop: hp('2%')}}>
          <FlatList
            data={Data}
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={()=> navigation.navigate(item.page)}>
                <View style={styles.main}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View  style={styles.text1}>
                   <Text style={styles.name} >{item.name} </Text> 
                   <Text style={styles.detail}>{item.details} </Text> 
                  </View>
                  <TouchableOpacity>
           <AntDesign style={styles.arrow} name={'doubleright'} size={20} color={'#9299b2'} />
           </TouchableOpacity>

                 
                  </View>
                </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default NotificationScreen;


const styles = StyleSheet.create({
  container: {
    height: hp('85%'),
    width: wp('100%'),
  },
  
  detail:{
    fontSize:15,
    color:'black',
    fontFamily:Fonts.POPPINS_SEMI_BOLD
  },
  name: {
    fontSize: 13,
    color:'#3d88eb',
    fontFamily:Fonts.POPPINS_MEDIUM
  },
  text1:{
    margin:7
  },
  main: {
    width: wp('90%'),
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: hp('1%'),
    alignSelf:'center'
  },

  view1: {
    backgroundColor: '#09a1ec',
    height: hp('10%'),
    borderBottomRightRadius: wp('3%'),
    borderBottomLeftRadius: wp('3%'),
  },
  img: {
    height: hp('5%'),
    width: wp('6%'),
    backgroundColor: 'white',
    marginLeft: wp('1%'),
  },
  text:{
    fontSize:25,
    color:'white',
    padding:5,
    fontFamily:Fonts.POPPINS_MEDIUM
},
  greater: {
    height: hp('5%'),
    width: wp('6%'),
    margin:18
  },
  arrow:{
      marginTop:hp('3%'),
      marginLeft:wp('5%'),
      padding:5
  }
});
