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
    return (
        <View style={styles.container}>
            <View style={styles._header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles._heading}>Select Poll</Text>
                <Text style={styles._heading}></Text>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles._main} >
                    <Text style={styles._poll_Des}>Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. We do not tolerate any cheating that is done and will annul all votes that are indicated by bots</Text>
                    <VStack space={3} alignItems="flex-start">
                        <Checkbox value="danger" colorScheme="green" >
                        <Text style={styles.options}>Option 01</Text>
                        </Checkbox>
                        <Checkbox value="danger" colorScheme="green" >
                        <Text style={styles.options}>Option 02</Text>
                        </Checkbox>
                        <Checkbox value="danger" colorScheme="green" >
                        <Text style={styles.options}>Option 03</Text>
                        </Checkbox>
                        <Checkbox value="danger" colorScheme="green" >
                        <Text style={styles.options}>Option 04</Text>
                        </Checkbox>
                    </VStack>
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
        fontSize: 25,
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
    },
    _main: {
        flex: 1,
        borderColor: "white",
        borderWidth: 1,
        margin: 20,
        marginTop: 100,
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
    options:{
        color:"white",
        marginLeft:20,
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
        marginBottom:-5
    }
});

export default PollSelect;