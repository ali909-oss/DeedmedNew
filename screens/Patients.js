import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  updateSecureTextEntry,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/dist/EvilIcons";
import Entypo from "react-native-vector-icons/dist/Entypo";
import React from "react";
import { useState } from "react";
import { colors } from "react-native-elements";
import Modal from "react-native-modal";
import DropDownPicker from "react-native-dropdown-picker";
import CustomStarExample from "../components/StarRating";
import { Fonts } from "../constants";
import { Searchbar } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";

const DATA = [
  {
    id: 1,
    image: require("../assets/icons/user.png"),
    name: "Jannet Walton",
    status: "gaurdian",
    appon: "25",
  },
  {
    id: 2,
    image: require("../assets/icons/user.png"),
    name: "Jannet Walton",
    status: "gaurdian",
    appon: "23",
  },
  {
    id: 3,
    image: require("../assets/icons/user.png"),
    name: "Jannet Walton",
    status: "gaurdian",
    appon: "22",
  },
  {
    id: 4,
    image: require("../assets/icons/user.png"),
    name: "Jannet Walton",
    status: "gaurdian",
    appon: "21",
  },
  {
    id: 5,
    image: require("../assets/icons/user.png"),
    name: "Jannet Walton",
    status: "patient",
    appon: "20",
  },
  {
    id: 6,
    image: require("../assets/icons/user.png"),
    name: "Jannet Walton",
    status: "patient",
    appon: "19",
  },
  {
    id: 7,
    image: require("../assets/icons/user.png"),
    name: "Jannet Walton",
    status: "patient",
    appon: "18",
  },
];

const Patients = ({ navigation }) => {
  //    Search
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const [search, setSearch] = useState("");
  const updatesearch = (search) => {
    setSearch(search);
  };
  // Modal
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //   Dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);
  const [items1, setItems1] = useState([
    { label: "Guardian", value: "Guardian" },
    { label: "Patient", value: "Patient" },
  ]);
  const [items2, setItems2] = useState([
    { label: "Report Reading", value: "Report Reading" },
    { label: "Report", value: "Report" },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View
          style={{
            flexDirection: "row",
            marginTop: hp("1%"),
            marginLeft: wp("4%"),
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Ionicons
              name={"md-arrow-back-circle-sharp"}
              size={45}
              color={"white"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Patients</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: hp("0.5%"),
          }}
        >
          <View>
            <Searchbar
              keyboardHidesTabBar={true}
              placeholder="Search Here"
              style={{ width: wp("75%") }}
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.filter}>
              <FontAwesomeIcon
                style={styles.filterIcon}
                name="sliders"
                size={25}
                color="#9aa2b8"
              />
            </View>
            <Modal
              style={styles.modal}
              isVisible={isModalVisible}
              animationType={"slide"}
              onSwipeComplete={() => setModalVisible(false)}
              swipeDirection="left"
            >
              <View style={{ marginTop: hp("1%") }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Text style={styles.textf}>Search by filter</Text>
                  <TouchableOpacity onPress={toggleModal}>
                    <Entypo
                      style={styles.cross}
                      name="cross"
                      size={35}
                      color="#8e96af"
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop: hp("3%"), justifyContent:'center',
    alignItems:'center'}}>
                  <DropDownPicker
                    style={styles.drop}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    containerProps={{
                      width: wp('70%')
                  }}
                  />
                </View>
                <View style={{ marginTop: hp("3%"), justifyContent:'center',
    alignItems:'center'}}>
                  <DropDownPicker
                    style={styles.drop}
                    open={open1}
                    value={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                    containerProps={{
                      width: wp('70%')
                  }}
                  />
                </View>
                <View style={{ marginTop: hp("3%"), justifyContent:'center',
    alignItems:'center'}}>
                  <DropDownPicker
                    style={styles.drop}
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                    containerProps={{
                      width: wp('70%')
                  }}
                  />
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={styles.star}>
                    <CustomStarExample />
                  </View>
                </View>
                <View style={{alignSelf:'flex-end',
    marginTop:hp('30%')
    }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <View>
                      <TouchableOpacity
                        onPress={toggleModal}
                        style={styles.btn1}
                      >
                        <LinearGradient
                          colors={["#e7e7e7", "#a8a8a9"]}
                          style={styles.gradient}
                        >
                          <Text style={styles.texttt}>Reset</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View>
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
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: hp(2) }}>
        <View style={{ height: hp("73.5%"), marginTop: hp("-1%") }}>
          <FlatList
            data={DATA}
            keyExtractor={(item) => {
              item.id;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("PatientD")}
                >
                  <View style={styles.main}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          <Image style={styles.avt} source={item.image} />
                        </View>
                        <View
                          style={{
                            marginLeft: wp(2),

                            justifyContent: "center",
                            alignItems: "flex-start",

                            // paddingVertical:hp(1)
                          }}
                        >
                          <Text
                            style={{
                              lineHeight: 20,
                              fontSize: hp(2),
                              fontFamily: Fonts.POPPINS_SEMI_BOLD,
                              color: "black",
                            }}
                          >
                            {item.name}
                          </Text>

                          <Text
                            style={{
                              lineHeight: 12,
                              fontSize: hp(1.5),
                              color: "#b9bece",
                              fontFamily: Fonts.POPPINS_MEDIUM,
                            }}
                          >
                            {item.status}{" "}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                        }}
                      >
                        <Text
                          style={{
                            lineHeight: 27,
                            fontSize: hp(2.8),
                            fontFamily: Fonts.POPPINS_SEMI_BOLD,
                            color: "#3785eb",
                          }}
                        >
                          {item.appon}
                        </Text>
                        <Text
                          style={{
                            lineHeight: 12,
                            fontSize: hp(1.3),
                            color: "#3785eb",
                            fontFamily: Fonts.POPPINS_SEMI_BOLD,
                          }}
                        >
                          Appoinments
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Patients;

const styles = StyleSheet.create({
  avt: {
    height: hp("6%"),
    width: wp("12%"),
    borderRadius: 20,
    marginTop: hp("1%"),
    padding: 5,
  },

  container: {
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: "#f4f4f4",
  },
  view1: {
    height: hp("18%"),
    width: wp("100%"),
    backgroundColor: "#09a1ec",
    borderBottomLeftRadius: wp("4%"),
    borderBottomRightRadius: wp("4%"),
  },
  img: {
    height: hp("5%"),
    width: wp("10%"),
    marginTop: hp("2%"),
    backgroundColor: "white",
  },
  main: {
    width: wp("90%"),
    borderRadius: 10,
    backgroundColor: "white",
    alignSelf: "center",
    padding: 5,
    marginBottom: hp("2%"),
  },

  row1: {
    flexDirection: "row",
  },
  text1: {
    color: "white",
    fontSize: 20,
    marginLeft: wp("3%"),
    marginTop: hp("2%"),
  },
  searchbar: {
    height: hp("6%"),
    width: wp("65%"),
    marginTop: hp("2%"),
    backgroundColor: "white",
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    color: "white",
    padding: 5,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  searchIcon: {
    padding: 10,
    marginTop: hp("-7%"),
    marginLeft: wp("5%"),
  },
  input: {
    borderRadius: 6,
    borderWidth: 0.2,
    borderColor: "#ffffff",
    width: wp("80%"),
    height: hp("7%"),
    marginTop: hp("3%"),
    backgroundColor: "#ffffff",
    marginLeft: wp("2%"),
    textAlign: "center",
  },
  filter: {
    width: wp("12%"),
    height: hp("6%"),
    backgroundColor: "white",
    borderRadius: 4,
  },
  filterIcon: {
    textAlign: "center",
    marginTop: hp("1.5%"),
  },
  modal: {
    flex: 0,

    backgroundColor: "#fff",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: hp("1%"),
    marginLeft: wp("1%"),
    height: hp("100%"),
    width: wp("80%"),
    
  },
  textf: {
    fontSize: 22,
    color: "#464646",
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  drop: {
    width: wp("70%"),
    zIndex: 2,
    borderWidth: 0.5,
    justifyContent:'center',
    alignItems:'center'
    
  },
  star: {
    width: wp("70%"),
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 10,
    height: hp("7%"),
    marginTop: hp("3%"),
    justifyContent:'center',
    alignItems:'center'
  },
  btn1: {
    width: wp("40%"),
    height: hp("7%"),
    marginTop: hp("4%"),
  },
  textt: {
    color: "white",
    fontSize: 18,
  },
  texttt: {
    color: "black",
    fontSize: 18,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
