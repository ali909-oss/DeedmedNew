import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Fonts } from '../constants';


const Earn =[
    {
        title:'5 Star',
        desc:'Reviews',
        price:'500',
        id:'1',
        image: require("../assets/icons/five.png"),

    
    }
] 

const Ratings = () => {
    return (
        <View>
            {
                Earn.map ((item,index) =>{
                    return(
                        <View style={{marginTop:hp('-15%')}}>
                                        <View style={styles.main}>
                                        <ImageBackground source={require('../assets/icons/pin.png')}
                            style={styles.img1}
                            imageStyle={{ opacity: 1}}
                            >
                            <View style={styles.Imageholder}>
                            <View style={{flexDirection:'column'}}>
                            <Text style={styles.name}>{item.title}</Text>
                            <Text style={styles.desc}>{item.desc}</Text>

                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Text style={styles.price}>{item.price}</Text>
                            <Image source={item.image} style={styles.image1} />
                            </View>


                            
                            
                            </View>
                            </ImageBackground>
                           

                        </View>
                        </View>
                    )
                })
            }

            </View>
    )
}

export default Ratings;


const styles = StyleSheet.create({

    main:{
        marginTop: hp('15%'),
        width: wp('90%'),
        padding:5,
        backgroundColor:'#38b6c7',
        borderRadius:5,
        alignSelf:'center'
    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:2,
    
        



    },
    name:{
        fontSize:16,
        color:'white',
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    desc:{
        fontSize:20,
        color:'white',
        fontFamily:Fonts.POPPINS_MEDIUM


    },
    price:{
        fontSize:25,
        color:'white',
        marginTop:hp('1%'),
        fontFamily:Fonts.POPPINS_MEDIUM


    },
    image1:{
        height:hp('10%'),
        width:wp('25%'),
        marginTop:hp('-5%')
    },
    img1:{
        width:wp('88%'),
        height:hp('10%'),
        resizeMode:'cover'
    }
})