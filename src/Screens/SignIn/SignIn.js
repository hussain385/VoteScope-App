import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../Service/api";
import jwt_decode from "jwt-decode";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SignIn = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [eyeIcon, setEyeIcon] = useState(true);
  const [reEnter, setReEnter] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  const handler_Login = async () => {
    try {
      const rue = await api.login({ username: email, password });
      const user = jwt_decode(rue.access_token)
      if (user.type === "") {
        alert("Sign Up Required !");
      } else if (user.type === "city") {
        props.navigation.navigate("CityPolls");
      } else if (user.type === "citizen") {
        props.navigation.navigate("ConstituentPoll");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ margin: 20 }}>
          <Text style={styles._heading}>Sign In</Text>
          <View style={{ marginTop: 150 }}></View>
          <View style={styles._email_input_main}>
            <TextInput
              placeholder="Email"
              style={styles._input}
              onChangeText={(email) => setEmail(email)}
              underlineColor="white"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles._email_input_main}>
            <View style={styles.passwordInputView}>
              <TextInput
                style={styles._input2}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={eyeIcon}
                placeholderTextColor="white"
              />
              {eyeIcon ? (
                <Ionicons
                  name="eye"
                  size={24}
                  color="white"
                  onPress={() => setEyeIcon(!eyeIcon)}
                />
              ) : (
                <Ionicons
                  name="eye-off"
                  size={24}
                  color="white"
                  onPress={() => setEyeIcon(!eyeIcon)}
                />
              )}
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handler_Login()}
          >
            <Text style={styles._button_txt}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles._forgt_passwrod}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("ForgotPassword")}
            >
              <Text style={styles._register}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles._register_main}>
            <Text style={styles._new_user}>Don’t have an account ?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text style={styles._register}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#014F92",
  },
  _heading: {
    color: "white",
    fontSize: 50,
    marginTop: 30,
    marginBottom: 40,
    fontFamily: "Poppins-SemiBold",
    letterSpacing: 0.5,
  },
  _input: {
    color: "white",
    width: "100%",
    fontFamily: "Poppins-Medium",
    letterSpacing: 0.5,
  },
  button: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#1ED760",
    height: 50,
    marginTop: 50,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  _button_txt: {
    fontFamily: "Poppins-SemiBold",
    color: "white",
    fontSize: 25,
    letterSpacing: 0.5,
  },
  _register_main: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  _new_user: {
    color: "white",
    fontFamily: "Poppins-Medium",
    letterSpacing: 0.5,
  },
  _register: {
    color: "#1ED760",
    fontFamily: "Poppins-SemiBold",
    letterSpacing: 0.5,
  },
  _email_input_main: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    marginTop: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  passwordInputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  _input2: {
    color: "white",
    width: "80%",
    fontFamily: "Poppins-Medium",
    letterSpacing: 0.5,
  },
  _forgt_passwrod: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
});

export default SignIn;
