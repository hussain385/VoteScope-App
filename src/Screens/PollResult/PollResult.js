import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicatorComponent,
  Modal,
  TextInput,
  Pressable,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import api from "../../Service/api";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const PollResult = ({ route, navigation }) => {
  const { poll_id } = route.params;
  const { question } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState(question);
  const [dimensions, setDimensions] = useState({ window, screen });
  const [pollsResult, setPollsResult] = useState(null);
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
      const data = await api.getPollResult({
        poll_id,
      });
      setPollsResult([data]);
    };
    getPolls();
  }, []);

  const editQuestion = async () => {
    await api.editPoll({ poll_id: poll_id, question: text });
    question = text;
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles._heading}>POLLS Result</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles._main}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles._card}
          >
            <Text style={styles._poll_Des}>{question}</Text>
          </TouchableOpacity>
          <PieChart
            data={[
              {
                name: "Approve",
                population: pollsResult?.approve || 0,
                color: "rgba(131, 167, 234, 1)",
                legendFontColor: "#7F7F7F",
                legendFontSize: 11,
              },
              {
                name: "Dis Approve",
                population: pollsResult?.disapprove || 0,
                color: "#F00",
                legendFontColor: "#7F7F7F",
                legendFontSize: 11,
              },
              {
                name: "No Options",
                population: pollsResult?.no_opinion || 0,
                color: "#ffffff",
                legendFontColor: "#7F7F7F",
                legendFontSize: 11,
              },
            ]}
            width={Dimensions.get("window").width - 60}
            height={220}
            chartConfig={{
              backgroundColor: "#1cc910",
              backgroundGradientFrom: "#eff3ff",
              backgroundGradientTo: "#efefef",
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
            onPress={() => navigation.goBack()}
          >
            <Text style={styles._button_txt}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.centeredView}
        >
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Question"
              keyboardType="default"
              multiline={true}
            />
            <TouchableOpacity
              style={[styles.buttonModal, styles.buttonClose]}
              onPress={editQuestion}
            >
              <Text style={styles.textStyle}>Change Question</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
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
    textAlign: "justify",
  },
  _card: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    marginTop: 50,
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
    marginTop: 50,
  },
  _button_txt: {
    fontFamily: "Poppins-SemiBold",
    color: "white",
    fontSize: 20,
    letterSpacing: 0.5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(90, 90, 90, 0.473)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: Dimensions.get("screen").width * 0.7,
  },
});

export default PollResult;
