import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../constants';
import Header from '../components/Header';


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
        report:'Blood Report.pdf'
    }
]

 


const AddComment = () => {
    const navigation = useNavigation();
   
    


    return (
        <View style={styles.container }>
                              <Header title="Appointment Details" onPress={()=> navigation.navigate("Appointments")} />

           
            <View style={{marginTop:hp('2%')}}>
            <View style={styles.cart}>
            {
                Data.map ((item,index) =>{
                    return(
                        <View >
                        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:hp('1%')}}>
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
                            <View style={{flexDirection:'column',marginLeft:wp('-6%')}}>
                            <Text style={styles.name}>{item.consult}</Text>
                            <Text style={styles.name}>{item.user_name}</Text>
                            <Text style={styles.relation}>{item.relation}</Text>
                            </View>
                            

                             </View>
                             <View style={{flexDirection:'column',marginTop:hp('2%'),marginLeft:wp('5%')}}>
                                 <Text style={{fontSize:16,color:'#1e76e9',fontFamily:Fonts.POPPINS_SEMI_BOLD}}>{item.time}</Text>
                                 <View style={{flexDirection:'row'}}>
                                 <Text style={{color:"#a9afc3",fontSize:13,        fontFamily:Fonts.POPPINS_MEDIUM}}>{item.status}</Text>
                                <Text style={{color:"#a9afc3",marginLeft:wp('2%'),        fontFamily:Fonts.POPPINS_MEDIUM}}>|</Text>
                                 <Text style={{color:"#a9afc3",marginLeft:wp('2%'),fontSize:13,        fontFamily:Fonts.POPPINS_MEDIUM
}}>{item.purpose}</Text>
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
                                     <View style={{flexDirection:'row',justifyContent:'space-around'}}>
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
                                 <View style={{}}>
                                 <TouchableOpacity onPress={()=> navigation.navigate("Comment")}
                                 style={styles.btn1}>
                                 <LinearGradient colors={['#0469e6','#4286f4','#02a8ea' ]} style={styles.gradient}>
        <Text style={styles.textt}>Comment</Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>

                        






                             </View>

                             

                    )
                })
            }

            </View>
            </View>
        </View>
    )}

export default AddComment;
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
    backimg:{
        width:wp('20%'),
        height:hp('10%'),
        backgroundColor:'#e4e9ec',
        borderRadius:2,
        justifyContent:'center',
        alignItems:'center'

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
        width:wp('90%'),
        marginLeft:wp('5%'),
        marginTop:hp('-1%'),
        
        backgroundColor:'white',
        padding:wp('2%')
    },
    image1:{
        height:hp('10%'),
        width:wp('20%')
    },
    name:{
        fontSize:16,
        color:'black',
        fontFamily:Fonts.POPPINS_SEMI_BOLD
        
    },
    relation:{
        color:'#4c92ed',
        fontSize:16,
        fontFamily:Fonts.POPPINS_MEDIUM

    },
    texta:{
        fontSize:15,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:'black',padding:1

    },
    textb:{
        fontSize:13,
        color:'#a8aec2',
        padding:2,
        fontFamily:Fonts.POPPINS_MEDIUM

    },
    doc:{
        backgroundColor:'#ecf0fe',
        borderRadius:5,
        width:wp('40%'),
        height:hp('5%'),
        flexDirection:'row',
        fontFamily:Fonts.POPPINS_MEDIUM ,
        justifyContent:'center',
        alignItems:'center'


    },
    textc:{
        fontSize:12,
        textAlign:'center',
        marginTop:hp('1%'),
        fontFamily:Fonts.POPPINS_MEDIUM


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
        fontSize: 15,
        fontFamily:Fonts.POPPINS_MEDIUM

      },
      btn1: {
        width:wp('70%') ,
        height:hp('7%'),
        marginTop:hp('3%'),
        alignSelf:'center'
        
       
       
      
      },

})



