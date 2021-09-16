import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import {
    PieChart,
} from 'react-native-chart-kit';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const PollResult = (props) => {
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
            <Text style={styles._heading}>POLLS Result</Text>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles._main} >
                    <View style={styles._card} >
                        <Text style={styles._poll_Des}>The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019</Text>
                    </View>
                    <PieChart
                        data={[
                            {
                                name: 'Approve',
                                population: 2,
                                color: 'rgba(131, 167, 234, 1)',
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 11,
                            },
                            {
                                name: 'Dis Approve',
                                population: 3,
                                color: '#F00',
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 11,
                            },
                            {
                                name: 'No Options',
                                population: 1,
                                color: '#ffffff',
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 11,
                            },
                        ]}
                        width={Dimensions.get('window').width - 60}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#1cc910',
                            backgroundGradientFrom: '#eff3ff',
                            backgroundGradientTo: '#efefef',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="15"
                    // absolute //for the absolute number remove if you want percentage
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => props.navigation.goBack()}
                    >
                        <Text style={styles._button_txt}>Go Back</Text>
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
        fontSize: 25,
        marginTop: 50,
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
        marginLeft: 20,
    },
    _main: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
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
        marginBottom: 30,
        marginTop: 50
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
        marginTop: 50
    },
    _button_txt: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 20,
        letterSpacing: 0.5
    },
});

export default PollResult;