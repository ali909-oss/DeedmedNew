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
    ImageBackground
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
import React from 'react';
import { useState } from 'react';
import { colors } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Payment from '../components/Payment';
import { Fonts } from '../constants';
import { Searchbar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';


const MonthEarn = () => {
    const [month,setMonth]=useState('August')
    const navigation = useNavigation();
    // seactbar
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);




    return (
        <View style={styles.container}>
                   

                   <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.conta}>
     
     <ImageBackground
       style={styles.image}
       source={require('../assets/icons/head.png')}
       imageStyle={{opacity:0.2}}
    >
     <View style={styles.header}>
     <TouchableOpacity onPress={() => navigation.navigate("MonthlyEarnings")}>
          <Ionicons name={'md-arrow-back-circle-sharp'} size={45} color={'white'} />
          </TouchableOpacity>
      
       <Text style={styles.titleText}>{month} Payment</Text>
     </View>
     </ImageBackground>

     <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('2%'),marginTop:hp('1%')}}>
                <Searchbar 
    keyboardHidesTabBar={true}
      placeholder="Search "
      style={{width:wp('50%'),height:hp('7%')}}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />   
                    <TouchableOpacity onPress={() => navigation.navigate("Receipt")}>
                    <View style={styles.btn}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.btntext}>View Receipt</Text>
                        <Ionicons name={'receipt-outline'} size={20} color={'#ace4f8'}
                        style={styles.iconreceipt}
                        
                        />
                        </View>
                    </View>
                    </TouchableOpacity>

                    </View>

   </LinearGradient>
              
                



            <View style={{marginTop:hp('1%')}}>
                <Payment/>
            </View>
            </View>

)
}
export default MonthEarn;
const styles = StyleSheet.create({
container: {
    width: wp('100%'),
    height: hp('90%')
},
text: {
    fontSize: 22,
    color: 'white',
    padding: 5,
    fontFamily:Fonts.POPPINS_MEDIUM
},
header: {
    flex: 1,
},
searchSection: {
    marginTop: hp('-2%')

},
searchIcon: {
    padding: 10,
    marginTop: hp('-6.5%'),
    marginLeft: wp('5%')


},
img:{
    height:hp('20%')

},
input: {
    borderRadius: 6,
    borderWidth: 0.2,
    borderColor: '#ffffff',
    width: wp('50%'),
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
    borderRadius: 6,
    marginTop: hp('1%'),


},
btn:{
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#7fc6f3',
    width: wp('35%'),
    height: hp('7%'),
    justifyContent:'center',
    alignItems:'center'

},
btntext:{
    fontSize:13,
    textAlign:'center',
    color:'#aadcf7',
    marginTop:hp('1%'),
    marginLeft:wp('1%'),
    fontFamily:Fonts.POPPINS_SEMI_BOLD

},
iconreceipt:{
    marginTop:hp('1%'),
    marginLeft:wp('1%')

},
conta: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    height:hp('20%')
  },
  image: {
    height: hp('10%'),
    width:wp('100%')
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    padding: wp('5%'),
    flex: 1,
    alignItems: 'center',
    
  },
  
  titleText: {
    color:'#fff',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,

    fontSize: 20,
  },
})