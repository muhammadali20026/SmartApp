import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Text,Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Write food suggetion");
  const simpleAlertHandler = () => {
    
    Alert.alert(
    
      'Allert',
    
      'The Neutrition send updated food plan ',
      [
        {
          text: 'ok',
          onPress: () => console.log('Yes Pressed')
        },
        
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity style={styles.button}
       onPress={simpleAlertHandler} >
        <Text>Submit</Text>
      </TouchableOpacity>
      
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "skyblue",
  }
});

export default UselessTextInput;