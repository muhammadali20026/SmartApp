
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";

 import smartdiet from '../Image/smartdiet.png';
 import { requestRegister } from "../store/slice/AuthSlice";
 

const Login=({navigation})=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  
  const handleSubmitButton = () => {
    setErrortext('');
    if (!email) {
      alert('Please fill Name');
      return;
    }
    if (!password) {
      alert('Please fill Email');
      return;
    }
  };
  return (
    <ScrollView>
    <View style={styles.container}>
      <View>
       <Image style={styles.backendbg} source={smartdiet} />
       </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity  onPress={() => navigation.navigate('reset')}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} 
      onPress={(handleSubmitButton) => {
        console.log('==>');
        dispatch(requestRegister())
      }}>

        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
       
       onPress={() => navigation.navigate('signup')}>
        <Text style={styles.forgot_button}>Create a new account</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
export default  Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "skyblue",
    borderRadius: 30,
    width: "70%",
   
    margin: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  container1:{

  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  backendbg: {
    width: 200,
    height: 220,
    alignSelf:"center",
   
},
 
  forgot_button: {
    marginBottom: 30,
  },
 
  loginBtn: {
    paddingLeft:100,
    paddingRight:100,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "skyblue",
  },
});