import React from "react";
import  { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
const Home = () => {
  const [bmi, setBmi] = useState("");
  const [info, setInfo] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    console.log(typeof val);
    setBmi(val.toString());
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  }
  return (
    <View style={styles.container}>
      <Text>hfdgfhmgn b</Text>
      {/* <View>
        <Text style={styles.title}>BMI Calculator</Text>
      </View>

      <View>
        <Text style={styles.label}>Height</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value="text"
          onChange={(e) => setHeight(value)}
          placeholder="height in cm"
        />
      </View>
      <View>
        <Text style={styles.label}>Weight</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value="text"
          onChange={(e) => setWeight(value)}
          placeholder="Weight in kg"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onClick={handleBmi}>
       <Text>Calculate</Text> 
      </TouchableOpacity>
      <Text>{bmi}</Text>
      <Text>{info}</Text> */}
          </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    // flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 150,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "black"
  },
  submitButton: {
    backgroundColor: "skyblue",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 150,
    margin: 15,
    borderRadius: 30,
    height: 40
  },
  submitButtonText: {
    color: "white",

    fontSize: 18
  },
  output: {
    textAlign: "center",
    fontSize: 30
  },
  title: {
    borderSize: 1,
    borderRadius: 10,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",

    backgroundColor: "skyblue"
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    color: "blue"
  },
  label: {
    marginLeft: 15,
    marginTop: 20,
    fontSize: 20
  }
});



