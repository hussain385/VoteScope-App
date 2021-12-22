import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Select, CheckIcon } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../Service/api";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SignUp = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [eyeIcon, setEyeIcon] = useState(true);
  const [reEnter, setReEnter] = useState(true);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  let [rue, setRue] = React.useState("");
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  const handler_signup = async (value) => {
    if (password === rePassword) {
      try {
        const { message } = await api.signup({
          username: email,
          password,
          type: rue,
        });
        if (message === "success") {
          if (rue === "") {
            alert("Please Select Role !");
          } else if (rue === "city") {
            props.navigation.navigate("CityPolls");
          } else if (rue === "citizen") {
            props.navigation.navigate("ConstituentPoll");
          }
        } else {
          Alert.alert("Try Again!", message);
        }
      } catch (e) {
        console.log(e.message);
      }
    } else {
      Alert.alert("Password", "Password did not match. Please retry!");
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ margin: 20 }}>
          <Text style={styles._heading}>Sign Up</Text>

          <View style={styles._email_input_main}>
            <TextInput
              placeholder="Email"
              style={styles._input}
              onChangeText={(value) => setEmail(value)}
              underlineColor="white"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles._email_input_main}>
            <View style={styles.passwordInputView}>
              <TextInput
                style={styles._input2}
                placeholder="Password"
                onChangeText={(value) => setPassword(value)}
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

          <View style={styles._email_input_main}>
            <View style={styles.passwordInputView}>
              <TextInput
                style={styles._input2}
                placeholder="Re-enter Password"
                onChangeText={(value) => setRePassword(value)}
                secureTextEntry={reEnter}
                placeholderTextColor="white"
              />
              {reEnter ? (
                <Ionicons
                  name="eye"
                  size={24}
                  color="white"
                  onPress={() => setReEnter(!reEnter)}
                />
              ) : (
                <Ionicons
                  name="eye-off"
                  size={24}
                  color="white"
                  onPress={() => setReEnter(!reEnter)}
                />
              )}
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Select
              selectedValue={rue}
              minWidth={200}
              color="white"
              accessibilityLabel="Select Role"
              placeholder="Select Role"
              dropdownIcon={
                <Feather
                  name="chevron-down"
                  size={24}
                  color="white"
                  style={{ marginRight: 10 }}
                />
              }
              onValueChange={(itemValue) => setRue(itemValue)}
              _selectedItem={{
                bg: "cyan.600",
                endIcon: <CheckIcon size={4} color="white" />,
              }}
              style={{ width: "100%" }}
              placeholderTextColor="white"
              style={{
                fontFamily: "Poppins-Medium",
                marginBottom: -7,
                height: 55,
                letterSpacing: 0.5,
              }}
            >
              <Select.Item label="City" value="city" />
              <Select.Item label="Citizen" value="citizen" />
            </Select>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handler_signup()}
          >
            <Text style={styles._button_txt}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles._register_main}>
            <Text style={styles._new_user}>Already have an account ?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignIn")}
            >
              <Text style={styles._register}> Sign In</Text>
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
});

export default SignUp;
