import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Fonts } from "../constants";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#edf3f5",
      }}
    >
      <Image
        style={{ height: 160, width: 150 }}
        source={require("../assets/icons/logo.png")}
      />
      <Image
        style={{ position: "absolute", top: 0 }}
        source={require("../assets/icons/upWaves.png")}
      />
      <Image
        style={{ position: "absolute", bottom: 0 }}
        source={require("../assets/icons/downWaves.png")}
      />
      <View style={{ marginTop: hp("2%") }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login")
          }}
          style={styles.btn2}
        >
          <LinearGradient
            colors={["#0469e6", "#4286f4", "#02a8ea"]}
            style={styles.gradient}
          >
            <Text style={styles.textt}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signup")
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.textbtn}>Sign up</Text>
        </View>
      </TouchableOpacity>
    </View>
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
  textt: {
    color: "white",
    fontSize: 18,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
  textBtn: {
    color: "white",
  },
  btn2: {
    width: wp("90%"),
    height: hp("8%"),
    marginTop: hp("5%"),
    borderRadius: 10,
    alignSelf: "center",
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
});
