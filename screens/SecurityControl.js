import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { Fonts } from "../constants";
import Header from "../components/Header";
import axios from "axios";

const Security = () => {
  const [message, setMessage] = useState();

  const fetchData = async () => {
    const res = await axios.get(
      "https://deedmedapibackend.herokuapp.com/api/v1/security"
    );
    setMessage(res.data[0] && res.data[0].security_message);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        title="Security Control"
        onPress={() => navigation.navigate("HomeScreen")}
      />

      <View style={{ marginTop: hp("2%") }}>
        <View style={styles.main}>
          <Text style={styles.texta}>{message}</Text>
        </View>
      </View>
    </View>
  );
};
export default Security;

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    width: wp("100%"),
  },
  img: {
    width: wp("100%"),
    height: hp("12%"),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 22,
    color: "white",
    padding: 5,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  header: {
    flex: 1,
  },
  main: {
    width: wp("90%"),
    borderRadius: 10,
    backgroundColor: "white",
    padding: wp("2%"),
    marginBottom: hp("2%"),
    alignSelf: "center",
  },
  texta: {
    fontSize: 14,
    textAlign: "auto",
    padding: 5,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
});
