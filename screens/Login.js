import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Fonts, COLORS } from "../constants";
import ErrorMessage from "../components/ErrorMessage";
import { Modal, NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { Formik } from "formik";
export default function Login() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
  });
  return (
    <NativeBaseProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#edf3f5",
        }}
      >
        <Image
          style={{ position: "absolute", top: 0 }}
          source={require("../assets/icons/upWaves.png")}
        />
        <Image
          style={{ position: "absolute", bottom: 0 }}
          source={require("../assets/icons/downWaves.png")}
        />
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center", paddingHorizontal: wp(10) }}>
            <Text
              style={{ fontSize: hp(3), fontFamily: Fonts.POPPINS_SEMI_BOLD }}
            >
              Welcome back
            </Text>
            <Text style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
          <View
            style={{
              marginTop: hp(5),
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => {
                  console.log("Google");
                }}
              >
                <View style={styles.btn1}>
                  <Image
                    style={{ marginRight: wp(3) }}
                    source={require("../assets/icons/google.png")}
                  />
                  <Text style={styles.textt}>Google</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  console.log("Facebook");
                }}
              >
                <View style={styles.btn2}>
                  <Image
                    style={{ marginRight: wp(3) }}
                    source={require("../assets/icons/facebook.png")}
                  />
                  <Text style={styles.textt}>Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              fontSize: hp(2.2),
              color: "gray",
              alignSelf: "center",
              marginTop: hp(1.7),
            }}
          >
            Or
          </Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
              setIsOpen(true);
            }}
            validationSchema={validationSchema}
          >
            {({
              handleSubmit,
              handleChange,
              setFieldTouched,
              errors,
              touched,
              values,
            }) => (
              <>
                <View style={{ marginTop: hp("2%") }}>
                  <View style={styles.inputt}>
                    <FloatingLabelInput
                      label={"Email"}
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
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={() => setFieldTouched("email")}
                    />
                  </View>
                  <ErrorMessage
                    message={errors.email}
                    visible={touched.email}
                  />
                </View>
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
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={() => setFieldTouched("password")}
                    />
                  </View>
                  <ErrorMessage
                    message={errors.password}
                    visible={touched.password}
                  />
                </View>
                <View style={{ marginTop: hp("2%") }}>
                  <TouchableOpacity onPress={handleSubmit} style={styles.btn3}>
                    <LinearGradient
                      colors={["#0469e6", "#4286f4", "#02a8ea"]}
                      style={styles.gradient}
                    >
                      <Text style={styles.textt}>Login</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: hp(2.4),
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgetPassword")}
            >
              <Text
                style={{
                  fontFamily: Fonts.POPPINS_REGULAR,
                  color: "#265ED7",
                }}
              >
                Forget Password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
            >
              <Text
                style={{
                  marginTop: hp(2),
                  fontFamily: Fonts.POPPINS_REGULAR,
                  color: "#265ED7",
                }}
              >
                Don't have an account? join us
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
      <Modal isOpen={isOpen}>
        <View
          style={{
            backgroundColor: "white",
            width: wp(80),
            height: hp(41),
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              marginTop: hp(1),
              backgroundColor: "#E7F2F8",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 35, height: 44 }}
              source={require("../assets/icons/sandwatch.png")}
            />
          </View>
          <View style={{ marginTop: hp(2), alignItems: "center" }}>
            <Text
              style={{ fontSize: hp(3), fontFamily: Fonts.POPPINS_SEMI_BOLD }}
            >
              Will be Patient
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#677294",
                textAlign: "center",
                marginHorizontal: wp(2),
              }}
            >
              DEEDMED Verify Manually and Approve Your Registration
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Tabs");
              }}
              style={styles.btn4}
            >
              <LinearGradient
                colors={["#0469e6", "#4286f4", "#02a8ea"]}
                style={styles.gradient1}
              >
                <Text style={styles.textt}>Done</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: wp("90%"),
    height: hp("7%"),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2D58EF",
    marginTop: hp("2%"),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textbtn: {
    color: "#2D58EF",
    fontSize: 18,
  },
  inputt: {
    width: wp("85%"),
    height: hp("7%"),
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  textt: {
    color: "white",
    fontSize: 14,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  textBtn: {
    color: "white",
  },
  btn1: {
    flexDirection: "row",
    width: wp("40%"),
    height: hp("6%"),
    borderRadius: 10,
    backgroundColor: "#EA4335",
    alignItems: "center",
    justifyContent: "center",
  },
  btn2: {
    flexDirection: "row",
    width: wp("40%"),
    height: hp("6%"),
    borderRadius: 10,
    backgroundColor: "#3457A0",
    alignItems: "center",
    justifyContent: "center",
  },
  texttt: {
    color: "#a6acc0",
    fontSize: 22,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  texts: {
    color: "white",
    fontSize: 22,
  },
  input: {
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: "#ffffff",
    width: wp("80%"),
    height: hp("5.5%"),
    backgroundColor: "#ffffff",
    marginLeft: wp("8%"),
    textAlign: "left",
    borderWidth: 0.5,
    borderColor: "black",
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
    width: wp("90%"),
    height: hp("7%"),
    borderColor: COLORS.lightGray3,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  btn3: {
    width: wp("90%"),
    height: hp("9%"),
    marginTop: hp("5%"),
    borderRadius: 10,
    alignSelf: "center",
  },
  btn4: {
    width: wp("72%"),
    height: hp("6.5%"),
    marginTop: hp("3%"),
    borderRadius: 5,
    alignSelf: "center",
  },

  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  gradient1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
