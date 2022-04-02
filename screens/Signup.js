import {
  View,
  ScrollView,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import DropDown from "react-native-paper-dropdown";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Fonts, COLORS } from "../constants";
import SignUpField from "../components/SignUpField";
import { Modal, NativeBaseProvider, Radio } from "native-base";
import ErrorMessage from "../components/ErrorMessage";
import { Formik } from "formik";
import { DefaultTheme, Provider, Checkbox } from "react-native-paper";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showgender, setShowgender] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showservingArea, setshowservingArea] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState([]);
  const genderList = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];
  const categoryList = [
    {
      label: "Brain",
      value: "Brain",
    },
    {
      label: "Lungs",
      value: "Lungs",
    },
    {
      label: "Skin",
      value: "Skin",
    },
  ];
  const servingAreaList = [
    {
      label: "Home Visiting",
      value: "HV",
    },
    {
      label: "Private Clinic",
      value: "PC",
    },
    {
      label: "Online",
      value: "online",
    },
  ];
  const LanguageList = [
    {
      label: "English",
      value: "English",
    },
    {
      label: "Marathi",
      value: "Marathi",
    },
    {
      label: "Hindi",
      value: "online",
    },
  ];
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };
  const validationSchema = yup.object().shape({
    language: yup.string().required().label("Language"),
    name: yup.string().min(4).required("Name is required").label("Name"),
    dateOfBirth: yup.string(),
    // .nullable()
    // .test("Date of Birth", "Should be greather than 18", function (value) {
    //   return moment().diff(moment(value), "years") >= 18;
    // }),
    gender: yup.string().required("Gender is Required"),
    phone: yup.string().required(),
    telephone: yup.string().required(),
    // .matches(phoneRegExp, "Phone number is not valid"),
    address: yup.string().required("Private Clinic Address is Required"),
    district: yup.string().required("District is Required"),
    location: yup.string().required("Location is Required"),
    slmcRegNo: yup.string().required("slmcRegNo is Required"),
    qualification: yup.string().required("Qualification is Required"),
    serviceExperience: yup.string().required("Service Experience is Required"),
    membership: yup.string(),
    serviceCategory: yup.string().required().label("Service Category"),
    servingArea: yup.string().required().label("Serving Area"),
    email: yup.string().email().required().label("Email"),
    password: yup.string().required().label("Password"),
  });

  return (
    <NativeBaseProvider>
      <View>
        <Formik
          initialValues={{
            language: "",
            servingArea: "",
            serviceCategory: "",
            email: "",
            name: "",
            phone: "",
            telephone: "",
            dob: "",
            address: "",
            district: "",
            gender: "",
            location: "",
            interest: "",
            slmcRegNo: "",
            qualification: "",
            serviceExperience: "",
            membership: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            setIsOpen(true);
          }}
          validationSchema={validationSchema}
        >
          {({
            handleSubmit,
            handleChange,
            errors,
            values,
            setFieldTouched,
            touched,
          }) => (
            <ScrollView
              style={{
                backgroundColor: "#edf3f5",
              }}
            >
              <View>
                <Image
                  style={{ position: "absolute", top: 0 }}
                  source={require("../assets/icons/upWaves.png")}
                />
                <Image
                  style={{ position: "absolute", right: 0 }}
                  source={require("../assets/icons/circle.png")}
                />
                <View
                  style={{
                    alignItems: "center",

                    marginTop: hp(10),
                  }}
                >
                  <Text
                    style={{
                      fontSize: hp(3),
                      fontFamily: Fonts.POPPINS_SEMI_BOLD,
                    }}
                  >
                    Join us to start Consulting
                  </Text>
                  <Text
                    style={{
                      paddingHorizontal: wp(8),
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
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
                <Provider theme={theme}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        marginTop: hp(2),
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: wp(90),
                        elevation: 2,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            color: "#677294",
                            paddingLeft: wp(3),
                            fontSize: 16,
                          }}
                        >
                          Language
                        </Text>
                      </View>
                      <View>
                        <View style={{ width: wp(50), borderColor: "white" }}>
                          <DropDown
                            mode={"outlined"}
                            visible={showLanguage}
                            showDropDown={() => setShowLanguage(true)}
                            onDismiss={() => setShowLanguage(false)}
                            setValue={handleChange("language")}
                            value={values.language}
                            list={LanguageList}
                            multiSelect
                          />
                        </View>
                      </View>
                    </View>
                    <View style={{ marginTop: hp(1) }}>
                      <ErrorMessage
                        message={errors.language}
                        visible={touched.language}
                      />
                    </View>

                    <SignUpField label={"Name"} name={"name"} width={90} />
                    <SignUpField
                      label={"Date of Birth"}
                      name={"dob"}
                      width={90}
                    />
                    <View
                      style={{
                        marginTop: hp("2%"),
                        height: hp(7),
                        width: wp(90),
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <View style={{}}>
                          <Text
                            style={{
                              // marginBottom: -15,
                              color: "#677294",
                              paddingLeft: wp(3),
                              fontSize: 16,
                            }}
                          >
                            Gender
                          </Text>
                        </View>
                        <View>
                          <Picker
                            mode="dropdown"
                            onValueChange={handleChange("gender")}
                            selectedValue={values.gender}
                            style={{
                              width: wp("40%"),
                            }}
                          >
                            {genderList.map((data) => {
                              return (
                                <Picker.Item
                                  label={data.label}
                                  value={data.label}
                                />
                              );
                            })}
                          </Picker>
                        </View>
                      </View>
                      <View style={{ marginTop: hp(1) }}>
                        <ErrorMessage
                          message={errors.gender}
                          visible={touched.gender}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <SignUpField
                        label={"Qualifications"}
                        name={"qualifications"}
                        width={80}
                      />
                      <Image
                        style={{
                          marginTop: hp(2),
                          width: 25,
                          height: 25,
                          marginHorizontal: wp(2),
                        }}
                        source={require("../assets/icons/plus.png")}
                      />
                    </View>

                    <SignUpField
                      label={"SLMC Reg.No"}
                      name={"slmc"}
                      width={90}
                    />
                    <SignUpField
                      label={"Service Experience Years"}
                      name={"serviceExperience"}
                      width={90}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <SignUpField
                        label={"Other Professional Memberships"}
                        name={"membership"}
                        width={80}
                      />
                      <Image
                        style={{
                          marginTop: hp(2),
                          width: 25,
                          height: 25,
                          marginHorizontal: wp(2),
                        }}
                        source={require("../assets/icons/plus.png")}
                      />
                    </View>

                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        marginTop: hp(2),
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: wp(90),
                        elevation: 2,
                      }}
                    >
                      <View style={{}}>
                        <Text
                          style={{
                            // marginBottom: -15,
                            color: "#677294",
                            paddingLeft: wp(3),
                            fontSize: 16,
                          }}
                        >
                          Service Category
                        </Text>
                      </View>
                      <View>
                        <View style={{ width: wp(50), borderColor: "white" }}>
                          <DropDown
                            mode={"outlined"}
                            visible={showCategory}
                            showDropDown={() => setShowCategory(true)}
                            onDismiss={() => setShowCategory(false)}
                            setValue={handleChange("serviceCategory")}
                            value={values.serviceCategory}
                            list={categoryList}
                            multiSelect
                          />
                        </View>
                      </View>
                    </View>
                    <View style={{ marginTop: hp(1) }}>
                      <ErrorMessage
                        message={errors.serviceCategory}
                        visible={touched.serviceCategory}
                      />
                    </View>

                    <SignUpField label={"Email"} name={"email"} width={90} />
                    <SignUpField label={"Phone"} name={"phone"} width={90} />
                    <SignUpField
                      label={"Telephone No"}
                      name={"telephone"}
                      width={90}
                    />
                    <SignUpField
                      label={"District"}
                      name={"district"}
                      width={90}
                    />

                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        marginTop: hp(2),
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: wp(90),
                        elevation: 2,
                      }}
                    >
                      <View style={{}}>
                        <Text
                          style={{
                            // marginBottom: -15,
                            color: "#677294",
                            paddingLeft: wp(3),
                            fontSize: 16,
                          }}
                        >
                          Serving Areas
                        </Text>
                      </View>
                      <View>
                        <View style={{ width: wp(50), borderColor: "white" }}>
                          <DropDown
                            mode={"outlined"}
                            visible={showservingArea}
                            showDropDown={() => setshowservingArea(true)}
                            onDismiss={() => setshowservingArea(false)}
                            // value={gender}
                            setValue={handleChange("servingArea")}
                            value={values.servingArea}
                            // setValue={setGender}
                            list={servingAreaList}
                            multiSelect
                          />
                        </View>
                      </View>
                    </View>

                    <View style={{ marginTop: hp(1) }}>
                      <ErrorMessage
                        message={errors.servingArea}
                        visible={touched.servingArea}
                      />
                    </View>

                    <SignUpField
                      label={"Private Clinic Address"}
                      name={"pca"}
                      width={90}
                    />
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
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: hp(1),
                    }}
                  >
                    <Checkbox
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                    <Text style={{ fontSize: 12, color: "gray" }}>
                      I agree with the Terms of Service & Privacy Policy
                    </Text>
                  </View>
                </Provider>
                <View>
                  <TouchableOpacity
                    onPress={() => setIsOpen(true)}
                    style={styles.btn3}
                  >
                    <LinearGradient
                      colors={["#0469e6", "#4286f4", "#02a8ea"]}
                      style={styles.gradient}
                    >
                      <Text style={styles.textt}>Signup</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: hp(4),
                    marginBottom: hp(7),
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text
                      style={{
                        fontFamily: Fonts.POPPINS_REGULAR,
                        color: "#265ED7",
                      }}
                    >
                      Have an Account? Log in
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          )}
        </Formik>
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
  drop: {
    marginVertical: hp(2),
    borderRadius: 10,
    width: wp("90%"),
    height: hp("6%"),
    backgroundColor: "red",
  },
  gradient1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btn4: {
    width: wp("72%"),
    height: hp("6.5%"),
    marginTop: hp("3%"),
    borderRadius: 5,
    alignSelf: "center",
  },
});
