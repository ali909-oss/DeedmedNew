import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import Header from './Header';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { Fonts } from '../constants';


const Data=[
    {
        user_name: 'Ravindu Dhananjaya',
        id: 1,
        status: 'online',
        user_img: require("../assets/icons/userbg.png"),
        purpose: 'Report Reading',
        time: 'Today at 2:20pm',
        date: '03 Jan 2022',
        consult: 'Fever Consultation',
        relation:'Guardian',
        rating:'3.5',
        report:'Blood Report.pdf',
        comment:"Oh, just go to Hospital",
        img: require("../assets/icons/receipt.png"),


    }
]

 


const Pastinfo = () => {
    const navigation = useNavigation();
   
    


    return (
        <View style={styles.container }>
                                                      <Header title="Appointment Details" onPress={()=> navigation.navigate("Appointments")} />

           


            <View style={{marginTop:hp('2%')}}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >

            <View style={styles.cart}>
            {
                Data.map ((item,index) =>{
                    return(
                        <View >
                        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:hp('3%')}}>
                            <View style={styles.backimg}>

                             <ImageBackground source={item.user_img} style={styles.image1} >
                                 <View style={{ position: 'absolute',  bottom: 0,alignSelf:'flex-end' }}>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#e3dfdd'}}>
                            <FontAwesome name={'star'} size={15} color={'#FDCC0D'} />

                            <Text style={{fontSize:13}}>{item.rating}</Text>
                            </View> 
                            </View>
                            </ImageBackground>

                            </View>
                            <View style={{flexDirection:'column',marginLeft:wp('-10%')}}>
                            <Text style={styles.name}>{item.consult}</Text>
                            <Text style={styles.name}>{item.user_name}</Text>
                            <Text style={styles.relation}>{item.relation}</Text>
                            </View>
                            

                             </View>
                             <View style={{flexDirection:'column',marginTop:hp('2%'),marginLeft:wp('5%')}}>
                                 <Text style={{fontSize:16,color:'#1e76e9',fontFamily:Fonts.POPPINS_SEMI_BOLD}}>{item.time}</Text>
                                 <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('2%')}}>
                                 <View style={{flexDirection:'row'}}>
                                 <Text style={{color:"#a9afc3",fontSize:15}}>{item.status}</Text>
                                <Text style={{color:"#a9afc3",marginLeft:wp('2%')}}>|</Text>
                                 <Text style={{color:"#a9afc3",marginLeft:wp('2%'),fontSize:15}}>{item.purpose}</Text>
                                 </View>
                                 <TouchableOpacity onPress={()=> navigation.navigate("Reviews")}>
                                 <Text style={{color:"#a9afc3",fontSize:14}}>View Reviews </Text>
                                 </TouchableOpacity>
                                 </View>
                                 </View>

                                 <View style={{marginTop:hp('2%'),flexDirection:'column',marginLeft:wp('3%')}}>
                                     <Text style={styles.texta}>Patient Details</Text>
                                     <Text style={styles.textb}>Name</Text>
                                     <Text style={styles.texta}>{item.user_name}</Text>
                                     <Text style={styles.textb}>Medical Details 1</Text>
                                     <Text style={styles.texta}>Type</Text>
                                     <Text style={styles.textb}>Medical Details 2</Text>
                                     <Text style={styles.texta}>Type</Text>




                                 </View>

                                 <View style={{marginLeft:wp('5%'),marginTop:hp('0%')}}>
                                     <Text style={styles.textb}>Attachment</Text>
                                     <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                     <TouchableOpacity onPress={()=> navigation.navigate("FileView")}>

                                         <View style={styles.doc}>
                                             <AntDesign size={15} name={'pdffile1'} style={{marginTop:hp('1%'),marginLeft:wp('2%')}}/>
                                         <Text style={styles.textc}>{item.report}</Text>

                                         </View>
                                         </TouchableOpacity>
                                         <TouchableOpacity onPress={()=> navigation.navigate("FileView")}>

                                         <View style={styles.doc}>
                                             <AntDesign size={15} name={'pdffile1'} style={{marginTop:hp('1%'),marginLeft:wp('2%')}}/>
                                         <Text style={styles.textc}>{item.report}</Text>

                                         </View>
                                         </TouchableOpacity>
                                     </View>
                                 </View>
                                 <View style={{marginTop:hp('2%')}}>
                                  <Text style={styles.comments}>Comments</Text>
                                 <View style={styles.docc}>
                                     <Text style={styles.comment}>{item.comment}</Text>
                                 </View>
                                 <Image source={item.img} style={styles.image2} />

                                 </View>
                                 

                        






                             </View>

                             

                    )
                })
            }

            </View>
            </ScrollView>

            </View>

        </View>
    )}

export default Pastinfo;
const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('80%')
    },
    backimg:{
        width:wp('20%'),
        height:hp('10%'),
        backgroundColor:'#e4e9ec',
        borderRadius:2,
        justifyContent:'center',
        alignItems:'center'

    },
    img:{
        width: wp('100%'), 
        height: hp('15%') ,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
       

    },
    text:{
        fontSize:25,
        color:'white',
        padding:5
    },
    header:{
        flex:1,
    },
    cart:{
        height:hp('130%'),
        width:wp('90%'),
        
        backgroundColor:'white',
        alignSelf:'center'
    },
    image1:{
        height:hp('8%'),
        width:wp('16%')
    },
    name:{
        fontSize:15,
        color:'black',
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    relation:{
        color:'#4c92ed',
        fontSize:16
    },
    texta:{
        fontSize:14,
        color:'black',padding:5,
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    },
    textb:{
        fontSize:13,
        color:'#a8aec2',
        padding:2

    },
    doc:{
        backgroundColor:'#ecf0fe',
        borderRadius:5,
        width:wp('40%'),
        height:hp('5%'),
        flexDirection:'row'

    },
    textc:{
        fontSize:14,
        textAlign:'center',
        marginTop:hp('1%'),
        marginLeft:wp('3%')

    },
    gradient: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
      },
      button: {
        width:wp('70%') ,
        height:hp('7%'),
       marginLeft:wp('13%'),
       marginTop:hp('4%')
      },
      textt: {
        color: 'white',
        fontSize: 18
      },
      comment:{
          fontSize:16,
          textAlign:'center',
          fontWeight:'bold',
          color:'white',
          marginTop:hp('1%')

      },
      docc:{
        backgroundColor:'#0466e6',
        borderRadius:10,
        width:wp('50%'),
        height:hp('5%'),
        marginTop:hp('3%'),
        marginLeft:wp('5%')
    },
    comments:{
        fontSize:20,
        fontWeight:'700',
        color:'black',
        marginLeft:wp('3%')

    },
    image2:{
        height:hp('50%'),
        width:wp('80%'),
        marginTop:hp('2%'),
        marginLeft:wp('5%')
    },

})



