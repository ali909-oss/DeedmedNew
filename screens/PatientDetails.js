import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ScrollView } from 'react-native-gesture-handler';
import { Fonts } from '../constants';
import UpcomingPatient from '../components/UpcomingPatient';
import PastPatient from '../components/PastPatient';
import Header from '../components/Header';

const Data=[
    {
        id: 1,
        image: require('../assets/icons/user.png'),
        name: 'Jannet Walton',
        status: 'gaurdian',
        appon: '25',
        Reviews:'15'
    }
]

const PatientD = () => {
    const Tab = createMaterialTopTabNavigator();
    const navigation = useNavigation();



    return (
        <View style={styles.container}>
                   

                   <Header title="Patient Details" onPress={()=> navigation.navigate("Patients")} />

            <ScrollView

                    style={{  marginTop: hp('2%') }}
                    >
            <View style={{ flex: 5 }}>
                <View style={styles.main}>
                {
                    Data.map( (item, index) => {

                        return (
                            <View>
                            <View style={{flexDirection:'row',marginTop:hp('1%'),marginLeft:wp('4%')}}>
                            <Image source={item.image} style={styles.image1} />
                            <View style={{flexDirection:'column',marginLeft:wp('5%')}}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.relation}>{item.status}</Text>
                            <TouchableOpacity onPress={()=> navigation.navigate("Reviews")}>
                                <View style={{
                                    flexDirection: 'row',padding:4,marginLeft:wp('30%')
                                }}>
                                      
                                    <Text style={styles.more}>See Reviews</Text>
                                    <AntDesign name={'doubleright'} size={9} color={'#c9cbd9'}
                                    style={{marginTop:hp('1%')}}
                                    
                                    />
                                </View>
                            </TouchableOpacity>
                            </View>
                            
                            </View>
                            <View style={styles.totalview}>

                            <View style={{flexDirection:'row'}}>

                                <View style={styles.view1}>
                                    <Text style={styles.texta}>{item.appon}</Text>
                                    <Text style={{ fontSize:14,textAlign:'center',fontFamily:Fonts.POPPINS_REGULAR}}>Appointments</Text>
                                </View>
                                <View style={styles.view2}>
                                    <Text style={styles.texta}>{item.Reviews}</Text>
                                    <Text style={{ fontSize:14,textAlign:'center',fontFamily:Fonts.POPPINS_REGULAR}}>Reviews</Text>
                                </View>


                            </View>
                            </View>
                            </View>



                        )
                    })
                } 

                </View>
                <View style={{flex:4,marginTop:hp('2%')}}>
            <Tab.Navigator tabBarOptions={{
                 indicatorStyle: {
                    backgroundColor: 'transparent'
                 },

        
        tabStyle: {
        marginTop:hp('1%'),
        },
        activeTintColor: 'black',
        pressColor:'white',
        labelStyle: { fontSize: 15,fontFamily:Fonts.POPPINS_SEMI_BOLD },
        style: { backgroundColor: 'white' },
      }}>
        
        <Tab.Screen name="Upcoming" component={UpcomingPatient} />
        <Tab.Screen name="Past" component={PastPatient} />

        
      </Tab.Navigator>
      </View>


            </View>
            </ScrollView>

        </View>

    )
}
export default PatientD;
const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('95%'),
        backgroundColor:'#f3f4f4'
    },
    main: {
        width: wp('90%'),
        borderRadius: 10,
        marginLeft: wp('5%'),
        padding: hp('2%'),
        backgroundColor:"#fff"
    },
    img: {
        width: wp('100%'),
        height: hp('10%'),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15


    },
    text: {
        fontSize: 25,
        color: 'white',
        padding: 5,
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    header: {
        flex: 1,
    },
    image1: {
        borderRadius: 20,
        height: hp('8%'),
        width: wp('14%')
    },
    name:{
        fontSize:18,
        color:'black',
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    relation:{
        color:'#a9afc3',
        fontSize:16,
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    more: {
        fontSize: 16,
        color: '#c9cbd9',
        textAlign: "center",
        fontFamily:Fonts.POPPINS_MEDIUM

    },
    view1:{
        height:hp('8%'),
        width:wp('30%'),
        borderRadius:5,
        backgroundColor:'#f9f9f9',
        elevation:1

    },
    view2:{
        height:hp('8%'),
        width:wp('30%'),
        borderRadius:5,
        backgroundColor:'#f9f9f9',
        marginLeft:wp('3%'),
        justifyContent:'center',
        alignItems:"center"

    },
    totalview:{
        height:hp('12%'),
        width:wp('65%'),
        borderRadius:5,
        backgroundColor:'#ffffff',
        elevation:1,
        justifyContent:'center',
        alignItems:'center'

    },
    texta:{
        fontSize:18,
        textAlign:'center',
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    }
})