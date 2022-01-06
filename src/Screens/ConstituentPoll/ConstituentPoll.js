import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import moment from "moment";
import api from "../../Service/api";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ConstituentPoll = (props) => {
  const scrollRef = useRef();
  const [dimensions, setDimensions] = useState({ window, screen });
  const [PollCardData, setPollCardData] = useState([]);
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

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
      console.log(poll_date_start);
      setPollCardData(data);
      timer(data);
    };
    getPolls();
  }, []);

  const setPoll = async (answer, poll_id) => {
    await api.setPollResult({
      poll_id: poll_id,
      answer: answer,
    });
  };

  const timer = (data) => {
    const count = data.length;
    const data1 = data;
    console.log("timer", data);
    for (let index = 1; index <= count; index++) {
      setTimeout(() => {
        console.log("next", index, count);
        data1.shift();
        setPollCardData(data1);
        console.log(PollCardData);
      }, index * 10000);
    }
  };

  const onPressTouch = () => {
    console.log("sas");
    scrollRef.current?.scrollTo({
      x: 1,
      animated: true,
    });
  };
  return (
    <View>
      <Text>{JSON.stringify(PollCardData, null, 2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={onPressTouch}>
        <Text>fwefew</Text>
      </TouchableOpacity>
      <View>
        <ScrollView
          style={{ width: screen.width }}
          horizontal={true}
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          {PollCardData.map((v) => {
            return (
              <View
                style={[styles._data_main, { width: screen.width }]}
                key={v.id}
              >
                <View style={styles._header}>
                  <Text style={styles._heading}>POLL</Text>
                  <TouchableOpacity
                    // onPress={() => props.navigation.navigate("Setting")}
                    onPress={onPressTouch}
                  >
                    <Ionicons name="settings-outline" size={44} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles._counter_main}>
                  {/* <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    size={30}
                    strokeWidth={2}
                    trailColor="#1ED760"
                  >
                    {({ remainingTime, animatedColor }) => (
                      <Animated.Text style={styles._timer}>
                        {remainingTime}
                      </Animated.Text>
                    )}
                  </CountdownCircleTimer> */}
                </View>
                <View>
                  <Text style={styles._poll}>Poll : </Text>
                  <Text style={styles._poll_Des}>{v.question}</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setPoll("approve", v.id);
                  }}
                >
                  <Text style={styles._button_txt}>Approve</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setPoll("disapprove", v.id);
                  }}
                >
                  <Text style={styles._button_txt}>Disapprove</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setPoll("no_opinion", v.id);
                  }}
                >
                  <Text style={styles._button_txt}>No Opinion</Text>
                </TouchableOpacity>
                {/* <Text style={styles._total_poll}>
                  {i + 1} / {PollCardData.length}
                </Text> */}
              </View>
            );
          })}
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
