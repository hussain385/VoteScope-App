import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Checkbox, VStack, Center, NativeBaseProvider } from "native-base"
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const PollSelect = (props) => {
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

    let PollsData = [
        {
            poll: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. We do not tolerate any cheating that is done and will annul all votes that are indicated by bots",
            option1: "Option 01",
            option2: "Option 02",
            option3: "Option 03",
            option4: "Option 04",
        },
        {
            poll: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. We do not tolerate any cheating that is done and will annul all votes that are indicated by bots",
            option1: "Option 01",
            option2: "Option 02",
            option3: "Option 03",
            option4: "Option 04",
        },
        {
            poll: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. We do not tolerate any cheating that is done and will annul all votes that are indicated by bots",
            option1: "Option 01",
            option2: "Option 02",
            option3: "Option 03",
            option4: "Option 04",
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles._header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles._heading}>Select Poll</Text>
            <TouchableOpacity onPress={()=> props.navigation.navigate("CreatePoll")}>
                <Text style={styles._heading2}>Create Poll</Text>
            </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 80 }}></View>
                {PollsData.map((v, i) => {
                    return (
                        <View style={styles._main} key={i}>
                            <Text style={styles._poll_Des}>{v.poll}</Text>
                            <VStack space={3} alignItems="flex-start">
                                <Checkbox value="danger" colorScheme="green" >
                                    <Text style={styles.options}>{v.option1}</Text>
                                </Checkbox>
                                <Checkbox value="danger" colorScheme="green" >
                                    <Text style={styles.options}>{v.option2}</Text>
                                </Checkbox>
                                <Checkbox value="danger" colorScheme="green" >
                                    <Text style={styles.options}>{v.option3}</Text>
                                </Checkbox>
                                <Checkbox value="danger" colorScheme="green" >
                                    <Text style={styles.options}>{v.option4}</Text>
                                </Checkbox>
                            </VStack>
                        </View>
                    )
                })}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles._button_txt}>View More</Text>
                </TouchableOpacity>
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
        fontSize: 25,
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
    },
    _heading2: {
        color: "white",
        fontSize: 18,
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
    },
    _main: {
        flex: 1,
        borderColor: "white",
        borderWidth: 1,
        margin: 20,
        marginTop: 10,
        padding: 10,
        borderRadius: 10

    },
    _header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 50,
        paddingHorizontal: 20
    },
    _poll_Des: {
        color: "white",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
        marginBottom: 20
    },
    options: {
        color: "white",
        marginLeft: 20,
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
        marginBottom: -5
    },
    button: {
        width: "80%",
        alignSelf: "center",
        backgroundColor: "#1ED760",
        height: 50,
        marginTop: 50,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:20
    },
    _button_txt: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 25,
        letterSpacing: 0.5
    },
});

export default PollSelect;