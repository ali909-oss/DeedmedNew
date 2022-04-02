import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
  } from 'react-native-responsive-screen';
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import Available from "../components/Available";
import Schedule from "../components/Schedule";
import SpecialTime from "../components/SpecialTime";
import LinearGradient from 'react-native-linear-gradient';
import Drop from "../components/Dropdown";
import { Fonts } from '../constants';
import Header from "../components/Header";




const Avail = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container }>
                    <Header title="Availability Settings" onPress={()=> navigation.navigate("HomeScreen")} />

       
        <View style={{marginTop:hp('2%')}}>

        <View style={styles.main}>
            <ScrollView
                            showsVerticalScrollIndicator={false}

            >
                  <View>
                      <Available/>
                    </View>
                
                    <View>
                    <Drop/>
                    </View>
                    <View style={{marginTop:hp('3%')}}>
                        <Schedule/>
                    </View>
                    <View style={{marginTop:hp('3%')}}>
                        <SpecialTime/>
                    </View>

                    <View style={{marginTop:hp('-2%'),alignItems:'center'}}>
                    <TouchableOpacity 
                     onPress={()=> navigation.navigate("HomeScreen")}
                    
                    style={styles.btn}>
                                 <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>
        <Text style={styles.textt}>Done</Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>



                </ScrollView>

            </View>
            </View>
         
        </View>
    )
}
export default Avail;

const styles = StyleSheet.create({
    container: {
      height: hp('100%'),
      width: wp('100%'),
    },
    img:{
        width: wp('100%'), 
        height: hp('12%') ,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
       

    },
    text:{
        fontSize:22,
        color:'white',
        fontFamily:Fonts.POPPINS_MEDIUM,
        padding:hp('1%')
    },
    
    header:{
        flex:1,
    },
    main: {
        height: hp('84%'),
        width: wp('90%'),
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 5,
        alignSelf:'center'
    },
    texta:{
        fontSize:16,
        textAlign:'auto',
        padding:5
    },
    btn: {
        width:wp('60%') ,
        height:hp('7%'),
       marginTop:hp('4%'),
       
      
      },
      textt: {
        color: 'white',
        fontSize: 18,
        fontFamily:Fonts.POPPINS_MEDIUM
      },
      gradient: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
      },

})  