import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Tooltip from 'rn-tooltip';

const Comment = () => {
    const navigation = useNavigation();
   
    


    return (
        <View style={styles.container }>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:hp('1%')}}>
            <Text style={styles.texta}>Add Comments</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Prescrption")}>
                                <View style={{
                                    flexDirection: 'row',padding:2,
                                }}>
                                      
                                    <Text style={styles.more}>Next</Text>
                                    <AntDesign name={'doubleright'} size={15} color={'#448dec'}
                                    style={{marginTop:hp('1%')}}
                                    
                                    />
                                </View>
                            </TouchableOpacity>

            </View>
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
    marginTop:hp('1%')
  }}
/>

            <View style={{
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute', //Here is the trick
  bottom: 0, }}>
            <View style={{flexDirection:'row'}}>
            
            <View style={styles.searchSection}>
                    <TextInput
                        placeholder="Type Your Comment"
                        style={styles.input}
                        fontSize={18}
                        


                    />
                    </View>
                    <View style={styles.input1}>
                        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:hp('2%')}}>
                        <TouchableOpacity>
                       
                        <Tooltip  
                        backgroundColor='#d6d9e2'
                      
                        height={100}
                         popover={
                             <View style={{textAlign:'center',alignItems:'center'}}>
                                 <TouchableOpacity onPress={()=> navigation.navigate("TestOrder")}>
                         <Text style={styles.tooltext}>Test Order</Text>
                         </TouchableOpacity>
                         <View style={styles.line}/>
                         <TouchableOpacity onPress={()=> navigation.navigate("Medical")} >
                         <Text style={styles.tooltext}>Medical Certificate</Text>
                         </TouchableOpacity>
                         <View style={styles.line}/>
                         <TouchableOpacity onPress={()=> navigation.navigate("Letter")}>
                         <Text style={styles.tooltext}>Referral</Text>
                         </TouchableOpacity>



                         


                         </View>

                         }>
                        <Entypo name={'attachment'} size={22} color={'#76809f'}/>
                        </Tooltip>
                   
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <FontAwesome name={'send'} size={22} color={'#76809f'}/>
                        </TouchableOpacity>




                        </View>
                    </View>

            </View>
            </View>

        </View>
    )}
    export default Comment;
    const styles = StyleSheet.create({
        container:{
            width:wp('100%'),
            height:hp('100%'),
            backgroundColor:'white',
            flex:1
        },
        more: {
            fontSize: 20,
            color: '#448dec',
            fontWeight: 'bold',
            textAlign: "center",
    
        },
        texta:{
            fontSize:22,
            fontWeight:'bold',
            color:'black'
        },
        input: {
            borderTopLeftRadius:2,
            borderBottomLeftRadius:2,
            borderLeftColor:'black',
            borderWidth: 0.1,
            width: wp('75%'),
            height: hp('7%'),
            backgroundColor: '#ffffff',
            marginLeft: wp('3%'),
            textAlign: 'left',
            
    
    
    
        },
        input1: {
            borderTopRightRadius:2,
            borderBottomRightRadius:2,
            borderLeftColor:'black',
            borderWidth: 0.1,
            width: wp('20%'),
            height: hp('7%'),
            backgroundColor: '#ffffff',
        },
        tooltip:{
            borderWidth:1,
            borderColor:'black'
        },
        line:{
            borderBottomColor: 'black',
            borderBottomWidth: 0.2,
            marginTop:hp('1%'),
            width:wp('30%')
        },
        tooltext:{
            fontSize:15,
            color:'black',
            padding:1
        }
    })