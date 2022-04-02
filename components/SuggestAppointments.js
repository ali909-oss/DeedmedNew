import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  Pressable,
  TouchableOpacity,
  updateSecureTextEntry,
  FlatList,
  ImageBackground,
  Icon,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from "react-native-selectmultiple-button";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import Entypo from "react-native-vector-icons/dist/Entypo";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal";
import { Fonts } from "../constants";
import SimpleButton from "./NewButton";
import Header from "./Header";
import { useState } from "react";
import { TouchableItem } from "react-native-tab-view";

const Sappoint = ({ navigation }) => {
  const [selectedDate, setselectedDate] = useState("Choose");
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

  //   Modal
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
                      <Header title="Suggest Next Appointments" onPress={()=> navigation.navigate("Prescrption")} />

      <View style={{ marginTop:hp('2%')}}>
        <View>
          <Image
            style={styles.img2}
            source={require("../assets/icons/Ellip1.png")}
          />

          <View style={{ marginTop: hp("2%"), paddingHorizontal: wp(5) }}>
            <Text style={styles.texta}>Choose Date</Text>

            <TouchableOpacity onPress={showDatePicker}>
              <View style={styles.input}>
                <Text style={styles.caltext}>{selectedDate}</Text>

                <View style={styles.input1}>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDate}
                    onCancel={hideDatePicker}
                  />
                  <LinearGradient
                    colors={["#0469e6", "#4286f4", "#02a8ea"]}
                    style={styles.gradient}
                  >
                    <EvilIcons
                      name={"calendar"}
                      color={"white"}
                      size={28}
                      style={styles.time}
                    />
                  </LinearGradient>
                </View>
              </View>
            </TouchableOpacity>

            <SimpleButton />
          </View>
          <View style={{ marginTop: hp("5%") }}>
            <TouchableOpacity
               onPress={toggleModal}
              style={styles.btn1}
            >
              <LinearGradient
                colors={["#0469e6", "#4286f4", "#02a8ea"]}
                style={styles.gradient}
              >
                <Text style={styles.textt}>Done</Text>
              </LinearGradient>
              <Modal
                style={styles.modal}
                isVisible={isModalVisible}
                animationType={"slide"}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="left"
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View style={styles.Ellipse}>
                    <Image
                      style={styles.image1}
                      source={require("../assets/icons/done.png")}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: hp("2%"),
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.textsend}>Sending Successfully</Text>
                    <Text style={styles.textsucc}>Sending Success</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Tabs")}
                    style={styles.btn2}
                  >
                    <LinearGradient
                      colors={["#0469e6", "#4286f4", "#02a8ea"]}
                      style={styles.gradient}
                    >
                      <Text style={styles.textt}>Done</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </Modal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Prescrption")}
            >
              <Text style={styles.skip}>SKIP NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Sappoint;
const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: "white",
  },
  text: {
    fontSize: hp(2.7),
    color: "white",
    padding: hp(1),
    paddingTop: hp(3),
    fontFamily: Fonts.POPPINS_MEDIUM,
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
    marginTop: hp("-2%"),
    justifyContent: "flex-start",
    position: "absolute",
  },
  texta: {
    fontSize: 17,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  textb: {
    fontSize: hp(2),
    color: "#b4b6b7",
    marginLeft: wp("3%"),
    fontWeight: "400",
  },
  textc: {
    fontSize: hp(2),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  input: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ffffff",
    width: wp("45%"),
    height: hp("6%"),
    backgroundColor: "#ffffff",
    marginLeft: wp("5%"),
    textAlign: "left",
    marginTop: hp("2%"),
  },
  input1: {
    height: hp("6%"),
    width: wp("9%"),
    borderColor: "#02a8ea",
    borderWidth: 0.2,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: wp("36%"),
    marginTop: hp("-4%"),
  },
  caltext: {
    fontSize: hp(2),
    color: "#8f8f8f",
    textAlign: "left",
    fontWeight: "400",
    marginTop: hp("1%"),
    marginLeft: wp("3%"),
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  backtext: {
    height: hp("6%"),
    width: wp("20%"),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  mainview: {
    backgroundColor: "#e7effe",
    borderRadius: 10,
  },
  datetext: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    justifyContent: "center",
    alignItems: "center",
    color: "#577af2",
  },
  newdate: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  textt: {
    color: "white",
    fontSize: 18,
  },
  btn1: {
    width: wp("80%"),
    height: hp("7%"),
    marginTop: hp("-2%"),
    alignSelf: "center",
    borderRadius:10
  },
  btn2: {
    width: wp("72%"),
    height: hp("7%"),
    marginTop: hp("5%"),
  },
  skip: {
    textAlign: "center",
    fontSize: hp(2.2),
    color: "#818ba7",
    marginTop: hp("1%"),
  },
  modal: {
    flex: 0,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignSelf: "center",
    borderColor: "#fff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("20%"),
    height: hp("45%"),
    width: wp("80%"),
  },
  Ellipse: {
    width: wp("24%"),
    height: hp("12%"),
    marginTop: hp(4),
    borderRadius: 50,
    backgroundColor: "#e7f2f8",
  },
  image1: {
    alignSelf: "center",
    marginTop: hp("2%"),
  },
  textsend: {
    fontSize: hp(3.3),
    fontWeight: "bold",
    color: "black",
  },
  textsucc: {
    fontSize: hp(1.7),
    color: "#adb0b2",
  },
  cont: {
    //   backgroundColor: '#e7effe',
    backgroundColor: "#0469e6",

    borderRadius: 10,
  },
});
