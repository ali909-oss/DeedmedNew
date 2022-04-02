import React, { useState } from 'react';
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
        user_name: 'Dr. Crick',
        id: '1',
        status: 'online',
        user_img: require("../assets/icons/user.png"),
        purpose: 'Report Reading',
        time: '2:30pm',
        date: '03 Jan 2022',
        consult: 'Fever Consultation'

    },
    {
        user_name: 'Dr. Crick',
        id: '2',
        status: 'online',
        user_img: require("../assets/icons/user.png"),
        purpose: 'Report Reading',
        time: '2:20pm',
        date: '03 Jan 2022',
        consult: 'Fever Consultation'

    },
    {
        user_name: 'Dr. Crick',
        status: 'online',
        id: '3',
        user_img: require("../assets/icons/user.png"),
        purpose: 'Report Reading',
        time: '2:20pm',
        date: '03 Jan 2022',
        consult: 'Fever Consultation'

    },
    {
        user_name: 'Dr. Crick',
        status: 'online',
        id: '4',
        user_img: require("../assets/icons/user.png"),
        purpose: 'Report Reading',
        time: '2:20pm',
        date: '03 Jan 2022',
        consult: 'Fever Consultation'

    },
    {
        user_name: 'Dr. Crick',
        status: 'online',
        id: '4',
        user_img: require("../assets/icons/user.png"),
        purpose: 'Report Reading',
        time: '2:20pm',
        date: '03 Jan 2022',
        consult: 'Fever Consultation'

    },
]

const Past = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    console.log(Status);

    return (
        <View style={{height:hp('75%'),marginBottom:hp('5%')}}>
        <FlatList
                                            nestedScrollEnabled={true}
                                            showsVerticalScrollIndicator={false}


            data={Data}
            keyExtractor={(item) => { item.id }}
            renderItem={({ item }) => {
                return (

                    <View style={styles.main}>
                        <View style={styles.Imageholder }>
                            <Text style={styles.consult }>{item.consult}</Text>
                            <View>
                                <Text style={{fontSize: 10,fontFamily:Fonts.POPPINS_MEDIUM }}>Date</Text>
                                <Text style={{fontSize: 12,fontFamily:Fonts.POPPINS_MEDIUM}}>{item.date}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 10 ,fontFamily:Fonts.POPPINS_MEDIUM }}>Time</Text>
                                <Text style={{fontSize: 12,fontFamily:Fonts.POPPINS_MEDIUM} }>{item.time}</Text>

                            </View>


                        </View>
                        <View style={styles.Imageholder1}>
                            <Image style={styles.image} source={item.user_img} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.name}>{item.user_name}</Text>
                                <Text style={{fontFamily:Fonts.POPPINS_MEDIUM,color:'#677294',fontSize:10}}>{item.status}</Text>


                            </View>
                            <View style={{ padding: 2 }}>
                                <Text style={{ fontFamily:Fonts.POPPINS_SEMI_BOLD, fontSize: 12, textAlign: 'center' }}>Purpose</Text>
                                <Text style={{ fontSize: 10, color: '#a8aec1' ,fontFamily:Fonts.POPPINS_MEDIUM}}>{item.purpose}</Text>
                            </View>
                            <TouchableOpacity onPress={()=> navigation.navigate("Pastinfo")}>
                                <View style={{
                                     paddingHorizontal: 5,
                                     flexDirection: "row",
                                     justifyContent: "space-between",
                                     alignItems: "center",
                                     marginTop:hp('2%')
                                }}>
                                      
                                    <Text style={styles.more}>More Info</Text>
                                    <AntDesign name={'doubleright'} size={14} color={'#448dec'}
                                    style={{marginTop:-2}}
                                    
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>











                )
            }} />
    </View>

    )
}

export default Past;

const styles = StyleSheet.create({

    


    main: {
        
        marginTop: hp('3'),
        width: wp('94%'),
        padding: 5,
        marginBottom:hp('-1%'),
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf:'center'
    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 1,
        backgroundColor: '#f9f9f9'




    },
    backnew:{
        backgroundColor: '#FF8139',
        borderRadius:5


    },
    Imageholder1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 3,




    },
    consult: {
        fontSize: 13,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        alignSelf:'center'
    },
    consultnew:{
        color:'#fff'

    },
    image: {
        borderRadius: 50,
        height: hp('5%'),
        width: wp('10%'),
        alignSelf:'center'
    },
    name: {
        fontSize: 13,
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    },
    more: {
        fontSize: 13,
        color: '#448dec',
        textAlign: "center",
        fontFamily:Fonts.POPPINS_SEMI_BOLD


    }

})