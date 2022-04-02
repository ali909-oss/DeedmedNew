import React from 'react';
import {View, TextInput, StyleSheet, Text, Pressable} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {style} from 'styled-system';
import { Fonts } from '../constants';

function AppTextInput({
  icon,
  title,
  DOB,
  edit,
  onPress,
  width = wp('90%'),
  ...otherProps
}) {
  return (
    <View style={[styles.container, {width: width}]}>
      <View
        style={{
          paddingHorizontal: wp('1%'),
          // borderWidth: 1,
          // borderColor: 'red',
        }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: wp('-2%'),
          //borderWidth: 1, borderColor: 'red'
        }}>
        <TextInput
          placeholderTextColor={Colors.TEXT_INPUT_COLOR}
          style={styles.text}
          value={DOB}
          editable={edit}
          {...otherProps}
        />
        {icon && (
          <Pressable onPress={onPress} style={{padding: wp('1%')}}>
            <MaterialIcons
              name="edit"
              size={20}
              color="black"
              style={styles.icon}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    //width: wp('90%'),
    padding: wp('1%'),
    paddingHorizontal: wp('2%'),
    marginVertical: wp('2%'),
  },
  text: {
    color: 'black',
    fontFamily: Fonts.POPPINS_REGULAR,
    fontWeight: '400',
    fontSize: 16,
    width: wp('80%'),
  },
  icon: {
    //alignSelf: 'center',
  },
  title: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: "#0466E6",
    fontSize: 11,
    fontWeight: '500',
  },
});

export default AppTextInput;
