import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import React from "react";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import UselessText from "./InputText";
import { Fonts } from "../constants";
import { FloatingLabelInput } from "react-native-floating-label-input";

import LinearGradient from "react-native-linear-gradient";
import InputField from "../components/InputField";
import { ScrollView } from "react-native-gesture-handler";
import * as yup from "yup";
import { Formik } from "formik";
import Header from "./Header";

const Medical = ({ navigation }) => {
  const [date, setDate] = useState("");
  const [Physicant, setPhysicant] = useState("");
  const [slmc, setSlmc] = useState("");
  const [draddress, setDraddress] = useState("");
  const [pname, setPname] = useState("");
  const [paddress, setPaddress] = useState("");
  const [diagonsis, setDiagonsis] = useState("");
  const [datefrom, setDatefrom] = useState("");
  const [dateuntil, setDateuntil] = useState("");
  const [remarks, setRemarks] = useState("");
  const [cdate, setCdate] = useState("");
  const [signature, setSignature] = useState("");

  const [selectedDate, setselectedDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDate = (date) => {
    setselectedDate(date.toDateString());
    hideDatePicker();
  };

  const validationSchema = yup.object().shape({
    // Doctor Details
    physicant: yup
      .string()
      .min(4)
      .required("Physicant's Name is required")
      .label("Physicant's Name"),
    slmcNumber: yup.string().required("SLMC Number is Required"),
    physicantAddress: yup.string().required("Physicant's Address is Required"),

    // Patient Details
    patient: yup
      .string()
      .min(4)
      .required("Patient's Name")
      .label("Patient's Name"),
    patientAddress: yup.string().required("Patient's Address is Required"),

    // Clerify that:
    diagonsis: yup.string().required("Diagnosis is Required"),
    workFrom: yup.string().required("Time is Required"),
    workUntil: yup.string().required("Time is Required"),
    diagonsis: yup.string().required("Diagnosis is Required"),
    remarks: yup.string().required("Remarks is Required"),
    signature: yup.string().required("Signature is Required"),
  });

  return (
    <Formik
      initialValues={{
        physicant: "",
        slmcNumber: "",
        physicantAddress: "",
        patient: "",
        patientAddress: "",
        diagonsis: "",
        workFrom: "",
        workUntil: "",
        diagonsis: "",
        remarks: "",
        signature: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate("Comment");
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
                               <Header title="Medical Certificate" onPress={()=> navigation.navigate("Prescrption")} />

          <View style={{marginTop:hp('2%') }}>
            <ScrollView>
              <View style={{ marginTop: hp("1%") }}>
                <Text style={styles.textaa}>To Whom it may Concern:</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={styles.inputt}>
                  <FloatingLabelInput
                    label="Date"
                    value={date}
                    mask="99/99/9999"
                    placeholder="12/02/2020"
                    keyboardType="numeric"
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
                    onChangeText={(value) => setDate(value)}
                  />
                </View>
              </View>
              <View style={{ marginTop: hp("1%") }}>
                <Text style={styles.textaa}>Doctor Details:</Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <InputField label={"Attending Physicant"} name={"physicant"} />

                <InputField label={"Address"} name={"physicantAddress"} />
              </View>

              <View style={{ marginTop: hp("1%") }}>
                <Text style={styles.textaa}>Patient Details:</Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <InputField label={"Patient Name"} name={"patient"} />

                <InputField label={"Address"} name={"patientAddress"} />
              </View>

              <View style={{ marginTop: hp("1%") }}>
                <Text style={styles.textaa}>Clerify that:</Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <InputField label={"Diagnosis"} name={"diagnosis"} />
                <InputField
                  label={"Add Unift for Work From"}
                  name={"workFrom"}
                />
                <InputField
                  label={"Add Unift for Work Until"}
                  name={"workUntil"}
                />

                <InputField label={"Remarks"} name={"remarks"} />

                <View style={{ marginTop: hp("2%") }}>
                  <View style={styles.inputt}>
                    <FloatingLabelInput
                      label="Date"
                      value={cdate}
                      mask="99/99/9999"

                      keyboardType="numeric"
                      placeholder="Ajith"
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
                      onChangeText={(value) => setCdate(value)}
                    />
                  </View>
                </View>

                <InputField label={"Signature"} name={"signature"} />
              </View>

              {/* <View style={{marginTop:hp('1%')}}>
    <Text style={styles.texta}>unfit for work from</Text>
    <View
                    style={styles.input}>
                                    <Text style={styles.caltext}>{selectedDate}</Text>

                        <TouchableOpacity onPress={showDatePicker}>
                        

<DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDate}
                onCancel={hideDatePicker}
            />

<EvilIcons name={'calendar'} color={'black'} size={35}
style={styles.icon1}

/>


                        

      </TouchableOpacity>

      </View>
  </View>
  <View style={{marginTop:hp('1%')}}>
    <Text style={styles.texta}>unfit for work until</Text>
    <View
                    style={styles.input}>
                                    <Text style={styles.caltext}>{selectedDate}</Text>

                        <TouchableOpacity onPress={showDatePicker}>
                        

<DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDate}
                onCancel={hideDatePicker}
            />

<EvilIcons name={'calendar'} color={'black'} size={35}
style={styles.icon1}

/>


                        

      </TouchableOpacity>

      </View>
  </View> */}

              {/* <View style={{marginTop:hp('1%')}}>
    <Text style={styles.texta}>Date</Text>
    <View
                    style={styles.input}>
                                    <Text style={styles.caltext}>{selectedDate}</Text>

                        <TouchableOpacity onPress={showDatePicker}>
                        

<DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDate}
                onCancel={hideDatePicker}
            />

<EvilIcons name={'calendar'} color={'black'} size={35}
style={styles.icon1}

/>

      </TouchableOpacity>

      </View>
  </View> */}

              <TouchableOpacity onPress={handleSubmit} style={styles.btn2}>
                <LinearGradient
                  colors={["#0469e6", "#4286f4", "#02a8ea"]}
                  style={styles.gradient}
                >
                  <Text style={styles.textt}>Send Comment</Text>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      )}
    </Formik>
  );
};
export default Medical;
const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("85%"),
  },
  text: {
    fontSize: 22,
    color: "white",
    padding: 5,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  inputt: {
    width: wp("90%"),
    height: hp("7%"),
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 1,
  },
  header: {
    flex: 1,
  },

  img: {
    width: wp("100%"),
    height: hp("10%"),
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  img1: {
    marginTop: hp("-10%"),
    width: wp("100%"),
  },
  img2: {
    marginTop: hp("-7%"),
    justifyContent: "flex-start",
    position: "absolute",
  },
  input: {
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: "white",
    width: wp("85%"),
    height: hp("7%"),
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
  textaa: {
    fontSize: 15,
    color: "black",
    marginLeft: wp("5%"),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  icon: {
    marginLeft: wp("-10%"),
    marginTop: hp("1%"),
  },
  input1: {
    height: hp("5.5%"),
    width: wp("9%"),
    borderColor: "#02a8ea",
    borderWidth: 0.2,
    borderRadius: 6,
    backgroundColor: "#02a8ea",
    marginLeft: wp("36%"),
    marginTop: hp("-4%"),
  },
  caltext: {
    fontSize: 16,
    color: "#b7bdcd",
    marginLeft: wp("5%"),
    fontWeight: "700",
    marginTop: hp("2%"),
  },
  icon1: {
    justifyContent: "flex-end",
    marginLeft: wp("75%"),
    marginTop: hp("-3%"),
  },
  main: {
    height: hp("30%"),
    width: wp("85%"),
    marginLeft: wp("8%"),
    backgroundColor: "#ffffff",
    borderRadius: 5,
    marginTop: hp("2%"),
  },
  btn2: {
    width: wp("85%"),
    height: hp("7%"),
    alignSelf: "center",
    marginTop: hp("2%"),
  },
  textt: {
    color: "white",
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
