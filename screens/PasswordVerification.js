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
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, Fonts } from "../constants";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const OTP = () => {
  const navigation = useNavigation();
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });

  return (
    <>
      <Image
        style={{ position: "absolute", top: 0 }}
        source={require("../assets/icons/upWaves.png")}
      />
      <Image
        style={{ position: "absolute",top:'60%', right: 0 }}
        source={require("../assets/icons/circle.png")}
      />
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
            <Text style={styles.title}>Enter 5 Digits Code</Text>
            <Text style={styles.content}>
              Enter the 5 Digits code that you recieved on your email
            </Text>
          </View>
          <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={firstInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 1: text });
                  text && secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={secondInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 2: text });
                  text
                    ? thirdInput.current.focus()
                    : firstInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={thirdInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 3: text });
                  text
                    ? fourthInput.current.focus()
                    : secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={fourthInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 4: text });
                  text
                    ? fifthInput.current.focus()
                    : thirdInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={fifthInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 5: text });
                  !text && fourthInput.current.focus();
                }}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResetPassword");
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
    color: "gray",
    textAlign: "center",
    marginBottom: hp(2),
    paddingHorizontal: wp(10),
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 5,
    borderColor: "#d3d3d3",
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: "#0469e6",
    fontFamily: Fonts.POPPINS_MEDIUM,
    textAlign: "center",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
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

export default OTP;
