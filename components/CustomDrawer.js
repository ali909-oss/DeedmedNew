import React from "react";
import { View,Text, Image,StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList  } from "@react-navigation/drawer";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { DrawerActions } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/dist/Ionicons";

const Data=[{
    username:'John Wick',
    user_image: require("../assets/icons/image.png"),
    number:'0131-408763'

}]
const CustomDrawer =(props,navigation) => {

    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView
         {...props}
         contentContainerStyle={{backgroundColor:'#3766ce',padding:20 , height:hp('100%')
        }}>
        <Image style={styles.head} source={require('../assets/icons/head.png')} />

         <View style={{flexDirection:'row',marginTop:hp('-20%'),justifyContent:'space-around'}}>
         <Image style={styles.imagehead} source={Data && Data[0].user_image} />
        <View style={{flexDirection:'column'}}>
         <Text style={styles.texta}>{Data && Data[0].username}</Text>
         <Ionicons style={{marginLeft:wp('-17%')}}
           name={"call"} size={12} color="white" />
         <Text style={styles.phone}>{Data && Data[0].number}</Text>

         </View>
         <TouchableOpacity onPress={props.navigation.closeDrawer}>
         <Image style={styles.close} source={require('../assets/icons/closee.png')} />
         </TouchableOpacity>
         </View>
        
         <View style={{flex:1,marginTop:hp('2%')}}>
            <DrawerItemList {...props} />
            </View>
            <TouchableOpacity  style={{flexDirection:'row',padding:20}}>

<FontAwesome 
           name={"sign-out"} size={27} color="white" />
                      <Text  style={{color:'white',fontSize:22,marginLeft:wp('8%'),fontWeight:'bold'}}>LogOut</Text>

           </TouchableOpacity>
            <View>
            <Image style={styles.foot} source={require('../assets/icons/foot.png')} />
            </View>
            

            </DrawerContentScrollView>
          
          
           
       </View>
        
    )
}

export default CustomDrawer;

const styles=StyleSheet.create ({
    imagehead: {
        height: hp('8%'),
        width: wp('15%'),
        borderRadius: 12,
        marginLeft:wp('-5%')



    },
    texta:{
        fontWeight:'500',
        fontSize:18,
        color:'white',
        marginLeft:wp('-18%'),
        padding:4



    },
    phone:{
        fontWeight:'500',
        fontSize:14,
        color:'white',
        marginLeft:wp('-13%'),
        marginTop:hp('-2%')



    },
    close:{
        marginLeft:wp('10%')
    },
    foot:{
        marginTop:hp('-20%')
    }
   

})