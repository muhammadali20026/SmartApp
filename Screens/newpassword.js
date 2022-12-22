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
const Password = () => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.back} source={background} />
      <View style={styles.container1}>
        <View style={styles.text}>
          <Text style={{color: 'white'}}></Text>
          <View>
            <TextInput
              style={styles.form}
              value={password}
              placeholder={'Enter a new password'}
              placeholderTextColor="white"
              onChangeText={text => setPassword(text)}
              autoCapitalize={'none'}
              underlineColorAndroid={'white'}
              keyboardType={'number'}
            />
          </View>
          <View style={styles.form1}>
            <TouchableOpacity onPress={() => {}}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Password;
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
