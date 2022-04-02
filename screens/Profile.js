import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import InputField from "../components/InputField";
import moment from "moment";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import Entypo from "react-native-vector-icons/dist/Entypo";
import ErrorMessage from "../components/ErrorMessage";
import { Picker } from "@react-native-picker/picker";

import React, { useState } from "react";

import DatePicker from "react-native-date-picker";
import Modal from "react-native-modal";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from "react-native-gesture-handler";

import LinearGradient from "react-native-linear-gradient";
import BottomSheet from "reanimated-bottom-sheet";
import ImagePicker from "react-native-image-crop-picker";
import { COLORS, Fonts } from "../constants";
import DropDown from "react-native-paper-dropdown";
import { DefaultTheme, Provider } from "react-native-paper";
// import MultiSelect from "../components/MultiSelect";
import { FloatingLabelInput } from "react-native-floating-label-input";
import * as yup from "yup";
import { Formik } from "formik";
import AppTextInput from "../components/TextInput";

const image = [
  {
    user_image: require("../assets/icons/image.png"),
  },
];

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const Profile = ({ navigation }) => {
  // textinput
  const [date, setDate] = React.useState("");
  const [openDate, setOpenDate] = React.useState(false);

  // datepicker
  const [selectedDate, setselectedDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDate = (date) => {
    setselectedDate(date.toDateString());
    hideDatePicker();
  };
  // Dropdown
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState("");
  const genderList = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
  ];

  const [open1, setOpen1] = useState(false);

  const [items1, setItems1] = useState([
    { label: "Brain", value: "1" },
    { label: "Heart", value: "2" },
  ]);
  // multiselct
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [interest, setInterest] = useState([]);
  const interestList = [
    {
      label: "Brain",
      value: "Brain",
    },
    {
      label: "Heart",
      value: "Heart",
    },
  ];
  // onSelectedItemsChange = (selectedItems) => {
  //   setInterest({ selectedItems });
  // };

  // BottomSheet
  const [image, setImage] = useState();

  const sheetRef = React.useRef(null);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      multiple: true,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      sheetRef.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      multiple: true,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      sheetRef.current.snapTo(1);
    });
  };

  const renderInner = () => (
    <View style={styles.bottom}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => {
          sheetRef.current.snapTo(1);
        }}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.Header}>
      <View style={styles.panelheader}>
        <View style={styles.panelhandle}></View>
      </View>
    </View>
  );

  // bs= React.createRef();
  // fall= new Animated.Value(1);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = yup.object().shape({
    name: yup.string().min(4).required("Name is required").label("Name"),
    dateOfBirth: yup.string(),
    // .nullable()
    // .test("Date of Birth", "Should be greather than 18", function (value) {
    //   return moment().diff(moment(value), "years") >= 18;
    // }),
    gender: yup.string().required("Gender is Required"),
    phone: yup.string().required(),
    // .matches(phoneRegExp, "Phone number is not valid"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    address: yup.string().required("Address is Required"),
    district: yup.string().required("District is Required"),
    location: yup.string().required("Location is Required"),
    interest: yup.string().required("Area of Interest is Required"),
    slmcRegNo: yup.string().required("slmcRegNo is Required"),
    qualification: yup.string().required("Qualification is Required"),
    serviceExperience: yup.string().required("Service Experience is Required"),
    membership: yup.string(),
    profileDescription: yup
      .string()
      .min(20)
      .required("Minimum 20 characters are required")
      .label("Description"),
    owner: yup.string().min(4).required("Account Holder's Name is required"),
    bank: yup.string().min(4).required("Bank is required"),
    branch: yup.string().required("Branch is required"),
    account: yup.string().required("Account is required"),
  });

  // const [selectedItems, setSelectedItems] = useState([]);

  // const onSelectedItemsChange = (selectedItems) => {
  //   // Set Selected Items
  //   setSelectedItems(selectedItems);
  // };

  return (
    <Provider theme={theme}>
      <Formik
        initialValues={{
          email: "",
          name: "",
          phone: "",
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
          profileDescription: "",
          owner: "",
          bank: "",
          branch: "",
          account: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("HomeScreen");
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
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                style={styles.img}
                source={require("../assets/icons/bg.png")}
              />
              <Image
                style={styles.img1}
                source={require("../assets/icons/wave.png")}
              />

              <View
                style={{
                  flexDirection: "row",
                  marginTop: hp("-25%"),
                  marginLeft: wp("4%"),
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("HomeScreen")}
                >
                  <Ionicons
                    name={"md-arrow-back-circle-sharp"}
                    size={45}
                    color={"white"}
                  />
                </TouchableOpacity>
                <Text style={styles.text}>Profile</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <View style={styles.profile}>
                    <Image
                      source={image && image[0].user_image}
                      style={styles.userimg}
                    />
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        sheetRef.current.snapTo(0);
                      }}
                    >
                      <View
                        style={{
                          height: hp("4%"),
                          width: wp("8%"),
                          borderRadius: 60,
                          backgroundColor: "#536fa4",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: wp("20%"),
                          marginTop: hp("-3%"),
                          position: "absolute",
                        }}
                      >
                        <Entypo name={"camera"} size={15} color={"#ffffff"} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    marginLeft: wp(3),
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: Fonts.POPPINS_MEDIUM,
                      color: "#312e2f",
                      color: "white",
                    }}
                  >
                    Set Up Your Profile
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: "white",
                      padding: 3,
                      width: wp(55),
                      fontFamily: Fonts.POPPINS_MEDIUM,
                    }}
                  >
                    Update your profile to connect your doctor with better
                    impression.
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView nestedScrollEnabled={true}>
                <View>
                  <Text style={styles.textf}>Personal Information</Text>

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <InputField label={"Name"} name={"name"} />
                    <TouchableOpacity onPress={showDatePicker}>
                      <View>
                        <InputField
                          label={"Date of Birth"}
                          name={"dob"}
                          onPress={showDatePicker}
                        />
                      </View>
                    </TouchableOpacity>

                    <View style={{ marginTop: hp("2%") }}>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                          elevation: 2,
                        }}
                      >
                        <View
                          style={{
                            paddingHorizontal: wp("3.9%"),

                            // paddingBottom: wp('-9%'),
                            paddingTop: wp("1"),
                          }}
                        >
                          <Text
                            style={{
                              marginBottom: -15,
                              color: "#2D58EF",
                              fontSize: 13,
                              fontFamily: Fonts.POPPINS_MEDIUM,
                            }}
                          >
                            Gender
                          </Text>
                        </View>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <TextInput
                            style={{
                              paddingHorizontal: wp(4),
                              fontSize: hp(2.4),
                              width: wp(90),
                              color: "#677294",
                            }}
                            placeholder="Name"
                            placeholderTextColor={"gray"}
                          />
                          <MaterialIcons
                            style={styles.icon}
                            name="edit"
                            size={20}
                          />
                        </View>
                      </View>
                      <View style={{ marginTop: hp(1) }}>
                        {/* <ErrorMessage
                          message={errors.gender}
                          visible={touched.gender}
                        /> */}
                      </View>
                    </View>

                    <View style={{ marginTop: hp("2%") }}>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 10,
                          elevation: 2,
                        }}
                      >
                        <View
                          style={{
                            paddingHorizontal: wp("3.9%"),

                            // paddingBottom: wp('-9%'),
                            paddingTop: wp("1"),
                          }}
                        >
                          <Text
                            style={{
                              marginBottom: -15,
                              color: "#2D58EF",
                              fontSize: 13,
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
                              width: wp("90%"),
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
                    <InputField label={"Email"} name={"email"} />
                    <InputField label={"Phone"} name={"phone"} />
                    <InputField label={"Clinic Address"} name={"address"} />
                    <InputField label={"District"} name={"district"} />
                    <InputField label={"Location"} name={"location"} />
                    <View style={{ marginVertical: hp("1%") }}>
                      <View style={styles.drop}>
                        <DropDown
                          label={"Area of Interest"}
                          mode={"outlined"}
                          visible={showMultiSelectDropDown}
                          showDropDown={() => setShowMultiSelectDropDown(true)}
                          onDismiss={() => setShowMultiSelectDropDown(false)}
                          value={values.interest}
                          setValue={handleChange("interest")}
                          list={interestList}
                          multiSelect
                        />
                      </View>
                      <View style={{ marginTop: hp(1) }}>
                        <ErrorMessage
                          message={errors.interest}
                          visible={touched.interest}
                        />
                      </View>
                    </View>

                    <InputField label={"SLMC Reg No."} name={"slmcRegNo"} />
                    <InputField
                      label={"Qualification"}
                      name={"qualification"}
                    />
                    <InputField
                      label={"Service Experience"}
                      name={"serviceExperience"}
                    />
                    <InputField
                      label={"Other Professional Membership"}
                      name={"membership"}
                    />
                    <InputField
                      label={"Profile Description"}
                      name={"profileDescription"}
                    />
                  </View>
                  <View style={{ marginTop: hp("2%") }}>
                    <Text style={styles.textf}>Bank Details</Text>
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <InputField
                        label={"Account's Holder Name"}
                        name={"owner"}
                      />
                      <InputField label={"Bank Name"} name={"bank"} />
                      <InputField label={"Branch"} name={"branch"} />
                      <InputField label={"Account Number"} name={"account"} />
                    </View>
                  </View>
                  <View style={{ marginTop: hp("2%") }}>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.btn2}
                    >
                      <LinearGradient
                        colors={["#0469e6", "#4286f4", "#02a8ea"]}
                        style={styles.gradient}
                      >
                        <Text style={styles.textt}>Save Profile</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={toggleModal}>
                    <View style={styles.btn}>
                      <Text style={styles.textbtn}>Deactivate Profile</Text>
                    </View>

                    <Modal
                      style={styles.modal}
                      isVisible={isModalVisible}
                      animationType={"slide"}
                      onSwipeComplete={() => setModalVisible(false)}
                      swipeDirection="left"
                    >
                      <View>
                        <View style={styles.Ellipse}>
                          <Image
                            style={styles.image1}
                            source={require("../assets/icons/excla.png")}
                          />
                        </View>
                        <View>
                          <Text style={styles.textt}>
                            Deactivate Your Profile
                          </Text>
                          <Text style={styles.desc}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam"
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "column",
                            marginTop: hp("2%"),
                          }}
                        >
                          <View>
                            <TouchableOpacity
                              onPress={toggleModal}
                              style={styles.btn1}
                            >
                              <LinearGradient
                                colors={["#dfe7ef", "#dfe7ef"]}
                                style={styles.gradient}
                              >
                                <Text style={styles.texttt}>Cancel</Text>
                              </LinearGradient>
                            </TouchableOpacity>
                          </View>
                          <View style={{ marginTop: hp("1%") }}>
                            <TouchableOpacity
                              onPress={() => navigation.navigate("HomeScreen")}
                              style={styles.btn1}
                            >
                              <LinearGradient
                                colors={["#0469e6", "#4286f4", "#02a8ea"]}
                                style={styles.gradient}
                              >
                                <Text style={styles.texts}>Continue</Text>
                              </LinearGradient>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </Modal>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            <BottomSheet
              renderContent={renderInner}
              renderHeader={renderHeader}
              borderRadius={20}
              ref={sheetRef}
              snapPoints={[280, 0]}
              initialSnap={1}
              enabledGestureInteraction={true}
            />
          </View>
        )}
      </Formik>
    </Provider>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("85%"),
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 25,
    color: "white",
    padding: 5,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  header: {
    flex: 1,
  },

  img: {
    width: wp("100%"),
    height: hp("20%"),
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  img1: {
    marginTop: hp("-20%"),
    width: wp("100%"),
  },
  textf: {
    fontSize: 18,
    color: "#312e2f",
    marginLeft: wp("4%"),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  input: {
    borderRadius: 10,
    width: wp("85%"),
    height: hp("8%"),
    backgroundColor: "#ffffff",
    marginLeft: wp("8%"),
    textAlign: "left",
    elevation: 2,
  },
  input1: {
    borderRadius: 10,
    width: wp("85%"),
    height: hp("15%"),
    backgroundColor: "#ffffff",
    textAlign: "left",
    elevation: 2,
  },
  drop: {
    borderRadius: 10,
    width: wp("100%"),
    height: hp("7%"),
  },
  texta: {
    fontSize: 16,
    color: "#7a95f5",
    fontWeight: "bold",
    marginLeft: wp("8%"),
    padding: 3,
  },
  // icon: {
  //   marginTop: hp("1%"),
  //   justifyContent: "flex-end",
  // },
  icon: {
    position: "absolute",
    right: 10,
  },
  icon1: {
    marginLeft: wp("-10%"),
    marginTop: hp("5%"),
  },
  cal: {
    width: wp("70%"),
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 10,
    height: hp("7%"),
    marginLeft: wp("5%"),
  },
  caltext: {
    fontSize: 16,
    color: "#bcbcc2",
    marginLeft: wp("3%"),
    fontWeight: "700",
    marginTop: hp("2%"),
  },
  date: {
    marginLeft: wp("75%"),
    marginTop: hp("-4%"),
  },
  btn: {
    width: wp("90%"),
    height: hp("7%"),
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#e93737",
    marginTop: hp("2%"),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textbtn: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: "#e93737",
  },
  modal: {
    flex: 0,

    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: "center",
    textAlign: "center",
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wp("10%"),
    marginTop: hp("20%"),
    height: hp("50%"),
    width: wp("80%"),
    alignContent: "center",
  },
  Ellipse: {
    width: wp("24%"),
    height: hp("12%"),
    borderRadius: 50,
    backgroundColor: "#e7f2f8",
    marginLeft: wp("25%"),
  },
  image1: {
    alignSelf: "center",
    marginTop: hp("2%"),
  },
  textt: {
    fontSize: 20,
    fontWeight: "700",
    color: "#312e2f",
    marginLeft: wp("10%"),
  },
  desc: {
    padding: 8,
    fontSize: 14,
    color: "#b8bdcd",
    marginLeft: wp("5%"),
  },
  btn1: {
    width: wp("70%"),
    height: hp("7%"),
    marginLeft: wp("5%"),
  },
  inputt: {
    width: wp("85%"),
    height: hp("7%"),
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },

  texttt: {
    color: "#a6acc0",
    fontSize: 22,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  texts: {
    color: "white",
    fontSize: 22,
  },
  profile: {
    width: wp("18%"),
    height: hp("9%"),
    borderRadius: 50,
    backgroundColor: "#ffffff",
    marginLeft: wp("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
  userimg: {
    resizeMode: "contain",
    width: wp("18%"),
    height: hp("10%"),
  },
  bottom: {
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
  },
  panel: {
    padding: 20,
    backgroundColor: "black",
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  Header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelheader: {
    alignItems: "center",
  },
  panelhandle: {
    width: 50,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 8,
  },
  textt: {
    color: "white",
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  btn2: {
    width: wp("90%"),
    height: hp("7%"),
    marginTop: hp("5%"),
    alignSelf: "center",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  drop: {
    borderRadius: 10,
    width: wp("85%"),
    height: hp("6%"),
  },
});
