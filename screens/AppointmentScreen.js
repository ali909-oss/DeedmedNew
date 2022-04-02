import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Upcoming from '../components/Upcoming';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Appoint from '../components/Appointments';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Past from '../components/Past';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../constants';
 
const AppointmentScreen = () => {
    const Tab = createMaterialTopTabNavigator();
    const navigation = useNavigation();


    return (
        <View style={styles.container }>
            <View  style={styles.header}>
            <Image style={styles.img} source={require('../assets/icons/bg.png')} />
            <View style={{flexDirection:'row',marginTop:hp('-8%'),marginLeft:wp('4%')}}>
          <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
           <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
           </TouchableOpacity>
            <Text style={styles.text}>Appointments</Text>
            </View>
           
           
            
            </View>
            <View style={{flex:8}}>
            <Tab.Navigator tabBarOptions={{
                 indicatorStyle: {
                    backgroundColor: 'transparent'
                 },

        
        tabStyle: {
        marginTop:hp('1%'),
        borderTopWidth: 0 
        },
        
       
        activeTintColor: 'white',
        pressColor:'white',
        labelStyle: { fontSize: 18,fontFamily:Fonts.POPPINS_SEMI_BOLD,textTransform:null,borderRadius:20 },
        style: { backgroundColor: '#0293e9', borderTopWidth: 0,elevation:0,borderTopColor: 'transparent' },
      }}>
        
        <Tab.Screen name="Upcoming" component={Upcoming} />
        <Tab.Screen name="Past" component={Past} />

        
      </Tab.Navigator>
      </View>
            

            
                    </View>
    )
}

export default AppointmentScreen;

const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('90%')
    },
    img:{
        width: wp('100%'), 
        height: hp('10%') ,
       

    },
    text:{
        fontSize:25,
        color:'white',
        padding:5
    },
    header:{
        flex:1,
    }
})