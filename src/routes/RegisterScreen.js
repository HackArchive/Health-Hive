import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import RegistrationSVG from "../assets/images/misc/registration.svg";
import GoogleSVG from "../assets/images/misc/google.svg";
import FacebookSVG from "../assets/images/misc/facebook.svg";

const RegisterScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState("Date of Birth");

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <View style={{ alignItems: "center" }}>
          <RegistrationSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Register
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Or, register with email ...
        </Text>

      {/* Name */}
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
        }}
      >
        <Ionicons
          name="person-outline"
          size={20}
          color="#666"
          style={{ marginRight: 5 }}
        />
          <TextInput
            placeholder={"Full Name"}
            style={{ flex: 1, paddingVertical: 0 }}
          />
      </View>

        {/* emailid */}
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
        <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          <TextInput
            placeholder={"Email ID"}
            keyboardType="email-address"
            style={{ flex: 1, paddingVertical: 0 }}
          />
      </View>

      {/* password */}
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
        }}
        >
          <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
          <TextInput
            placeholder={"Password"}
            keyboardType="password"
            secureTextEntry={true}
            style={{ flex: 1, paddingVertical: 0 }}
          />
      </View>


      {/* confirm password */}    
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 25,
        }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={"Confirm Password"}
            keyboardType="password"
            style={{ flex: 1, paddingVertical: 0 }}
          />
      </View>

        <CustomButton label={"Register"} onPress={() => {}} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "#ef5350", fontWeight: "700" }}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
