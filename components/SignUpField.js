import { useState } from "react";
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { COLORS, Fonts } from "../constants";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";

export default function InputField({ name, label, width = 90, onPress }) {
  const { handleChange, setFieldTouched, errors, touched, values } =
    useFormikContext();
  return (
    <View style={{ marginTop: hp("2%") }}>
      <View style={[styles.inputt, { width: wp(width) }]}>
        <FloatingLabelInput
          label={label}
          customLabelStyles={{
            colorFocused: "#2D58EF",
            fontSizeFocused: 13,
          }}
          labelStyles={{
            fontFamily: Fonts.POPPINS_MEDIUM,
          }}
          inputStyles={{
            color: "#677294",
            paddingHorizontal: 5,

            marginTop: hp("1%"),
            fontFamily: Fonts.POPPINS_REGULAR,
            fontSize: 14,
            paddingBottom: 2,
          }}
          containerStyles={{
            borderColor: "#fff",
            paddingHorizontal: 10,
          }}
          value={values[name]}
          onChangeText={handleChange(name)}
          onBlur={() => setFieldTouched(name)}
        />
      </View>
      <ErrorMessage message={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: "#ffffff",
    width: wp("80%"),
    height: hp("5.5%"),
    backgroundColor: "#ffffff",
    marginLeft: wp("8%"),
    textAlign: "left",
  },
  texta: {
    fontSize: 16,
    color: "#7a95f5",
    fontWeight: "bold",
    marginLeft: wp("8%"),
    padding: 3,
  },
  icon: {
    marginLeft: wp("-10%"),
    marginTop: hp("1%"),
  },
  inputt: {
    height: hp("7%"),
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 1,
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    right: 10,
  },
});
