import React ,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import StarRating from 'react-native-star-rating';
import UselessText from '../components/InputText';
import CustomStarExample from '../components/StarRating';
import Emoji from '../components/Emoji';
import { Fonts } from '../constants';
import Header from '../components/Header';


const Data=[
    {
        desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure fugiat nulla pariatur. Excepteur."',
        user_name:'Ravindu',
        name:"Ajith Perera",
        image: require("../assets/icons/five.png"),

    }
]

const Review=[
    {
        name:"Ajith Perera",
        image: require("../assets/icons/image.png"),
    }
]

  

const Reviews = () => {
    const navigation = useNavigation();
    
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        
      };
   
    


    return (
        <View style={styles.container }>
        <Header title="Reviews" onPress={()=> navigation.navigate("Pastinfo")} />

            <View style={{marginTop:hp('2%')}}>
                <Text style={styles.title}>Patient Review</Text>
                <View style={styles.main}>
                <Text style={styles.textname}>{Data && Data[0].user_name}</Text>
                <Image style={styles.image1} source={Data && Data[0].image} />
 
                <Text style={styles.texta}>{Data && Data[0].desc}</Text>


                </View>
                <View style={{marginTop:hp('-2%')}}>
                                 <TouchableOpacity onPress={toggleModal}
                                 style={styles.button}>
      <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>
      <Modal style={styles.modal}

isVisible={isModalVisible}
animationType={"slide"}
onSwipeComplete={() => setModalVisible(false)}
swipeDirection="left"

>

    <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
    <Image style={styles.userimg} source={Review && Review[0].image} />
    <Text style={styles.username}>{Review && Review[0].name}</Text>
    <View style={{marginTop:hp('2%')}}>
    <CustomStarExample/>
    </View>
    <View style={{marginTop:hp('3%')}}>
        <UselessText/>
    </View>
    <View style={{marginTop:hp('4%')}}>
        <Emoji/>
    </View>
    <View style={{marginTop:hp('3%')}}>
                                 <TouchableOpacity onPress={toggleModal} style={styles.btn}>
                                 <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>
        <Text style={styles.textt}>Continue</Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>

    

    </View>


</Modal>
        <Text style={styles.textt}>Write a Review</Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>
                
               
            </View>
            </View>

    )}
export default Reviews ;
const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('90%')
    },
    img:{
        width: wp('100%'), 
        height: hp('10%') ,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
       

    },
    modal: {
        flex:0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ebf3f9",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        height:hp('70%'),
        marginTop:hp('15%')

    },
    text:{
        fontSize:22,
        color:'white',
        padding:5,
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    header:{
        flex:1,
    },
    main: {
        width: wp('90%'),
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 5,
        marginBottom: hp('2%'),
        alignSelf:'center'
    },
    textname:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:wp('4%'),
        color:'#979eb6',
        padding:3
    },
    texta:{
        fontSize:14,
        color:"#a9afc3",
        padding:5,
        fontFamily:Fonts.POPPINS_REGULAR

    },
    title:{
        fontSize:20,
        marginLeft:wp('4%'),
        color:'black',
        padding:5,
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    },
    image1:{
        height:hp('10%'),
        width:wp('25%'),
        marginTop:hp('-4%'),
        marginLeft:wp('4%'),
        

    },
    gradient: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
      },
      button: {
        width:wp('40%') ,
        height:hp('7%'),
       marginLeft:wp('5%'),
       marginTop:hp('4%')
      },
      textt: {
        color: 'white',
        fontSize: 18
      },
      userimg:{
          height:hp('12%'),
          width:wp('25%'),
          borderRadius:2,
          marginTop:hp('-3%')
      },
      username:{
          fontSize:18,
          fontWeight:'700',
          color:'black',
          textAlign:'center'

      },
      btn: {
        width:wp('60%') ,
        height:hp('7%'),
       marginLeft:wp('5%'),
       marginTop:hp('4%')
      },
     
})
