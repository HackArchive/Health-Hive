import { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import LogoWithName from "../assets/images/misc/logoWithName.svg";
import GoogleSVG from "../assets/images/misc/google.svg";
import FacebookSVG from "../assets/images/misc/facebook.svg";

import CustomButton from "../components/CustomButton";
import { Context } from "../../App";
import { account } from "../appwrite/appwriteConfig";

const LoginScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(Context);
  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");

  const loginFunc = async () => {
    try {
      const resp = await account.createEmailSession(localEmail, localPassword);

      setIsLoggedIn(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          <LogoWithName height={300} width={300} style={{ marginTop: 50 }} />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 25,
          }}
        >
          Login
        </Text>

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
            value={localEmail}
            onChangeText={(text) => setLocalEmail(text)}
          />
        </View>

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
            style={{ flex: 1, paddingVertical: 0 }}
            value={localPassword}
            onChangeText={(text) => setLocalPassword(text)}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => alert("why you forgot")}>
            <Text style={{ color: "#ef5350", fontWeight: "700" }}>Forgot</Text>
          </TouchableOpacity>
        </View>

        <CustomButton label={"Login"} onPress={loginFunc} />

        <Text style={{ textAlign: "center", color: "#666", marginBottom: 20 }}>
          Or, Continue with ...
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 20,
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#ef5350", fontWeight: "700" }}>
              {" "}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
