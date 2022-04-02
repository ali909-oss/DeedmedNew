import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { Switch } from "react-native-gesture-handler";
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from "../constants";
import { TextInput } from 'react-native-paper';




const SpecialTime = () => {
    const navigation = useNavigation();
    const [switchValue, setswitchValue] = useState(false);
    const [switchValue1, setswitchValue1] = useState(false);

    const toggleSwitch = (value) => {
        setswitchValue(value);
    }
    const toggleSwitch1 = (value) => {
        setswitchValue1(value);
    }

    const [selectedDate, setselectedDate] = useState("");
    const [selectedDate1, setselectedDate1] = useState("");

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const showDatePicker1 = () => {
        setDatePickerVisibility1(true);
    };

    const hideDatePicker1 = () => {
        setDatePickerVisibility1(false);
    };


    const handleDate = (date) => {
        setselectedDate(date.toDateString());
        hideDatePicker();
    };
    const handleDate1 = (date1) => {
        setselectedDate1(date1.toDateString());
        hideDatePicker1();
    };
    return (
        <View>
            <Text style={styles.texta}>Special Hours</Text>
            <View style={{ marginTop: hp('2%') }}>
                <View style={styles.row}>


                <View>
                <TextInput
      style={styles.input}
      placeholder={selectedDate}

      placeholderTextColor={'#b7bdcd'}
      right={<TextInput.Icon name={() => 
        <TouchableOpacity onPress={showDatePicker}>
      <EvilIcons  name={'calendar'} size={33} color="blue" />
      </TouchableOpacity>
      } />}
     

      
    > <Text style={styles.caltext}>{selectedDate}</Text> </TextInput>
    <DateTimePickerModal
    isVisible={isDatePickerVisible}
    mode="date"
    onConfirm={handleDate}
    onCancel={hideDatePicker}
/>
</View>
                    <View>
                        <Switch
                            trackColor={{ false: "#cfcfcf", true: "#a5c8fb" }}
                            thumbColor={switchValue ? "#1390e3" : "#909090"}


                            style={styles.switch}
                            onValueChange={toggleSwitch}
                            value={switchValue}
                        />
                    </View>
                    <View>
                        <Text style={styles.textc}>
                            {switchValue ? 'Open' : 'Closed'}
                        </Text>
                    </View>
                </View>



            </View>

            <View style={{ marginTop: hp('2%') }}>
                <View style={styles.row}>
<View>
                <TextInput
      style={styles.input}
      placeholder={selectedDate1}

      right={<TextInput.Icon name={() => 
        <TouchableOpacity onPress={showDatePicker1}>
      <EvilIcons  name={'calendar'} size={33} color="blue" />

      </TouchableOpacity>
      } />}
     

      
    > <Text style={styles.caltext}>{selectedDate1}</Text>  </TextInput>
    <DateTimePickerModal
    isVisible={isDatePickerVisible1}
    mode="date"
    onConfirm={handleDate1}
    onCancel={hideDatePicker1}
/>
</View>
    
                

                  


                    <View>
                        <Switch
                            trackColor={{ false: "#cfcfcf", true: "#a5c8fb" }}
                            thumbColor={switchValue1 ? "#1390e3" : "#909090"}


                            style={styles.switch}
                            onValueChange={toggleSwitch1}
                            value={switchValue1}
                        />
                    </View>
                    <View>
                        <Text style={styles.textc}>
                            {switchValue1 ? 'Open' : 'Closed'}
                        </Text>
                    </View>



                </View>
            </View>
            <View style={{ marginTop: hp('2%') }}>
                <Text style={styles.slots}>Morning Slots</Text>
                <View style={styles.row1}>
                    <View style={{ marginLeft: wp('-2%') }}>
                        <TextInput
                            placeholder="9.00 am"
                            style={styles.input2}


                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder="8.00 pm"
                            style={styles.input3}


                        />
                    </View>

                </View>
            </View>
            <View style={{ marginTop: hp('2%') }}>
                <Text style={styles.slots}>Evening Slots</Text>
                <View style={styles.row1}>
                    <View style={{ marginLeft: wp('-2%') }}>
                        <TextInput
                            placeholder="9.00 am"
                            style={styles.input2}


                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder="8.00 pm"
                            style={styles.input3}


                        />
                    </View>

                </View>
            </View>
            <TouchableOpacity>
                <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                    <View>
                        <Text style={styles.add}>Add more</Text>
                    </View>
                    <View>
                        <Ionicons name={'add-circle'} color={'#0b6ae7'} size={20}

                            style={styles.addicon}

                        />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default SpecialTime;

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
    },
    texta: {
        fontSize: 15,
        color: '#767676',
        marginLeft: wp('8%'),
        fontFamily: Fonts.POPPINS_SEMI_BOLD
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    input: {
        borderWidth: 0.2,
        borderColor: 'black',
        width: wp('45%'),
        height: hp('6%'),
        backgroundColor: '#ffffff',
        marginLeft: wp('-2%'),
        textAlign: 'left',
        elevation:2


    },
    input1: {
        height: hp('8%'),
        width: wp('12%'),

    },
    time: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: hp('1%')
    },
    textc: {
        fontSize: 15,
        color: '#868686',
        marginLeft: wp('-8%'),
        fontFamily: Fonts.POPPINS_REGULAR
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('12%'),
        
        


    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-around'


    },
    slots: {
        fontSize: 12,
        color: '#9f9f9f',
        marginLeft: wp('2%'),
        padding: 2,
        fontFamily: Fonts.POPPINS_SEMI_BOLD
    },
    input2: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        width: wp('30%'),
        height: hp('7%'),
        textAlign: 'center',
        color: '#999999',
        fontWeight: '700'


    },
    input3: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        width: wp('30%'),
        height: hp('7%'),
        textAlign: 'center',
        color: '#999999',
        fontWeight: '700',
        marginLeft: wp('-20%')



    },
    add: {
        fontSize: 14,
        color: '#0b6ae7',
        fontWeight: '700',
        marginLeft: wp('3%')

    },
    addicon: {
        marginLeft: wp('1%')
    },
    caltext: {
        fontSize: 14,
        color: '#8f8f8f',
        textAlign: 'center',
        marginLeft: wp('-8%'),
        fontWeight: '700',
        marginTop: hp('1%')
    }
})