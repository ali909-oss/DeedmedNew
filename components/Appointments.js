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
        user_name: 'Dr. Crick',
        id: '1',
        status: 'online',
        user_img: require("../assets/icons/user.png"),
        purpose: 'Report Reading',
        time: '2:20pm',
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
]

const Appoint = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ marginTop: hp('-1%'), height: hp('35%') }}>
                <FlatList
                nestedScrollEnabled={true}

                    data={Data}
                    keyExtractor={(item) => { item.id }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.main}>
                                <View style={styles.Imageholder}>
                                    <Text style={styles.consult}>{item.consult}</Text>
                                    <View>
                                        <Text style={{ fontSize: 12 ,fontFamily:Fonts.POPPINS_REGULAR}}>Date</Text>
                                        <Text style={{fontFamily:Fonts.POPPINS_REGULAR}}>{item.date}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 12 ,fontFamily:Fonts.POPPINS_REGULAR}}>Time</Text>
                                        <Text style={{fontFamily:Fonts.POPPINS_REGULAR}}>{item.time}</Text>

                                    </View>


                                </View>
                                <View style={styles.Imageholder1}>
                                    <Image style={styles.image} source={item.user_img} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.name}>{item.user_name}</Text>
                                        <Text style={{fontFamily:Fonts.POPPINS_REGULAR}}>{item.status}</Text>


                                    </View>
                                    <View style={{ padding: 5 }}>
                                        <Text style={{ fontFamily:Fonts.POPPINS_SEMI_BOLD, fontSize: 16, textAlign: 'center' }}>Purpose</Text>
                                        <Text style={{ fontFamily:Fonts.POPPINS_REGULAR,fontSize: 12, color: '#a8aec1' }}>{item.purpose}</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={{
                                            flexDirection: 'row',padding:4,
                                        }}>
                                            <TouchableOpacity onPress={()=> navigation.navigate("AppointmentDetails")}>

                                            <Text style={styles.more}>More Info</Text>
                                            </TouchableOpacity>
                                            <AntDesign name={'doubleright'} size={15} color={'#448dec'}
                                            style={{marginTop:hp('1%')}}
                                            
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>











                        )
                    }} />
            </View>
        </View>
    )
}

export default Appoint;

const styles = StyleSheet.create({


    main: {
        marginTop: hp('3'),
        width: wp('94%'),
        padding: 5,
        marginBottom:hp('-2%'),
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: wp('3%')
    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        backgroundColor: '#dde4ec'




    },
    Imageholder1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,




    },
    consult: {
        fontSize: 18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    image: {
        borderRadius: 20,
        height: hp('6%'),
        width: wp('10%')
    },
    name: {
        fontSize: 18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    },
    more: {
        fontSize: 18,
        color: '#448dec',
        textAlign: "center",
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    }

})