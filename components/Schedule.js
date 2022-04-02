import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import Ionicons from "react-native-vector-icons/dist/Ionicons";
import ensureNativeModuleAvailable from "react-native-vector-icons/dist/lib/ensure-native-module-available";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Switch } from "react-native-gesture-handler";
import { Fonts } from "../constants";

// const gradientBackground  = '#085d87' '#27c7bb';


const Schedule = () => {
    const navigation = useNavigation();
    const [switchValue,setswitchValue]=useState(false);
    const [switchValue1,setswitchValue1]=useState(false);
    const [switchValue2,setswitchValue2]=useState(false);
    const [switchValue3,setswitchValue3]=useState(false);
    const [switchValue4,setswitchValue4]=useState(false);
    const [switchValue5,setswitchValue5]=useState(false);
    const [switchValue6,setswitchValue6]=useState(false);







    const toggleSwitch =(value) =>{
        setswitchValue(value);
    }
    const toggleSwitch1 =(value) =>{
        setswitchValue1(value);
    }
    const toggleSwitch2 =(value) =>{
        setswitchValue2(value);
    }
    const toggleSwitch3 =(value) =>{
        setswitchValue3(value);
    }
    const toggleSwitch4 =(value) =>{
        setswitchValue4(value);
    }
    const toggleSwitch5 =(value) =>{
        setswitchValue5(value);
    }
    const toggleSwitch6 =(value) =>{
        setswitchValue6(value);
    }

    return (
        <View >
            <Text style={styles.texta}>Available Days</Text>

            {/* Sunday */}
            <View>
            <View style={styles.row}>
            <Text style={styles.textb}>Sunday</Text>
            <Switch
            trackColor={{ false: "#cfcfcf", true: "#a5c8fb" }}
            thumbColor={switchValue ? "#1390e3" : "#909090"}
           
         
            style={styles.switch}
            onValueChange={toggleSwitch}
            value={switchValue}
            />
            <Text style={styles.textc}>
                {switchValue ? 'Open' :'Closed'}
                </Text>
                <TouchableOpacity>
            <Text style={styles.textd}>Add Hours</Text>
            </TouchableOpacity>






            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Morning Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Evening Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View
  style={{
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.2,
    marginTop:hp('2%')
  }}
/>
            </View>

            {/* Monday */}

            <View style={{marginTop:hp('2%')}}>
            <View style={styles.row}>
            <Text style={styles.textb}>Monday</Text>
            <Switch
            trackColor={{ false: "#cfcfcf", true: "#a5c8fb" }}
            thumbColor={switchValue1 ? "#1390e3" : "#909090"}
         
            style={styles.switch}
            onValueChange={toggleSwitch1}
            value={switchValue1}
            />
            <Text style={styles.textc}>
                {switchValue1 ? 'Open' :'Closed'}
                </Text>
                <TouchableOpacity>
            <Text style={styles.textd}>Add Hours</Text>
            </TouchableOpacity>






            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Morning Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Evening Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View
  style={{
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.2,
    marginTop:hp('2%')
  }}
/>
            </View>
            {/* Tuesday */}

            <View style={{marginTop:hp('2%')}}>
            <View style={styles.row}>
            <Text style={styles.textb}>Tuesday</Text>
            <Switch
            trackColor={{ false: "#cfcfcf", true: "#a5c8fb" }}
            thumbColor={switchValue2 ? "#1390e3" : "#909090"}
         
            style={styles.switch}
            onValueChange={toggleSwitch2}
            value={switchValue2}
            />
            <Text style={styles.textc}>
                {switchValue2 ? 'Open' :'Closed'}
                </Text>
                <TouchableOpacity>
            <Text style={styles.textd}>Add Hours</Text>
            </TouchableOpacity>






            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Morning Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Evening Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View
  style={{
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.2,
    marginTop:hp('2%')
  }}
/>
            </View>

            {/* Wednesday */}
            
            <View style={{marginTop:hp('2%')}}>
            <View style={styles.row}>
            <Text style={styles.textb}>Wednesday</Text>
            <Switch
             trackColor={{ false: "#cfcfcf", true: "#a5c8fb" }}
             thumbColor={switchValue3 ? "#1390e3" : "#909090"}
         
            style={styles.switch}
            onValueChange={toggleSwitch3}
            value={switchValue3}
            />
            <Text style={styles.textc}>
                {switchValue3 ? 'Open' :'Closed'}
                </Text>
                <TouchableOpacity>
            <Text style={styles.textd}>Add Hours</Text>
            </TouchableOpacity>






            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Morning Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Evening Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View
  style={{
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.2,
    marginTop:hp('2%')
  }}
/>
            </View>

            {/* Thursday */}

            
            <View style={{marginTop:hp('2%')}}>
            <View style={styles.row}>
            <Text style={styles.textb}>Thursday</Text>
            <Switch
             trackColor={{ false: "#cfcfcf", true: "#a5c8fb" }}
             thumbColor={switchValue4 ? "#1390e3" : "#909090"}
         
            style={styles.switch}
            onValueChange={toggleSwitch4}
            value={switchValue4}
            />
            <Text style={styles.textc}>
                {switchValue4 ? 'Open' :'Closed'}
                </Text>
                <TouchableOpacity>
            <Text style={styles.textd}>Add Hours</Text>
            </TouchableOpacity>






            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Morning Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Evening Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View
  style={{
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.2,
    marginTop:hp('2%')
  }}
/>
            </View>

            {/* Friday */}
            <View style={{marginTop:hp('2%')}}>
            <View style={styles.row}>
            <Text style={styles.textb}>Friday</Text>
            <Switch
            trackColor={{ false: "#cfcfcf", true: "#a5c8fb" }}
            thumbColor={switchValue5 ? "#1390e3" : "#909090"}
         
            style={styles.switch}
            onValueChange={toggleSwitch5}
            value={switchValue5}
            />
            <Text style={styles.textc}>
                {switchValue5 ? 'Open' :'Closed'}
                </Text>
                <TouchableOpacity>
            <Text style={styles.textd}>Add Hours</Text>
            </TouchableOpacity>






            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Morning Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Evening Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View
  style={{
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.2,
    marginTop:hp('2%')
  }}
/>
            </View>

            {/* Saturday */}
            
            <View style={{marginTop:hp('2%')}}>
            <View style={styles.row}>
            <Text style={styles.textb}>Saturday</Text>
            <Switch
             trackColor={{ false: "#cfcfcf", true: "#a5c8fb" }}
             thumbColor={switchValue6 ? "#1390e3" : "#909090"}
         
            style={styles.switch}
            onValueChange={toggleSwitch6}
            value={switchValue6}
            />
            <Text style={styles.textc}>
                {switchValue6 ? 'Open' :'Closed'}
                </Text>
                <TouchableOpacity>
            <Text style={styles.textd}>Add Hours</Text>
            </TouchableOpacity>






            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Morning Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.slots}>Evening Slots</Text>
            <View style={styles.row1}>
            <View style={{marginLeft:wp('30%')}}>
                    <TextInput
                        placeholder="9.00 am"
                        style={styles.input}


                    />
                    </View>
                    <View>
                    <TextInput
                        placeholder="8.00 pm"
                        style={styles.input}


                    />
                    </View>

            </View>
            </View>
            <View
  style={{
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.2,
    marginTop:hp('2%')
  }}
/>
            </View>

        </View>
    )
}
export default Schedule;
const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:hp('2%'),
        padding:wp('2%')
    },
    texta: {
        fontSize: 14,
        color: 'black',
        marginLeft:wp('4%'),
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    textb:{
        fontSize:13,
        color:'#868686',
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    textc:{
        fontSize:14,
        color:'#868686',
        marginLeft:wp('-8%'),
        fontFamily:Fonts.POPPINS_REGULAR
    },
    textd:{
        fontSize:14,
        color:'#1390e3',
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    },
    slots:{
        textAlign:'center',
        fontSize:13,
        color:'#9f9f9f',
        padding:1,
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    },
    input: {
        borderRadius: 5,
        width: wp('25%'),
        height: hp('7%'),
        textAlign: 'center',
        color:'#999999',
        borderColor:'black',
        borderWidth:1


    },
    
    row1: {
        flexDirection: 'row',
        justifyContent:'space-around'
    
    
    },
    
  
    


})