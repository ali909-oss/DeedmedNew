import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    updateSecureTextEntry,
    FlatList,
    ImageBackground,
    Icon
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import React from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import { Fonts } from '../constants';
import Header from '../components/Header';
import SimpleButton from '../components/NewButton';


import { useState } from 'react';
import { TouchableItem } from 'react-native-tab-view';



const SelectAppoint = ({ navigation }) => {
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    console.log(Status);

    const [selectedDate, setselectedDate] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleDate = (date) => {
        setselectedDate(date.toDateString());
        hideDatePicker();
    };

    //   Modal
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);

    };

    return (
        <View style={styles.container}>
                      <Header title="Choose Date and Time" onPress={()=> navigation.navigate("ChangeAppointment")} />

            <View style={{marginTop:hp('2%')}}>
                <View>
                    <Image style={styles.img2} source={require('../assets/icons/Ellip1.png')} />


                    <View style={{ marginTop: hp("2%"), paddingHorizontal: wp(5) }}>
            <Text style={styles.texta}>Choose Date</Text>

            <TouchableOpacity onPress={showDatePicker}>
              <View style={styles.input}>
                <Text style={styles.caltext}>{selectedDate}</Text>

                <View style={styles.input1}>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDate}
                    onCancel={hideDatePicker}
                  />
                  <LinearGradient
                    colors={["#0469e6", "#4286f4", "#02a8ea"]}
                    style={styles.gradient}
                  >
                    <EvilIcons
                      name={"calendar"}
                      color={"white"}
                      size={28}
                      style={styles.time}
                    />
                  </LinearGradient>
                </View>
              </View>
            </TouchableOpacity>

            <SimpleButton />
          </View>
                    <View style={{ marginTop: hp('3%') }}>
                        <TouchableOpacity onPress={toggleModal}
                            style={styles.btn1}>
                            <LinearGradient colors={['#0469e6', '#4286f4', '#02a8ea']} style={styles.gradient}>
                                <Text style={styles.textt}>Done</Text>
                            </LinearGradient>
                            <Modal style={styles.modal}

                                isVisible={isModalVisible}
                                animationType={"slide"}
                                onSwipeComplete={() => setModalVisible(false)}
                                swipeDirection="left"

                            >
                                <View style={{ marginTop: hp('-5%') }}>
                                    <View style={styles.Ellipse}>
                                        <Image style={styles.image1} source={require('../assets/icons/done.png')} />

                                    </View>
                                    <View style={{ marginTop: hp('2%') }}>
                                        <Text style={styles.textsend}>Will be Patient</Text>
                                        <Text style={styles.textsucc}>Patient Will accept Change request</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate("Appoint")}
                                        style={styles.btn2}>
                                            <LinearGradient colors={['#0469e6', '#4286f4', '#02a8ea']} style={styles.gradient}>
                                <Text style={styles.textt}>Done</Text>
                            </LinearGradient>


                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </TouchableOpacity>

                    </View>

                </View>



            </View>
        </View>
    )
}
export default SelectAppoint;
const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: 'white'
    },
    text: {
        fontSize: 22,
        color: 'white',
        padding: 5,
        fontFamily: Fonts.POPPINS_MEDIUM

    },
    header: {
        flex: 1,
    },

    img: {
        width: wp('100%'),
        height: hp('10%'),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15


    },
    img1: {
        marginTop: hp('-10%'),
        width: wp('100%'),

    },
    img2: {
        marginTop: hp('-2%'),
        justifyContent: 'flex-start',
        position: 'absolute'
    },
    texta: {
        fontSize: 17,
        marginLeft: wp('5%'),
        fontFamily: Fonts.POPPINS_SEMI_BOLD
    },
    textb: {
        fontSize: 15,
        color: "#b4b6b7",
        marginLeft: wp('3%'),
        fontWeight: 'bold'

    },
    textc: {
        fontSize: 15,
        marginLeft: wp('5%'),
        fontFamily: Fonts.POPPINS_SEMI_BOLD
    },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ffffff',
        width: wp('45%'),
        height: hp('6%'),
        backgroundColor: '#ffffff',
        marginLeft: wp('5%'),
        textAlign: 'left',
        marginTop: hp('2%')


    },
    input1: {
        height: hp('5.5%'),
        width: wp('9%'),
        borderColor: '#02a8ea',
        borderWidth: 0.2,
        borderRadius: 6,
        backgroundColor: '#02a8ea',
        marginLeft: wp('36%'),
        marginTop: hp('-4%')

    },
    caltext: {
        fontSize: 16,
        color: '#8f8f8f',
        textAlign: 'center',
        marginLeft: wp('-8%'),
        fontWeight: '700',
        marginTop: hp('1%')
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,


    },
    backtext: {
        height: hp('6%'),
        width: wp('20%'),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    mainview: {
        backgroundColor: '#e7effe',
        borderRadius: 10,



    },
    datetext: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#577af2'
    },
    newdate: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'

    },
    textt: {
        color: 'white',
        fontSize: 18
    },
    btn1: {
        width: wp('80%'),
        height: hp('7%'),
        marginLeft: wp('10%'),
        marginTop: hp('3%')




    },
    btn2: {
        width: wp('60%'),
        height: hp('7%'),

        marginTop: hp('5%')




    },
    skip: {
        textAlign: 'center',
        fontSize: 16,
        color: '#818ba7',
        marginTop: hp('1%')
    },
    modal: {
        flex: 0,

        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: 'center',
        textAlign: 'center',
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('20%'),
        height: hp('40%'),
        width: wp('80%'),
        alignContent: 'center'


    },
    Ellipse: {
        width: wp('24%'),
        height: hp('12%'),
        borderRadius: 50,
        backgroundColor: '#e7f2f8',
        marginLeft: wp('15%'),

    },
    image1: {

        alignSelf: 'center',
        marginTop: hp('2%')
    },
    textsend: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'

    },
    textsucc: {
        fontSize: 14,
        color: '#adb0b2',
        alignSelf: 'center'


    },
    cont: {

        //   backgroundColor: '#e7effe',
        backgroundColor: "#0469e6",

        borderRadius: 10



    }
})
