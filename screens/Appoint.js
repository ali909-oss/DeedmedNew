import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform,
  ScrollView,
  ImageBackground,
  Pressable,
  Image,
  TouchableOpacity
} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Fonts } from '../constants';
import Upcoming from '../components/Upcoming';
import Past from '../components/Past';
import {Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



function Appoint({navigation}) {
  const [tc1, setTc1] = useState(1);
  const [tc2, setTc2] = useState();
  const [flag, setFlag] = useState(0);

  const check_func = check => {
    if (check === 1) {
      return (
       <Upcoming/>
      );
    } else if (check === 0) {
      return (
      <Past/>
      );
    }
  };
  return (
    <View style={styles.screen}>
      {/* top_tab_bar_code => starts */}

      <View style={{width: wp('100%')}}>
      <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]}

          style={styles.container}>
          <View style={{width: wp('100%'),height:hp('10%')}}>
            {/* <ImageBackground
              source={require('../assets/Abstract-blue-wave-transparent-background.png')}
              resizeMode="cover"
              style={styles.image}> */}
              <View style={styles.header}>
                {/* <Pressable
                  style={styles.chevron}
                  onPress={() => navigation.goBack()}>
                  <Image source={require('../assets/Chevron-Right.png')} />
                </Pressable> */}
                 <View style={{flexDirection:'row',marginTop:hp('-2%'),marginLeft:wp('4%')}}>
          <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
           <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
           </TouchableOpacity>
            <Text style={styles.text}>Appointments</Text>
            </View>
              </View>
            {/* </ImageBackground> */}
          </View>
          <View style={styles.tabHeader}>
            <Pressable
              style={[
                styles.tabs,
                {backgroundColor: tc1 === 1 ? '#3F9CEF' : 'transparent'},
              ]}
              onPress={() => {
                setTc1(1);
                setTc2(0);
              }}>
              <Text style={styles.tabsText}>Upcoming</Text>
            </Pressable>
            <Pressable
              style={[
                styles.tabs,
                {backgroundColor: tc2 === 1 ? '#3F9CEF' : 'transparent'},
              ]}
              onPress={() => {
                setTc1(0);
                setTc2(1);
              }}>
              <Text style={styles.tabsText}>Past</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </View>
      {/* top_tab_bar_code => ends */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {check_func(tc1)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
      width:wp('100%'),
      height:hp('90%')
  },
  body: {
    padding: wp('4%'),
    // width: wp('100%'),
    // alignItems: 'center',
  },
  cardStyles: {
    marginVertical: wp('2%'),
  },

  // top_tab_bar_style => starts

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  tabsText: {
    fontFamily:Fonts.POPPINS_SEMI_BOLD,
    color:'#fff',
    fontSize: 18,
  },
  tabs: {
    flex: 1,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    padding: wp('3%'),
    borderRadius: 12,
    marginHorizontal: wp('1%'),
    //backgroundColor: '#ccc',
    //opacity: 0.5,
  },
  tabHeader: {
    flexDirection: 'row',
    padding: wp('2%'),
    //flex: 1,
    // alignItems: 'center',
    marginTop: windowHeight < 600 ? wp('-2.5%') : wp('-4.5%'),
    paddingBottom: wp('4%'),
  },
  container: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    width: wp('100%'),
  },
  image: {
    height: hp('10%'),
    width: wp('100%'),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('4%'),
    flex: 1,
    alignItems: 'center',
  },
  chevron: {
    backgroundColor: '#fff',
    padding: wp('2%'),
    borderRadius: 10,
    marginRight: wp('3%'),
  },
  titleText: {
    color:'#fff',
    fontFamily:Fonts.POPPINS_SEMI_BOLD,
    fontSize: 25,
  },
  // top_tab_bar_style => starts
  text:{
    fontSize:20,
    color:'white',
    padding:5,
    fontFamily:Fonts.POPPINS_SEMI_BOLD
},
});

export default Appoint;
