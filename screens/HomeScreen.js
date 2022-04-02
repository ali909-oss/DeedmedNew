import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


import Earnings from '../components/Earnings';
import Ratings from '../components/Ratings';
import Appoint from '../components/Appointments';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../constants';
import { FONTS } from '../constants';
import Searchbar from '../components/Searchbar';
import UpcomingHome from '../components/UpcomingHome';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
const User = [
    {
        name: 'Ajith',
        des: 'Happy Consulting',
        user_image: require("../assets/icons/image.png"),
    }
]

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{}}>
                <ImageBackground style={styles.img} source={require('../assets/icons/bg.png')}
                
                >
                {
                    User.map((item, index) => {
                        return (
                                <View style={{ marginTop: hp('5%'), flexDirection:'row',justifyContent:'space-around' }}>
                                    <Image source={item.user_image} style={styles.image1} />
                                    <View style={{ marginLeft: wp('2%'), marginTop: hp('2%') }}>
                                        <Text style={styles.name}>Hi Doctor {item.name}</Text>
                                        <Text style={styles.desc}>{item.des}</Text>
                                    </View>
                                    <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                                    <Image style={styles.menu} source={require('../assets/icons/deedmeddraw.png')} />
                                    </TouchableOpacity>



                                </View> 
                        )
                    })
                }
                </ImageBackground>
                <View style={{marginTop:hp('-2%')}}>
               <Searchbar/>
               </View>
            </View>
            <View style={{flex:3}}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                >

                <View style={{ marginTop: hp('2%') }}>
                    <Text style={styles.texta}>Your Earnings</Text>
                    <Earnings />
                </View>
                <View style={{ marginTop: hp('1%') }}>
                    <Ratings />
                </View>

                <View style={{ marginTop: hp('1%') }}>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between',padding:wp('1%') }}>
                        <View>
                        <Text style={styles.text}>Upcoming Appointments</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Appointments")}>
                        <View style={{
            paddingHorizontal: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"}}>
                            <Text style={styles.textb}>See all</Text>
                            <AntDesign name={'doubleright'} size={12} color={'#9fa6ba'}
                                    style={{marginTop:-2}}
                                    
                                    />
                                    </View>
                                    </TouchableOpacity>
                    </View>
                    <View style={{marginTop:hp('-3%')}}>
                    <UpcomingHome />
                    </View>
                </View>
            </ScrollView>
            </View>

        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('90%')
    },
    img: {
        width: wp('100%'),
        height: hp('20%'),
        
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20

    },
    name: {
        color: 'white',
        fontSize: 18,
        fontFamily:Fonts.POPPINS_MEDIUM


    },
    desc: {
        color: '#fdfeff',
        fontSize: 20,
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    },
    input: {
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#ffffff',
        width: wp('90%'),
        height: hp('8%'),
        marginTop: hp('2%'),
        backgroundColor: '#ffffff',
        marginLeft: wp('5%'),
        textAlign: 'center'


    },
    searchIcon: {
        padding: 10,
        marginTop: hp('-7%'),
        marginLeft: wp('5%')


    },
    texta: {
        fontSize: 16,
        padding: 5,
        marginLeft: wp('3%'),
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:'black'

        

    },
    text: {
        fontSize: 16,
        color: 'black',
        padding: 5,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,

    },
    textb: {
        fontSize: 15,
        color: '#9fa6ba',
        padding: 5,
        fontFamily:Fonts.POPPINS_REGULAR



    },
    menu: {
        height: hp('4%'),
        width: wp('8%'),
    
    }



})