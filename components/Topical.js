import { useState } from "react";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import InputField from "./InputField";

const Tablet = () => {
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).required("Name is required").label("Name"),
    frequance: Yup.string()
      .required("Frequance should be define")
      .label("Quantity"),
    duration: Yup.string().required("Time is required").label("Duration"),
  });

  return (
    <View>
      <Formik
        initialValues={{
          name: "",
          frequance: "",
          duration: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("Sappoint");
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <ScrollView
              style={{
                height: hp("90"),
                backgroundColor: "white",
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ScrollView style={{ height: hp("60") }}>
                  <InputField label={"Name and Strength"} name={"name"} />
                  <InputField label={"Frequance"} name={"frequance"} />
                  <InputField label={"Duration"} name={"duration"} />
                </ScrollView>
              </View>
              <View
                style={{
                  alignSelf: "center",
                }}
              >
                 <View style={{flexDirection:'row',alignSelf:'center'}}>
                  <AntDesign name="pluscircle" size={15} color="#0469e6" style={{padding:2}}/>
                <Text style={{color:'#0469e6',fontSize:14}}>Add New</Text>
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.btn1}>
                  <LinearGradient
                    colors={["#0469e6", "#4286f4", "#02a8ea"]}
                    style={styles.gradient}
                  >
                    <Text style={styles.textt}>Done</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
    </View>
  );
};
export default Tablet;

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
    width: wp("80%"),
    height: hp("7%"),
    borderColor: "#fff",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  textt: {
    color: "white",
    fontSize: 18,
  },
  btn1: {
    width: wp("80%"),
    height: hp("7%"),
    marginTop: hp(1),
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
