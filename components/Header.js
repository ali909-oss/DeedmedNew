import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';


import LinearGradient from 'react-native-linear-gradient';


import { Fonts } from '../constants';
function Header({title, onPress}) {
  return (
    <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.container}>
     
      <Image
        style={styles.image}
        source={require('../assets/icons/upWaves.png')}
     />
      <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
           <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
           </TouchableOpacity>
       
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
  },
  image: {
    height: hp('10%'),
    width:wp('100%'),
    resizeMode:"stretch"
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('5%'),
    flex: 1,
    alignItems: 'center',
  },
  
  titleText: {
    color:'#fff',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,

    fontSize: 20,
  },
});

export default Header;
