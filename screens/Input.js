import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { AppForm } from '../components/Index';
import {AppFormField as FormField} from '../components/FormField';

const NewNumber = () => {
    return(
        <View>
            <Text>abc</Text>
            <FormField
                  maxLength={25}
                  name="email"
                  placeholder="abc@gmail.com"
                  icon="edit"
                  title="Email"
                />
        </View>
    )
}
export default NewNumber;
const styles = StyleSheet.create({

})