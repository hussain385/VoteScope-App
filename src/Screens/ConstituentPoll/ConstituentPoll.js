import React, {useEffect, useRef, useState} from "react";
import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import moment from "moment";
import api from "../../Service/api";
import VoteCard from "./card";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ConstituentPoll = (props) => {
    const scrollRef = useRef();
    const [pollData, setPollData] = useState([]);
    const [PollCardData, setPollCardData] = useState([]);
    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setPollCardData();
    //     }, 10000);
    // }, [PollCardData]);

    const timeOut = () => {
        setIndex(prev => prev + 1)
        setPollCardData(pollData[index]);
    }

    useEffect(() => {
        const getPolls = async () => {
            const poll_date_start = moment()
                .subtract(1, "months")
                .format("YYYY-MM-DD");
            const poll_date_end = moment().add(1, "months").format("YYYY-MM-DD");
            const data = await api.getPollsManyAll({
                poll_date_start,
                poll_date_end,
            });
            setPollData(data);
            setPollCardData(data[index])
        };
        getPolls();
    }, []);

    const setPoll = async (answer, poll_id) => {
        await api.setPollResult({
            poll_id: poll_id,
            answer: answer,
        });
        timeOut();
    };


    const onPressTouch = () => {
        console.log("sas");
        scrollRef.current?.scrollTo({
            x: 1,
            animated: true,
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{marginTop: 20}} onPress={onPressTouch}>
                <Text>fwefew</Text>
            </TouchableOpacity>
            <View>
                <ScrollView
                    style={{width: screen.width}}
                    horizontal={true}
                    ref={scrollRef}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                >
                    <VoteCard item={PollCardData} setPoll={setPoll} onPressTouch={onPressTouch} timeOut={timeOut}/>

                </ScrollView>
            </View>
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
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
    },
    button: {
        width: "100%",
        alignSelf: "center",
        backgroundColor: "#1ED760",
        height: 50,
        marginBottom: 20,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    _button_txt: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 20,
        letterSpacing: 0.5,
    },
    _timer: {
        color: "white",
        fontFamily: "Poppins-SemiBold",
        marginBottom: -5,
    },
    _data_main: {
        // borderColor: "white",
        // borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        // width:"1%",
        // flex:1
    },
    _counter_main: {
        alignSelf: "flex-end",
        flexDirection: "row",
        marginTop: 50,
    },
    _poll: {
        color: "white",
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
        fontSize: 20,
    },
    _poll_Des: {
        color: "white",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
        marginBottom: 50,
    },
    _main: {
        flexDirection: "row",
    },
    _total_poll: {
        color: "white",
        alignSelf: "center",
        fontFamily: "Poppins-SemiBold",
    },
    _header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 40,
    },
});

export default ConstituentPoll;
