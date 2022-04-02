import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "../screens/Tabs";
import VideoStack from "../screens/VideocallStack";
import VideoCall from "../components/Videocall";
import AppointmentDetails from "../components/AppointmentDetails";
import Comment from "../components/Comment";
import Prescrption from "../components/Prescrption";
import TestOrder from "../components/TestOrder";
import Medical from "../components/MedicalCertificate";
import Letter from "../components/Letter";
import Sappoint from "../components/SuggestAppointments";
import PatientD from "../screens/PatientDetails";
import ChangeAppointment from "../screens/ChangeAppoint";
import SelectAppoint from "../screens/SelectAppoint";
import FileView from "../components/PdfView";
import AddComment from "../screens/AddComment";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ForgetPassword from "../screens/ForgetPassword";
import ResetPassword from "../screens/ResetPassword";
import PasswordVerification from "../screens/PasswordVerification";
import OTP from "../screens/OTP";

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen
        name="PasswordVerification"
        component={PasswordVerification}
      />
      <Stack.Screen
        name="Medical"
        component={Medical}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sappoint"
        component={Sappoint}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />

      <Stack.Screen name="VideoCall" component={VideoCall} />

      <Stack.Screen
        name="Comment"
        component={Comment}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Prescrption"
        component={Prescrption}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TestOrder"
        component={TestOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Letter"
        component={Letter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientD"
        component={PatientD}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangeAppointment"
        component={ChangeAppointment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddComment"
        component={AddComment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectAppoint"
        component={SelectAppoint}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FileView"
        component={FileView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigators;
