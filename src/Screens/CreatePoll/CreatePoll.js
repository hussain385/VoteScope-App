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
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const CreatePoll = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
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

                    <Text style={styles._heading}>Create Poll</Text>
                    <View style={{ marginTop: 50 }}></View>
                    <View style={styles._email_input_main2}>
                        <TextInput
                            placeholder="Create Poll"
                            style={styles._input2}
                            underlineColor="white"
                            placeholderTextColor="white"
                            multiline={true}
                        />
                    </View>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=> props.navigation.goBack()}
                    >
                        <Text style={styles._button_txt}>Create</Text>
                    </TouchableOpacity>
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
        letterSpacing: 0.5,
    },
    _input2: {
        color: "white",
        width: "100%",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
        height:150,
        textAlignVertical:"top",
        padding:10
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
    _email_input_main2: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        marginTop: 10,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
});

export default CreatePoll;