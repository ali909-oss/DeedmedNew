import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../constants';

const Data = [
    {
        user_name: 'Ravindhu',
        id: '1',
        status: 'online',
        user_img: require("../assets/icons/user.png"),
        date: '03 Jan 2022',
        consult: 'Fever Consultation',
        price:'LKR 2500'

    },
    {
        user_name: 'Hannah',
        id: '2',
        status: 'online',
        user_img: require("../assets/icons/image.png"),
        date: '03 Jan 2022',
        consult: 'Eye Care Consultation',
        price:'LKR 2000'


    },
    {
        user_name: 'Ravindhu',
        status: 'online',
        id: '3',
        user_img: require("../assets/icons/user.png"),
        date: '03 Jan 2022',
        consult: 'Fever Consultation',
        price:'LKR 2500'


    },
    {
        user_name: 'Hannah',
        status: 'online',
        id: '4',
        user_img: require("../assets/icons/user.png"),
        date: '03 Jan 2022',
        consult: 'Eye Care Consultation',
        price:'LKR 2000'


    },
    {
        user_name: 'Ravindhu',
        status: 'online',
        id: '4',
        user_img: require("../assets/icons/image.png"),
        date: '03 Jan 2022',
        consult: 'Fever Consultation',
        price:'LKR 2000'


    },
]

const Payment = () => {
    const navigation = useNavigation();

    return (
        <View style={{height:hp('75%')}}>
        <FlatList
                                            nestedScrollEnabled={true}
                                            showsVerticalScrollIndicator={false}


            data={Data}
            keyExtractor={(item) => { item.id }}
            renderItem={({ item }) => {
                return (
                    <View style={styles.main}>
                        <View style={styles.Imageholder}>
                            <Text style={styles.consult}>{item.consult}</Text>
                            
                        </View>
                        <View style={styles.Imageholder1}>
                            <Image style={styles.image} source={item.user_img} />
                            <View style={{ flexDirection: 'column'}}>
                                <Text style={styles.name}>{item.user_name}</Text>
                                <Text style={{fontSize: 10,color: '#a8aec1',fontFamily:Fonts.POPPINS_REGULAR }}>{item.status}</Text>


                            </View>
                            <View style={{ padding: 2 }}>
                                <Text style={{ fontFamily:Fonts.POPPINS_REGULAR, fontSize: 10,color: '#a8aec1'  }}>Date</Text>
                                <Text style={{ fontSize: 12, color: 'black',fontFamily:Fonts.POPPINS_SEMI_BOLD }}>{item.date}</Text>
                            </View>
                            
                                      
                                    <Text style={styles.more}>{item.price}</Text>
                                    
                        </View>
                    </View>











                )
            }} />
    </View>

    )
}

export default Payment;

const styles = StyleSheet.create({

    container:{
        width:wp('100%'),
        height:hp('90%')

    },


    main: {
        marginTop: hp('2%'),
        width: wp('94%'),
        padding: 8,
        marginBottom:hp('-1%'),
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf:'center'
    },
    Imageholder: {
       
        padding: 5,
        backgroundColor: '#f9f9f9'




    },
    Imageholder1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,




    },
    consult: {
        fontSize: 14,
        padding:2,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,

    },
    image: {
        borderRadius: 50,
        height: hp('6%'),
        width: wp('10%')
    },
    name: {
        fontSize: 13,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        padding:1,
    },
    more: {
        fontSize: 14,
        color: '#5396ee',
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    }

})