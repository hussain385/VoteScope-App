import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Animated
} from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ConstituentPoll = (props) => {
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

    let PollCardData = [
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. We do not tolerate any cheating that is done and will annul all votes that are indicated by bots"
        },
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. We do not tolerate any cheating that is done and will annul all votes that are indicated by bots"
        },
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. We do not tolerate any cheating that is done and will annul all votes that are indicated by bots"
        },
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. We do not tolerate any cheating that is done and will annul all votes that are indicated by bots"
        },
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. We do not tolerate any cheating that is done and will annul all votes that are indicated by bots"
        },
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. We do not tolerate any cheating that is done and will annul all votes that are indicated by bots"
        },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles._heading}>POLL</Text>
            <View style={{ margin: 20 }}>
                <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>

                    <View style={styles._main} >
                        {PollCardData.map((v, i) => {
                            return (
                                <View style={styles._data_main} key={i}>
                                    <View style={styles._counter_main}>
                                        <CountdownCircleTimer
                                            isPlaying
                                            duration={10}
                                            colors={[
                                                ['white', 0.4],
                                                // ['#F7B801', 0.4],
                                                // ['#A30000', 0.2],
                                            ]}
                                            size={30}
                                            strokeWidth={2}
                                            trailColor="#1ED760"
                                        >
                                            {({ remainingTime, animatedColor }) => (
                                                <Animated.Text style={styles._timer}>
                                                    {remainingTime}
                                                </Animated.Text>
                                            )}
                                        </CountdownCircleTimer>
                                    </View>
                                    <View>
                                        <Text style={styles._poll}>Poll : </Text>
                                        <Text style={styles._poll_Des}>{v.data}</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.button}
                                    >
                                        <Text style={styles._button_txt}>Approve</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.button}
                                    >
                                        <Text style={styles._button_txt}>Dis Approve</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._total_poll}>{i + 1} / {PollCardData.length}</Text>
                                </View>
                            )
                        })}
                    </View>
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
        marginTop: 80,
        marginBottom: 40,
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
        marginLeft: 20,
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
        justifyContent: "center"
    },
    _button_txt: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 20,
        letterSpacing: 0.5
    },
    _timer: {
        color: "white",
        fontFamily: "Poppins-SemiBold",
        marginBottom: -5
    },
    _data_main: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: 300,
        marginLeft: 10
    },
    _counter_main: {
        alignSelf: "flex-end",
        flexDirection: "row"
    },
    _poll: {
        color: "white",
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
        fontSize: 20
    },
    _poll_Des: {
        color: "white",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
        marginBottom: 50
    },
    _main: {
        flexDirection: "row",
    },
    _total_poll: {
        color: "white",
        alignSelf: "center",
        fontFamily: "Poppins-SemiBold",
    }
});

export default ConstituentPoll;