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
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import Modal from "react-native-modal";

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';

import Entypo from 'react-native-vector-icons/dist/Entypo';
import React from 'react';
import { useState } from 'react';
import { colors } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../constants';
import { Searchbar } from 'react-native-paper';




const DATA = [
    {
        id: 1,
        month: 'August Payment',
        date: '03 Jan 2022',
        price: 'LKR250',
        status:'Deposited'
    },
    {
        id: 2,
        month: 'Sep Payment',
        date: '03 Jan 2022',
        price: 'LKR250',
        status:'Deposited'

    },
    {
        id: 3,
        month: 'Octubar Payment',
        date: '03 Jan 2022',
        price: 'LKR250',
        status:'Pending'

    },
    {
        id: 4,
        month: 'Jan Payment',
        date: '03 Jan 2022',
        price: 'LKR250',
        status:'Deposited'

    },
    {
        id: 5,
        month: 'Feb Payment',
        date: '03 Jan 2022',
        price: 'LKR250',
        status:'Deposited'

    },
    {
        id: 6,
        month: 'March Payment',
        date: '03 Jan 2022',
        price: 'LKR250',
        status:'Deposited'

    },
    {
        id: 7,
        month: 'April Payment',
        date: '03 Jan 2022',
        price: 'LKR250',
        status:'Deposited'

    },
];

const MonthlyEarnings = ({ navigation }) => {
    const [status,setStatus]=useState('Pending')
    const [search, setSearch] = useState('');
    const updatesearch = search => {
        setSearch(search);
    };

    // seactbar
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

    // Modal
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        
      };
    //   Dropdown
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [open1, setOpen1] = useState(false);
      const [value1, setValue1] = useState(null);
      const [items, setItems] = useState([
        {label: 'Pending', value: 'Pending'},
        {label: 'Deposited', value: 'Deposited'}
      ]);
      const [items1, setItems1] = useState([
        {label: 'Price Low to High', value: 'Low'},
        {label: 'Price High to Low', value: 'High'}
      ]);
        //  Calendar
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
     
      
    
      const handleDate = (date) => {
          setselectedDate(date.toDateString());
          hideDatePicker();
        };
        const showDatePicker1 = () => {
            setDatePickerVisibility1(true);
          };
        
          const hideDatePicker1 = () => {
            setDatePickerVisibility1(false);
          };
         
          
        
          const handleDate1 = (date) => {
              setselectedDate1(date.toDateString());
              hideDatePicker1();
            };
        
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={{ flexDirection: 'row', marginTop: hp('1%'), marginLeft: wp('4%') }}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Monthly Earnings</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent:'space-between',padding:wp('2%'), marginTop: hp('1%') }}>
                <View>
                <Searchbar 
    keyboardHidesTabBar={true}
      placeholder="Search Here"
      style={{width:wp('80%')}}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />   
    </View>            
         <TouchableOpacity onPress={toggleModal}>
                        <View style={styles.filter}>

                            <FontAwesomeIcon style={styles.filterIcon} name="sliders" size={25} color='#9aa2b8' />


                        </View>
                        <Modal style={styles.modal}

isVisible={isModalVisible}
animationType={"slide"}
onSwipeComplete={() => setModalVisible(false)}
swipeDirection="left"

>
    <View style={{marginTop:hp('2%')}} >
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={styles.textf}>Search by filter</Text>
        <TouchableOpacity onPress={toggleModal}>
        <Entypo style={styles.cross} name="cross" size={35} color="#8e96af" />
        </TouchableOpacity>
      

        </View>
        </View>
        <View style={{marginTop:hp('2%')}}>
            <Text style={styles.textcal}>From</Text>
            <View style={{flexDirection:'row', justifyContent:'center',
        alignItems:'center'}}>
            <TouchableOpacity onPress={showDatePicker}>

            <View style={styles.cal}>
            <Text style={styles.caltext}>{selectedDate}</Text>

            <Entypo style={styles.calendar} name="calendar" size={30} color="#1a74e8" />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDate}
                onCancel={hideDatePicker}
            />

            </View>
            </TouchableOpacity>

            </View>
        </View>
        <View style={{marginTop:hp('1%')}}>
            <Text style={styles.textcal}>To</Text>
            <View style={{flexDirection:'row', justifyContent:'center',
        alignItems:'center'}}>
            <TouchableOpacity onPress={showDatePicker1}>

            <View style={styles.cal}>
            <Text style={styles.caltext}>{selectedDate1}</Text>

            <Entypo style={styles.calendar} name="calendar" size={30} color="#1a74e8" />
            <DateTimePickerModal
                isVisible={isDatePickerVisible1}
                mode="date"
                onConfirm={handleDate1}
                onCancel={hideDatePicker1}
            />

            </View>
            </TouchableOpacity>

            </View>
            <View style={{marginTop:hp('3%'), justifyContent:'center',
        alignItems:'center'}}>
        <DropDownPicker
        style={styles.drop}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerProps={{
        width: wp('70%')
    }}
    />
    </View>
    <View style={{marginTop:hp('3%'), justifyContent:'center',
        alignItems:'center'}}>
        <DropDownPicker
        style={styles.drop}
      open={open1}
      value={value1}
      items={items1}
      setOpen={setOpen1}
      setValue={setValue1}
      setItems={setItems1}
      containerProps={{
        width: wp('70%')
    }}
    />
    </View>
        </View>
        <View style={{marginTop:hp('30%')}}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View>
                <TouchableOpacity 
                onPress={toggleModal}
                     
                    
                     style={styles.btn1}>
                                  <LinearGradient colors={['#e7e7e7','#a8a8a9' ]} style={styles.gradient}>
         <Text style={styles.texttt}>Reset</Text>
       </LinearGradient>
       </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity 
                     onPress={toggleModal}
                    
                    style={styles.btn1}>
                                 <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>
        <Text style={styles.textt}>Done</Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>
              </View>
        </View>
       
        </Modal>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: hp('5%') }}>
                <View style={{ height: hp('75%'), marginTop: hp('-1%') }}>
                    <FlatList
                        data={DATA}
                        keyExtractor={item => {
                            item.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate("MonthEarn")}>
                                <View style={styles.main}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                       
                                        <View style={{flexDirection:'column', padding: 2,marginLeft:wp('2%') }} >
                                            <Text style={{ fontSize: 14, fontFamily:Fonts.POPPINS_SEMI_BOLD, color: 'black' }}>{item.month}</Text>
                                            <Text style={{ fontSize: 13, color: '#b9bece' ,padding:2,fontFamily:Fonts.POPPINS_REGULAR}}>{item.date} </Text>
                                        </View>
                                        <View style={{flexDirection:'row',padding:8}}>
                                            <Text style={{ fontSize: 13, fontFamily:Fonts.POPPINS_SEMI_BOLD, color: '#3885eb',marginLeft: wp('-5%') }} >{item.price}</Text>
                                            <Text style={[styles.status ,item.status== status ? styles.pending : styles.status ]}>{item.status}</Text></View>
                                    </View>
                                    </View>
                                    </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default MonthlyEarnings;


const styles = StyleSheet.create({
  
    avt: {
        height: hp('6%'),
        width: wp('10%'),
        borderRadius: 20,
        marginTop: hp('1%'),
        padding: 5

    },

    container: {
        width: wp('100%'),
        height: hp('100%'),
    },
    status:{
        fontSize: 13,
         color: '#68e79a',
         marginLeft:wp('2%'),
         fontFamily:Fonts.POPPINS_MEDIUM


    },
    pending:{
        fontSize: 13,
        color: '#DBB01A',
        marginLeft:wp('2%'),
        fontFamily:Fonts.POPPINS_MEDIUM

    },
    view1: {
        height: hp('18%'),
        width: wp('100%'),
        backgroundColor: '#09a1ec',
        borderBottomLeftRadius: wp('4%'),
        borderBottomRightRadius: wp('4%'),
    },
    searchSection: {
        marginTop: hp('-2%')

    },
    img: {
        height: hp('5%'),
        width: wp('10%'),
        marginTop: hp('2%'),
        backgroundColor: 'white',
    },
    main: {
        height: hp('9%'),
        width: wp('90%'),
        borderRadius: 5,
        backgroundColor: 'white',
        marginLeft: wp('5%'),
        padding: 5,
        marginBottom: hp('1%'),
        elevation:2
    },
   
    row1: {
        flexDirection: 'row',
    
    },
    text1: {
        color: 'white',
        fontSize: 20,
        marginLeft: wp('3%'),
        marginTop: hp('2%'),
    },
    searchbar: {
        height: hp('6%'),
        width: wp('65%'),
        marginTop: hp('2%'),
        backgroundColor: 'white',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: 'white',
        padding: 5,
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    searchIcon: {
        padding: 10,
        marginTop: hp('-6%'),
        marginLeft: wp('5%')


    },
    input: {
        borderRadius: 6,
        borderWidth: 0.2,
        borderColor: '#ffffff',
        width: wp('80%'),
        height: hp('7%'),
        marginTop: hp('3%'),
        backgroundColor: '#ffffff',
        marginLeft: wp('2%'),
        textAlign: 'center'


    },
    filter: {
        width: wp('12%'),
        height: hp('6.5%'),
        backgroundColor: 'white',
        borderRadius: 3,


    },
    filterIcon: {

        textAlign: 'center',
        marginTop: hp('1.5%')
    },
    modal: {
        flex:0,
      
        backgroundColor: "#ebf3f9",
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: hp('1%'),
        marginLeft: wp('1%'),
        height:hp('98%'),
        width:wp('80%')
        

    },
    textf:{
        fontSize:25,
        fontWeight:'700',
        color:'#464646'
    },
   
    calendar:{
        marginLeft:wp('55%'),
        marginTop:hp('-4%'),
    },
    cal:{
        width:wp('70%'),
        backgroundColor:'white',
        borderWidth:0.5,
        borderColor:'black',
        borderRadius:10,
        height:hp('7%'),
       
       
    },
    textcal:{
        marginLeft:wp('5%'),
        padding:4,
        color:'#bcbcc2',
        fontSize:15
    },
    drop:{
        width:wp('70%'),
        zIndex:2,
        borderWidth:0.5,
        borderRadius:10
    },
    caltext:{
        fontSize:16,
        color:'#bcbcc2',
        marginLeft:wp('3%'),
        fontWeight:'700',
        marginTop:hp('2%')
    },
//     btn:{
// height:hp('10%'),
// color:'black'
//     },
    btn1: {
        width:wp('40%') ,
        height:hp('7%'),
       marginTop:hp('4%'),
       
      
      },
      textt: {
        color: 'white',
        fontSize: 18
      },
      texttt:{
        color: 'black',
        fontSize: 18

      },
      gradient: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
      },
});

