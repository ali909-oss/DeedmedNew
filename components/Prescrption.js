import { useState } from "react";
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";
import Tablet from "./Tablet";
import Syrup from "./Syrup";
import Topical from "./Topical";
import LinearGradient from "react-native-linear-gradient";
import { Fonts } from "../constants";
import { NativeBaseProvider } from "native-base";
import { Select, Box, Center } from "native-base";
import Header from "./Header";
import { ScrollView } from "react-native-gesture-handler";

const Prescrption = () => {
  const navigation = useNavigation();
  const [Status, setStatus] = useState([]);
  let [service, setService] = React.useState("");
  

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Tablet", value: "Tablet" },
    { label: "Syrup", value: "Syrup" },
    { label: "Topical", value: "Topical" },
  ]);

  function SetStatusfunc(ss) {
    setStatus(ss);
  }
  function Nestedifelse(value) {
    if (value === "Tablet") {
      return <Tablet />;
    } else if (value === "Syrup") {
      return <Syrup />;
    } else if (value === "Topical") {
      return <Topical />;
    }
  }
  ` `;

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
      <Header title="Write a Perscription" onPress={()=> navigation.navigate("Comment")} />
        <View style={{ marginTop:hp('2%') }}>
          <View style={styles.main}>
          <ScrollView>

            <View style={{ marginTop: hp("1%") }}>
              <Text style={styles.texta}>Medicine Type</Text>

              <Center>
                <Box w="3/4" maxW="600">
                  <Select
                    selectedValue={value}
                    minWidth="200"
                    accessibilityLabel="Select"
                    placeholder="Select"
                    width={wp("90%")}
                    alignSelf="center"
                    borderRadius={5}
                    fontSize={18}
                    _selectedItem={{
                      bg: "teal.600",
                      fontSize: 20,
                      // endIcon: <CheckIcon size="5" />
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setValue(itemValue)}
                  >
                    <Select.Item label="Tablet" value="Tablet" />
                    <Select.Item label="Syrup" value="Syrup" />
                    <Select.Item label="Topical" value="Topical" />
                  </Select>
                </Box>
              </Center>
             
            </View>
            </ScrollView>

            {Nestedifelse(value)}
          </View>

        </View>
      </View>
    </NativeBaseProvider>
  );
};
export default Prescrption;
const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: "#ffffff",
  },
  img: {
    width: wp("100%"),
    height: hp("8%"),
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
    width: wp("95%"),
    borderRadius: 10,
    alignSelf:'center',
  },
  texta: {
    fontSize: 16,
    color: "#7a95f5",
    marginLeft: wp("3%"),
    padding: 1,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  input: {
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: "#ffffff",
    width: wp("80%"),
    height: hp("6%"),
    backgroundColor: "#ffffff",
    alignSelf: "center",
    textAlign: "left",
    borderWidth: 0.5,
    borderColor: "black",
    zIndex: 1,
  },
  textt: {
    color: "white",
    fontSize: 18,
  },
  btn1: {
    width: wp("70%"),
    height: hp("7%"),
    marginLeft: wp("15%"),
    marginTop: hp("5%"),
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
