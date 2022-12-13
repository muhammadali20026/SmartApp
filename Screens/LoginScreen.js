
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
import background from '../Image/background.png';
 import smartdiet from '../Image/smartdiet.png';
 import { requestRegister } from "../store/slice/AuthSlice";
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
 

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
      <View style={styles.container}>
      <Image style={styles.back} source={background} />
      
    <View style={styles.container1}>
      <View>
       <Image style={styles.backendbg} source={smartdiet} />
       </View>
      <View style={styles.inputView}>
      < MaterialCommunityIcons name="email-edit" size={24}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="white"
          underlineColorAndroid={"white"}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <AntDesign name="lock" size={24}/>
        <TextInput
          style={styles.TextInput}
           placeholder="Password."
           placeholderTextColor="white"
           secureTextEntry={true}
           underlineColorAndroid={"white"}
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

        <Text style={{color:"black"}}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
       
       onPress={() => navigation.navigate('signup')}>
        <Text style={styles.forgot_button}>Create a new account</Text>
      </TouchableOpacity>
    </View>
    </View>
  
  );
}
export default  Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
   // backgroundColor: "skyblue",
   
    borderRadius: 30,
    width: "70%",
   flexDirection:"row",
    margin: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    
  },
  container1:{
    display: 'flex' ,
    alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
    
  },
  backendbg: {
    width: 400,
    height: 310,
    alignSelf:"center",
   
},
 
  forgot_button: {
    marginBottom: 30,
    fontWeight:"bold",
    color:"white",
  },
 
  loginBtn: {
    paddingLeft:100,
    paddingRight:100,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "white",
   
  },
  back:{
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 10,
    zIndex: -1,
  }
});