import { View, Text } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export default function ErrorMessage({ message, visible }) {
  if (!visible || !message) return null;
  return (
    <View
      style={{
        marginTop: heightPercentageToDP(1),
        marginLeft: widthPercentageToDP(1),
      }}
    >
      <Text style={{ color: "red" }}>{message}</Text>
    </View>
  );
}
