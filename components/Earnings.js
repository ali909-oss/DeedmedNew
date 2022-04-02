import React ,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { Fonts } from '../constants';


const Earn =[
    {
        title:'Earning',
        desc:'This Week',
        price:'$1500.00',
        id:"1"
    }
]
 
const Earnings = () => {
    const [amount,setAmount] =useState('1500.00')
    return (
        <View>
            {
                Earn.map ((item,index) =>{
                    return(
                        <View style={{marginTop:hp('-15%'),alignSelf:'center'}}>
                          
                                        <View style={styles.main}>
                                       
                                        <ImageBackground source={require('../assets/icons/pinn.png')}
                            style={styles.img1}
                            imageStyle={{ opacity: 0.2}}
                            >
                            <View style={styles.Imageholder}>
                            
                           
                                <View style={{flexDirection:'column'}}>
                            <Text style={styles.name}>{item.title}</Text>
                            <Text style={styles.desc}>{item.desc}</Text>
                            </View>
                            <Text style={styles.price}>${amount}</Text>

                            
                            
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

export default Earnings;


const styles = StyleSheet.create({

    main:{
        marginTop: hp('15%'),
        height:hp('10%'),
        width: wp('90%'),
        backgroundColor:'#0466e6',
        borderRadius:5
    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:2,
        



    },
    img1:{
        // marginTop:hp('-8%'),
        width:wp('90%'),
        resizeMode:"contain"

    },
    name:{
        fontSize:14,
        color:'white',
        padding:2,
        fontFamily:Fonts.POPPINS_MEDIUM,
        
    },
    desc:{
        fontSize:16,
        color:'white',
        fontFamily:Fonts.POPPINS_MEDIUM

    },
    price:{
        fontSize:25,
        color:'white',
        padding:3,
        marginTop:hp('1%'),
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    }
})