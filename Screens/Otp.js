import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    StatusBar,
    Image,
  } from 'react-native';
  import React, {useState} from 'react';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import background from '../Image/background.png';
  const OTP = () => {
    const [otp, setOtp] = useState('');
    
    return (
      <View style={styles.container}>
        <Image style={styles.back} source={background} />
        <View style={styles.container1}>
          <View style={styles.text}>
            <Text style={{color: 'white'}}>
              {'Please enter your email to reset your password:'}
            </Text>
            <View>
              <MaterialCommunityIcons name="email-edit" size={24} />
              <TextInput
                style={styles.form}
                value={otp}
                placeholder={'otp code'}
                placeholderTextColor="white"
                onChangeText={text => setOtp(text)}
                autoCapitalize={'none'}
                underlineColorAndroid={'white'}
                keyboardType={'number'}
              />
              
            </View>
            <View style={styles.form1}>
              <TouchableOpacity onPress={() => {}}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  export default OTP;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    container1: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    text: {
      alignItems: 'center',
      marginTop: 50,
      justifyContent: 'center',
      color: 'white',
    },
    form: {
      width: 300,
      borderRadius: 250,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
  
      //  backgroundColor: "skyblue",
    },
    form1: {
      width: 300,
      borderRadius: 250,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      backgroundColor: 'white',
    },
    back: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 10,
      zIndex: -1,
    },
  });
  