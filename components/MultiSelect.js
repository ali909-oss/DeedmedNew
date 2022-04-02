import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import DropDown from "react-native-paper-dropdown";
import {
    Appbar,
    DarkTheme,
    DefaultTheme,
    Provider,
    Surface,
    ThemeProvider,
    useTheme,
   
  } from "react-native-paper";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
    widthPercentageToDP,
  } from 'react-native-responsive-screen';



  
const MultiSelect = (props) =>{

    const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
    const [interest, setInterest] = useState("");
    const interestList = [
        {
          label: "Brain",
          value: "Brain",
        },
        {
          label: "Heart",
          value: "Heart",
        },
    ]
    return(

    
            <View style={styles.drop}>
            <DropDown
              label={"Area of Interest"}
              mode={"flat"}
              visible={showMultiSelectDropDown}
              showDropDown={() => setShowMultiSelectDropDown(true)}
              onDismiss={() => setShowMultiSelectDropDown(false)}
              value={interest}
              setValue={setInterest}
              list={interestList}
              multiSelect
              
            />
            </View>


    )
}
export default MultiSelect;
const styles=StyleSheet.create({
    drop:{
        borderRadius: 10,
        width: wp('85%'),
        height: hp('6%'),
      
      },
})