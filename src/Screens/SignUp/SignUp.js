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
import {
    Ionicons
} from "@expo/vector-icons";
import {
    Select,
    CheckIcon,
} from "native-base"

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SignUp = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [eyeIcon, setEyeIcon] = useState(true);
    const [reEnter, setReEnter] = useState(true);
    let [language, setLanguage] = React.useState("")
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });


    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollView}>
                <View style={{ margin: 20 }}>

                    <Text style={styles._heading}>Sign Up</Text>

                    <View style={styles._email_input_main}>
                        <TextInput
                            placeholder="Email"
                            style={styles._input}
                            underlineColor="white"
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={styles._email_input_main}>
                        <View style={styles.passwordInputView}>
                            <TextInput
                                style={styles._input2}
                                placeholder="Password"
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
                            selectedValue={language}
                            minWidth={200}
                            color="white"
                            accessibilityLabel="Select Rue"
                            placeholder="Select Rue"
                            onValueChange={(itemValue) => setLanguage(itemValue)}
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
                                letterSpacing: 0.5
                            }}
                        >
                            <Select.Item label="JavaScript" value="js" />
                            <Select.Item label="TypeScript" value="ts" />
                            <Select.Item label="C" value="c" />
                            <Select.Item label="Python" value="py" />
                            <Select.Item label="Java" value="java" />
                        </Select>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress ={() => props.navigation.navigate("MainScreen")}
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
        letterSpacing: 0.5
    },
    _input: {
        color: "white",
        width: "100%",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5
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
        justifyContent: "center"
    },
    _button_txt: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 25,
        letterSpacing: 0.5
    },
    _register_main: {
        alignSelf: "center",
        flexDirection: "row",
        marginTop: 30,
    },
    _new_user: {
        color: "white",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5
    },
    _register: {
        color: "#1ED760",
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5
    },
    _email_input_main: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        marginTop: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    passwordInputView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    _input2: {
        color: "white",
        width: "80%",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
    },
});

export default SignUp;