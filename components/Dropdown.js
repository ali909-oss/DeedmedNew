import React, { useState } from "react";
import { View, Picker, StyleSheet, Icon,TouchableOpacity,Text } from "react-native";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';


const Drop = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue1, setSelectedValue1] = useState("");

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
               
            <View style={styles.container}>




                <Picker

                    selectedValue={selectedValue}

                    style={{ height: heightPercentageToDP('6%'), width: widthPercentageToDP('35%') }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}


                >
                    

                    <Picker.Item label="15 min" value="15" />
                    <Picker.Item label="30 min" value="30" />
                    <Picker.Item label="45 min" value="45" />
                    <Picker.Item label="60 min" value="60" />


                </Picker>
                
                
              

            </View>
            <View style={styles.design}>

<LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>

            
            <Ionicons name={'time-outline'} color={'white'} size={25}
            style={styles.time}
            
            />
            
            
                                    
            

                  </LinearGradient>
                  </View>
           


            <View style={styles.container1}>
                <Picker
                    selectedValue={selectedValue1}
                    style={{ height: heightPercentageToDP('6%'), width: widthPercentageToDP('35%') }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
                >
                    <Picker.Item label="15 min" value="15" />
                    <Picker.Item label="30 min" value="30" />
                    <Picker.Item label="45 min" value="45" />
                    <Picker.Item label="60 min" value="60" />


                </Picker>

            </View>
            <View style={styles.design}>

<LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>

            
            <Ionicons name={'time-outline'} color={'white'} size={25}
            style={styles.time}
            
            />
            
            
                                    
            

                  </LinearGradient>
                  </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.1,
        borderColor: 'black',
        borderRadius: 3,
    },
    pickerIcon: {
        color: 'blue',
        position: "absolute",
        bottom: 15,
        right: 10,
        fontSize: 20

    },
    container1: {
        borderWidth: 0.1,
        borderColor: 'black',
        borderRadius: 3,
        marginLeft: widthPercentageToDP('6%')
    },
    gradient: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,


      },
    input1:{
        height:hp('6%'),
        width:wp('13%'),
        borderColor:'#02a8ea',
        borderWidth:0.2,
        borderRadius:6,
        marginLeft:wp('-12%'),
        
    },
    time:{
        justifyContent:'center',
        textAlign:'center',
        marginTop:hp('0%')
    },
    design:{
        width:wp('9%'),
        height:hp('6%'),
        marginLeft:wp('-13%')
    },
   
    texta: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
        marginLeft:wp('-15%')
    },

});

export default Drop;