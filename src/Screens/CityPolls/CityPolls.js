import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const CityPolls = (props) => {
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


    let Polls = [
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },

    ]
    return (
        <View style={styles.container}>
            <Text style={styles._heading}>POLLS</Text>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles._main} >
                    {Polls.map((v, i) => {
                        return (
                            <View style={styles._card} key={i}>
                                <Text style={styles._poll_Des}>{v.data}</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress= {() => props.navigation.navigate("PollResult")}
                                >
                                    <Text style={styles._button_txt}>View</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
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
        marginTop: 50,
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
        marginLeft: 20,
    },
    _main: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    _poll_Des: {
        color: "white",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
        textAlign: 'justify'
    },
    _card: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom:10
    },
    button: {
        width: "20%",
        alignSelf: "flex-end",
        backgroundColor: "#1ED760",
        height: 25,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    _button_txt: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 12,
        letterSpacing: 0.5
    },
});

export default CityPolls;