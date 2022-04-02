import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { Fonts } from "../constants";
import Header from "../components/Header";
import axios from "axios";
import { UserOfflineReason } from "react-native-agora";

const Rates = () => {
  const navigation = useNavigation();
  const [fee, setFee] = React.useState("0");
  const [charges, setCharges] = useState("0");
  const [price, setPrice] = React.useState("0");

  const fetchData = async () => {
    const res = await axios.get(
      "https://deedmedapibackend.herokuapp.com/api/v1/Users/1"
    );
    conversion(Number(res.data[0] && res.data[0].hourly_rate));
    console.log(res.data[0] && res.data[0].hourly_rate);
    console.log(res.data[0]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const conversion = (fee) => {
    setFee(fee);
    setCharges((Number(fee) * 0.2).toFixed(0));

    setPrice(String(Number(fee) + Number(fee * 0.2)));
  };

  const conversionR = (price) => {
    setPrice(price);
    setCharges((Number(price) * 0.2).toFixed(0));

    setFee(String(Number(price) - Number(price * 0.2)));
  };

  return (
    <View style={styles.container}>
      <Header
        title="Change Hourly Rate"
        onPress={() => navigation.navigate("HomeScreen")}
      />

      <View style={{ marginTop: hp("2%") }}>
        <View style={styles.main}>
          <View style={styles.view1}>
            <Text style={styles.texta}>Consultation Fee</Text>
            <Text style={styles.textb}>Total Amount Hourly</Text>
            <View style={styles.searchSection}>
              <TextInput
                // placeholder="$5.00"
                placeholderTextColor="gray"
                style={styles.input}
                value={String(fee)}
                onChangeText={(Fee) => {
                  conversion(Fee);
                }}
                keyboardType={"numeric"}
              />
            </View>
          </View>
          <View style={styles.view1}>
            <Text style={styles.texta}>Deedmed Service Fee</Text>
            <Text style={styles.textb}>Adding 20% charge</Text>
            <View style={styles.btn}>
              <LinearGradient
                colors={["#0469e6", "#4286f4", "#02a8ea"]}
                style={styles.gradient}
              >
                <Text style={styles.textt}>${charges}/hr</Text>
              </LinearGradient>
            </View>
          </View>
          <View style={styles.view1}>
            <Text style={styles.texta}>Displaying Price</Text>
            <Text style={styles.textb}>
              The price that will be displayed to patients
            </Text>
            <View style={styles.searchSection}>
              <TextInput
                // placeholder="$6.00"
                placeholderTextColor="gray"
                style={styles.input}
                value={price}
                onChangeText={(Price) => {
                  conversionR(Price);
                }}
                keyboardType={"numeric"}
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <View style={styles.btn1}>
              <LinearGradient
                colors={["#0469e6", "#4286f4", "#02a8ea"]}
                style={styles.gradient}
              >
                <Text style={styles.textt}>Done</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Rates;

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
    padding: hp("2%"),
    marginTop: hp("2%"),
    alignSelf: "center",
  },
  view1: {
    marginLeft: wp("4%"),
    marginTop: hp("3%"),
  },
  texta: {
    fontSize: 15,
    color: "#737373",
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  textb: {
    color: "#a0a0a0",
    fontSize: 12,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  input: {
    borderWidth: 0.1,
    borderColor: "black",
    color: "gray",
    width: wp("75%"),
    height: hp("7%"),
    marginTop: hp("1%"),
    backgroundColor: "#ffffff",
    textAlign: "center",
    elevation: 2,
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
    borderRadius: 5,
  },
  btn: {
    width: wp("50%"),
    height: hp("7%"),
    marginTop: hp("1%"),
  },
  btn1: {
    width: wp("80%"),
    height: hp("7%"),
    marginTop: hp("3%"),
    marginLeft: wp("3%"),
  },
});
