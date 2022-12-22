
import { View, StyleSheet, TouchableOpacity, Text, TextInput, StatusBar, Image, ActivityIndicator, ToastAndroid } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import background from '../Image/background.png'
import { useNavigation } from "@react-navigation/native";
const Reset = () => {
  const navigation=useNavigation()
  const [email, setEmail] = useState('');
  const [indicator, setIndicator] = useState(false);

  const handleReset = () => {
    if (email !== '') {
      setIndicator(true);
      let data = new FormData();
      data.append('email', email);
      fetch('http://10.0.2.2:8000/common/api/' + 'forget-password', {
        method: 'post',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
        .then(res => res.json())
        .then(async success => {
          ToastAndroid.show(success.message, ToastAndroid.SHORT);
          if(success.status == 200){
            navigation.navigate('Otp',{email:email})
          }
          console.log('Success', success.message);
        })
        .catch(error => {
          console.log('error while Forget Password', error);
        })
        .finally(() => {
          setIndicator(false);
        });
    } else {
      ToastAndroid.show('Please fill all  fields', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.back} source={background} />
      <View style={styles.container1}>



        <View style={styles.text}>
          <Text style={{ color: "white" }}>{'Please enter your email to reset your password:'}</Text>
          <View>
            < MaterialCommunityIcons name="email-edit" size={24} />
            <TextInput

              style={styles.form}
              value={email}
              placeholder={'Your account email'}
              placeholderTextColor="white"
              onChangeText={(text) => setEmail(text)}
              autoCapitalize={'none'}
              underlineColorAndroid={"white"}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.form1}>
            <TouchableOpacity onPress={handleReset}>
              {indicator ?
                <ActivityIndicator /> :
                <Text >{'Request password reset'}</Text>
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Reset;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  container1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',

  },
  text: {
    alignItems: "center",
    marginTop: 50,
    justifyContent: "center",
    color: "white",

  },
  form: {
    width: 300,
    borderRadius: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,

    //  backgroundColor: "skyblue",
  },
  form1: {
    width: 300,
    borderRadius: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
  },
  back: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 10,
    zIndex: -1,
  }

});  