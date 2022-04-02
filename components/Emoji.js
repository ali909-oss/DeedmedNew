import React ,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
    FlatList
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Data=[
    {
        title:"Love it",
        image: require("../assets/icons/Bitmap.png"),
    },
    {
        title:"Awesome",
        image: require("../assets/icons/Bitmap1.png"),

    },
    {
        title:"Not Bad",
        image: require("../assets/icons/Bitmap2.png"),

    },
    {
        title:"Nice Work",
        image: require("../assets/icons/Bitmap3.png"),

    },
]

const Emoji = () => {
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    console.log(Status);
   

     return (
         <View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {
                      Data.map((item, index) => {
                          return (
                              <View
                                  style={{
  
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      marginTop: hp('2%'),
                                      width: widthPercentageToDP('20%'),
                                      height: hp('5%'),
                                      borderRadius: 10,
                                      marginBottom: 1,
  
  
                                  }}>
                                  <TouchableOpacity onPress={() => { SetStatusfunc(item.title) }}>
                                      <View
                                          style={{ justifyContent: 'center', alignItems: 'center' }}>
                                          <View
                                              style={[
                                                  Status === item.title ? styles.contt : styles.mainview,
                                              ]}>
                                             <View style={[styles.view ,Status === item.title ? styles.cont : styles.view, ]}>

<Image source={item.image} style={styles.image1} />


</View>
                                              
                                          </View>
                                          
                                      </View>
                                      <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    textAlign: 'center',
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  {item.title}
                </Text>
                                  </TouchableOpacity>
                                 
                                 
                              </View>
                               
                          )}
                      )}
                      </View>
       
    </View>

     )}

export default Emoji;

const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('90%')
    },
    view:{
        height:hp('8%'),
        width:wp('15%'),
        borderRadius:50,
        backgroundColor:'#ffffff',
        color:'#93abb8',
        justifyContent:'center',
        alignItems:'center'
    
        
        


    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent:'space-around',alignItems:'center',
        marginTop:hp('2%'),


    },
    title:{
        fontSize:15,
        marginLeft:wp('3%'),padding:3
    },
    cont:{
        borderColor:'black',
        borderWidth:2
    }
    
})