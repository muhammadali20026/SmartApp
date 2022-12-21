import React from "react";
import  { useState } from "react";
import { Card } from "react-native-paper";
import background from '../Image/background.png'
import {
  
  View,
  Text,
  StyleSheet
} from "react-native";
const Home = () => {
  return(
<Card>
    <Card >
      
    <Card.Cover source={background} />
  </Card>
  <Card style={styles.label}>
  <Card.Title
    title="Diet plan"
    onPress={() => navigation.navigate('login')}
/>
</Card>
<Card>
  <Card.Title
    title="Diet plan"
    onPress={() => navigation.navigate('login')}
/>
</Card>
  </Card>
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
    
    marginTop: 20,
    fontSize: 20
  }
});



