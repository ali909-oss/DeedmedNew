import React,{useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity ,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import { Fonts } from "../constants";


// const gradientBackground  = '#085d87' '#27c7bb';


const Available = () => {
    
    return (
        <View >
            <View style={styles.row}>
                <Text style={styles.texta}>Consulation Time</Text>
                <Text style={styles.textb}>Gap Time</Text>
            </View>
            

        </View>
    )
}
export default Available;
const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
    },
    row: {
        flexDirection: 'row',
        justifyContent:'flex-start'

        
    },
    texta: {
        fontSize: 14,
        color: 'black',
        padding:5,
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    textb: {
        fontSize: 14,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color: 'black',
        marginLeft:wp('12%'),
        padding:5
    },
    

})