import React, { useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FloatingLabelInput } from "react-native-floating-label-input";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, Fonts } from "../constants";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const ForgetPassword = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  return (
    <>
      <Image
        style={{ position: "absolute", top: 0 }}
        source={require("../assets/icons/upWaves.png")}
      />
      {/* <Image
        style={{ position: "absolute", bottom: 0, right: 0 }}
        source={require("../assets/icons/circle.png")}
      /> */}
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Forget Password</Text>
            <Text style={styles.content}>
              We will send a verification code to your email
            </Text>
          </View>
          <View>
            <View style={{ marginTop: hp("2%") }}>
              <View style={styles.inputt}>
                <FloatingLabelInput
                  label={"Password"}
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
                    paddingHorizontal: 10,
                  }}
                  isPassword
                  togglePassword={show}
                  customShowPasswordComponent={
                    <Image
                      style={{ tintColor: "gray" }}
                      source={require("../assets/icons/eye.png")}
                    />
                  }
                  customHidePasswordComponent={
                    <Image
                      style={{ tintColor: "#2D58EF" }}
                      source={require("../assets/icons/eye.png")}
                    />
                  }
                  // value={values[name]}
                  // onChangeText={handleChange(name)}
                  // onBlur={() => setFieldTouched(name)}
                />
              </View>
              {/* <ErrorMessage message={errors[name]} visible={touched[name]} /> */}
            </View>
            <View style={{ marginTop: hp("2%") }}>
              <View style={styles.inputt}>
                <FloatingLabelInput
                  label={"Re-enter Password"}
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
                    paddingHorizontal: 10,
                  }}
                  isPassword
                  togglePassword={show}
                  customShowPasswordComponent={
                    <Image
                      style={{ tintColor: "gray" }}
                      source={require("../assets/icons/eye.png")}
                    />
                  }
                  customHidePasswordComponent={
                    <Image
                      style={{ tintColor: "#2D58EF" }}
                      source={require("../assets/icons/eye.png")}
                    />
                  }
                  // value={values[name]}
                  // onChangeText={handleChange(name)}
                  // onBlur={() => setFieldTouched(name)}
                />
              </View>
              {/* <ErrorMessage message={errors[name]} visible={touched[name]} /> */}
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PasswordVerification");
              }}
              style={styles.btn3}
            >
              <LinearGradient
                colors={["#0469e6", "#4286f4", "#02a8ea"]}
                style={styles.gradient}
              >
                <Text style={styles.textt}>Continue</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <Image
        style={{ position: "absolute", top:'60%' , right: 0, }}
        source={require("../assets/icons/circle.png")}
      />
      </View>
     
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    left: wp(4),
    top: hp(2),
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: wp(80),
    textAlign: "center",
  },
  btn3: {
    width: wp("90%"),
    height: hp("8%"),
    marginTop: hp("2%"),
    borderRadius: 10,
    alignSelf: "center",
  },

  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  textt: {
    color: "white",
    fontSize: 14,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 12,
    fontFamily: Fonts.POPPINS_REGULAR,
    textAlign: "center",
    color: "gray",
    marginBottom: hp(2),
  },
  inputt: {
    width: wp("90%"),
    height: hp("7%"),
    borderWidth: 0.5,
    borderColor: "#d3d3d3",
    backgroundColor: "#edf3f5",
    borderRadius: 8,
    alignSelf: "center",
    elevation: 2,
  },
  signinButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    marginHorizontal: 20,
    height: hp(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: "white",
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});

export default ForgetPassword;
