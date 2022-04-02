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
  import { useState } from 'react';
  import DateTimePickerModal from "react-native-modal-datetime-picker";
  import UselessText from './InputText';
  import { Fonts } from '../constants';
  import { FloatingLabelInput } from 'react-native-floating-label-input';
  import InputText from './InputNote';
  import Header from './Header';

  import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

  const Letter = ({ navigation }) => {
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [slmc, setSlmc] = useState('');
    const [address, setAddress] = useState('');
    const [reffer, setReffer] = useState('');
    const [pname, setPname] = useState('');
    const [paddress, setPaddress] = useState('');
    const [reason, setReason] = useState('');
    const [history, setHistory] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [exam, setExam] = useState('');
    const [diagonsis, setDiagonsis] = useState('');
    const [treatment, setTreatment] = useState('');













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

    return(
<View style={styles.container}>
<Header title="Refferal Letter" onPress={()=> navigation.navigate("Comment")} />

    <View style={{marginTop:hp('2%')}}> 
    <ScrollView>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View                style={styles.inputt}
         
>
    <FloatingLabelInput
        label="Date"
        value={date}
        mask="99/99/9999"
        placeholder='12/02/2020'
        keyboardType="numeric"
        customLabelStyles={{
          colorFocused: '#2D58EF',
          fontSizeFocused: 13,
        
      
        }}
        labelStyles={{

          fontFamily:Fonts.POPPINS_MEDIUM
        }}
        inputStyles={{
          color: '#677294',
          paddingHorizontal: 5,
        
          marginTop:hp('1%'),
          fontFamily:Fonts.POPPINS_REGULAR,
    fontSize:14,
    paddingBottom:2

        
        }}
        containerStyles={{
          borderColor:'#fff',
          paddingHorizontal: 10,
          
          
        }}
       
        onChangeText={value => setDate(value)}
       
      
      />
      </View>
      <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Refferning Professional Name"
                 value={name}
                 placeholder='Arjith'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setName(value)}
                
               
               />
               </View>
               </View>
               <View style={{marginTop:hp('2%')}}>
               <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="SLMC Number"
                 value={slmc}
                 placeholder='5876578'
                 keyboardType="numeric"
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setSlmc(value)}
                
               
               />
               </View>
               </View>
               <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Address"
                 value={address}
                 placeholder='Arjith 8786'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setAddress(value)}
                
               
               />
               </View>
               </View>
               <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Clinic of Reffering Professional"
                 value={reffer}
                 placeholder='Arjith 8786'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setReffer(value)}
                
               
               />
               </View>
               </View>
      </View>
    {/* <View style={{marginTop:hp('1%')}}>
    <Text style={styles.texta}>Date</Text>
    <View
                    style={styles.input}>
                                    <Text style={styles.caltext}>{selectedDate}</Text>

                        <TouchableOpacity onPress={showDatePicker}>
                        

<DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDate}
                onCancel={hideDatePicker}
            />

<EvilIcons name={'calendar'} color={'black'} size={35}
style={styles.icon1}

/>


                        

      </TouchableOpacity>

      </View>
  </View> */}
  
 
  <View style={{marginTop:hp('1%')}}>
      <Text style={styles.textaa}>Dear DR/Sir/Madam</Text>
  </View>
  <View style={{justifyContent:'center',alignItems:'center'}}>
  <View style={{marginTop:hp('1%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Patient's Name"
                 value={pname}
                 placeholder='Arjith'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setPname(value)}
                
               
               />
               </View>
               </View>
  
               <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Address"
                 value={paddress}
                 placeholder='Arjith 8786'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setPaddress(value)}
                
               
               />
               </View>
               </View>
               <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Reason of Refferal"
                 value={reffer}
                 placeholder='Arjith 8786'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setReffer(value)}
                
               
               />
               </View>
                 <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Address"
                 value={paddress}
                 placeholder='Arjith 8786'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setPaddress(value)}
                
               
               />
               </View>
               </View>
               </View>
               <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Medical History"
                 value={history}
                 placeholder='Arjith 8786'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setHistory(value)}
                
               
               />
               </View>
               </View>
               <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Symptoms and Signs"
                 value={symptoms}
                 placeholder='Arjith 8786'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setSymptoms(value)}
                
               
               />
               </View>
               </View>
               <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Result of Complementary exam"
                 value={exam}
                 placeholder='Arjith 8786'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setExam(value)}
                
               
               />
               </View>
               </View>
               <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Probable Diagnosis"
                 value={diagonsis}
                 placeholder='Arjith 8786'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setDiagonsis(value)}
                
               
               />
               </View>
               </View>
               <View style={{marginTop:hp('2%')}}>
      <View                style={styles.inputt}
         
         >
             <FloatingLabelInput
                 label="Current Treatment"
                 value={treatment}
                 placeholder='Arjith 8786'
                 customLabelStyles={{
                   colorFocused: '#2D58EF',
                   fontSizeFocused: 13,
                 
               
                 }}
                 labelStyles={{
         
                   fontFamily:Fonts.POPPINS_MEDIUM
                 }}
                 inputStyles={{
                   color: '#677294',
                   paddingHorizontal: 5,
                 
                   marginTop:hp('1%'),
                   fontFamily:Fonts.POPPINS_REGULAR,
             fontSize:14,
             paddingBottom:2
         
                 
                 }}
                 containerStyles={{
                   borderColor:'#fff',
                   paddingHorizontal: 10,
                   
                   
                 }}
                
                 onChangeText={value => setTreatment(value)}
                
               
               />
               </View>
               </View>
  
  
 
 
  
  <View style={{marginTop:hp('1%')}}>
    <Text style={styles.texta}>Additional Note</Text>
   <InputText/>
  </View>
  </View>

 
      <TouchableOpacity onPress={() => navigation.navigate("Comment")}
                                 style={styles.btn2}>
                                 <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>
        <Text style={styles.textt}>Send Comment</Text>
      </LinearGradient>
      </TouchableOpacity>
  </ScrollView>

    </View>
    </View>
       )
  }
  export default Letter;
  const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('85%'),
    },
    text: {
      fontSize: 22,
      color: 'white',
      padding: 5,
      fontFamily:Fonts.POPPINS_MEDIUM
      
  },
  inputt:{
    width: wp('85%'),
    height: hp('7%'),
    borderColor:'#fff',
    backgroundColor:'#fff',
    borderRadius: 8,
    elevation:1,
    
    


   


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
img1:{
  marginTop:hp('-10%'),
  width: wp('100%'),

},
img2:{
    marginTop:hp('-7%'),
    justifyContent:'flex-start',
    position:'absolute'
},
input: {
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: 'white',
    width: wp('85%'),
    height: hp('7%'),
    backgroundColor: '#ffffff',
    marginLeft: wp('8%'),
    textAlign: 'left',
    
  
  
  },
  input2: {
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: 'white',
    width: wp('85%'),
    height: hp('15%'),
    backgroundColor: '#ffffff',
    marginLeft: wp('8%'),
    textAlign: 'left',
    
  
  
  },
  texta:{
    fontSize:16,
    color:'#7a95f5',
    fontWeight:'bold',
    marginLeft:wp('2%'),
    padding:3
  },
  textaa:{
      fontSize:17,
      color:'black',
      marginLeft:wp('5%'),
      fontFamily:Fonts.POPPINS_SEMI_BOLD

  },
  icon:{
    marginLeft:wp('-10%'),
    marginTop:hp('1%')
   
  },
  input1:{
    height:hp('5.5%'),
    width:wp('9%'),
    borderColor:'#02a8ea',
    borderWidth:0.2,
    borderRadius:6,
    backgroundColor:'#02a8ea' ,
    marginLeft:wp('36%'),
    marginTop:hp('-4%')
    
},
caltext:{
    fontSize:16,
    color:'#b7bdcd',
    marginLeft:wp('5%'),
    fontWeight:'700',
    marginTop:hp('2%')
},
icon1:{
    justifyContent:'flex-end',
    marginLeft:wp('75%'),
    marginTop:hp('-3%')
},
main:{
    height:hp('30%'),
    width: wp('85%'),
    marginLeft: wp('8%'),
    backgroundColor:'#ffffff',
    borderRadius:5,
    marginTop:hp('2%')
},
btn2: {
    width:wp('80%') ,
    height:hp('7%'),
    marginLeft:wp('10%'),

    marginTop:hp('2%')
    
   
   
  
  },
  textt: {
    color: 'white',
    fontSize: 18,
    fontFamily:Fonts.POPPINS_MEDIUM
  },
  gradient: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 10,


  },
  })