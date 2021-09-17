import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    TextInput,
    StatusBar,
    Modal
} from "react-native";
import {
    Ionicons,
    MaterialCommunityIcons
} from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ForgotPassword = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [modalVisible, setModalVisible] = useState(false);
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
            <TouchableOpacity style={styles._back_icon} onPress={() => props.navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={34} color="white" />
            </TouchableOpacity>
            <Text style={styles._heading}>Forgot Password</Text>
            <View style={styles._half_theme_data}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ marginTop: 150 }}></View>
                    <View style={styles._email_input_main}>
                        <TextInput
                            placeholder="Enter your username:"
                            style={styles._input}
                            underlineColor="white"
                            placeholderTextColor="white"
                        />
                    </View>

                    <View style={styles._email_input_main}>
                        <TextInput
                            placeholder="Email"
                            style={styles._input}
                            underlineColor="white"
                            placeholderTextColor="white"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles._button_txt}>Recover My Password</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles._close_btn}>
                            <Ionicons name="close-outline" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={styles._popup_email}>
                            <MaterialCommunityIcons name="email-check" size={64} color="white" />
                            </View>
                            <Text style={styles.modalText}>Thank you. An email has been sent to your account with a link that will allow you to reset your password</Text>
                            <TouchableOpacity style={styles._open_email_btn} >
                                <Text style={styles._open_email_btn_text}>Open your email app</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#014F92",
        paddingTop: 30
    },
    _heading: {
        color: "white",
        fontSize: 25,
        marginBottom: 40,
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
        marginLeft: 20,
        marginTop: 20
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
        backgroundColor:"#014F92",
        height: 50,
        marginTop: 50,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:10
    },
    _button_txt: {
        fontFamily: "Poppins-SemiBold",
        color:"white",
        fontSize: 20,
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
    _half_theme_data: {
        backgroundColor:"#1ED760",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingTop:20
    },
    _back_icon: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20,
        marginTop: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 36,
        width: "90%",

    },
    _close_btn: {
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        backgroundColor: "#EFEFEF",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    _popup_email: {
        width: 118,
        height: 118,
        backgroundColor: "#1ED760",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    modalText: {
        marginTop: 10,
        color: "black",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5
    },
    _open_email_btn: {
        backgroundColor: "#014F92",
        height: 60,
        alignSelf: "center",
        width: 250,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    _open_email_btn_text: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        letterSpacing: 0.5
    },
    blurContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
      },
});

export default ForgotPassword;