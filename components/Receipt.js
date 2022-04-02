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
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import Header from './Header';

const Data=[
    {
        img: require("../assets/icons/Recipt.png"),



    }
]

const Receipt = () => {
    const [month,setMonth]=useState('August')
    const navigation = useNavigation();



    return (
        <View style={styles.container}>
        <Header title="August Payment" onPress={()=> navigation.navigate("MonthEarn")} />


          
           
            <View style={{marginTop:hp('2%')}}>
            <ScrollView
                            showsVerticalScrollIndicator={false}

            >
                <View style={{alignSelf:'center'}}>
                <View style={styles.main}>
                <Image style={styles.imagehead} source={Data && Data[0].img} />


                </View>

                </View>
                
                </ScrollView>

            </View>

            </View>

)
}
export default Receipt;
const styles = StyleSheet.create({
container: {
    width: wp('100%'),
    height: hp('85%')
},
text: {
    fontSize: 25,
    color: 'white',
    padding: 5
},
header: {
    flex: 1,
},
img:{
    height:hp('10%'),
    width:wp('100%'),
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
},
main:{
    height:hp('85%'),
    width:wp('95%'),
    backgroundColor:'#ffffff',
    borderRadius:10,
    justifyContent:'center',alignItems:'center'
},
imagehead:{
    alignItems:'center',
    marginTop:hp('3%')

}

})