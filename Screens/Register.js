import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';


const Register = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userHeight, setUserHeight] = useState('');
  const [userWeight, setUserWeight] = useState('');
  const [userAge, setUserAge] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [Gender, setGender] = useState('');
  const [bmi, setBmi] = useState('');
  const [info, setInfo] = useState('');

  const [userPassword, setUserPassword] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [errortext, setErrortext] = useState('');

  const handleSubmitButton = props => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userAge) {
      alert('Please fill Age');
      return;
    }

    if (!userPassword) {
      alert('Please fill Password');
      return;
    }

    if (!userHeight) {
      alert('Please fill Height');
      return;
    }
    if (!userWeight) {
      alert('Please fill  Weight');
      return;
    }
    if (!selectedValue) {
      alert('Please fill  Gender ');
      return;
    }
    if (!ContactNumber) {
      alert('Please fill  your phone Number ');
      return;
    }
    

    //const handleBmi = props => {
    let val = (
      [Number(userWeight) / Number(userHeight) / Number(userHeight)] * 10000
    ).toFixed(1);
    console.log(typeof val);
    setBmi(val.toString());
    if (val < 18.5) {
      setInfo('Under Weight');
    } else if (val > 18.5 && val <= 24.9) {
      setInfo('Healthy');
    } else if (val > 24.9 && val < 30) {
      setInfo('Overweight');
    } else {
      setInfo('Obese');
    }
  };

  return (
    <View style={{
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
      }}>
      <Text style={styles.successTextStyle}>Rgister Here</Text>

      <View style={{flex: 1, backgroundColor: 'white',borderRadius:40}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{alignItems: 'center'}}></View>

          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserName => setUserName(UserName)}
                underlineColorAndroid="#f000"
                placeholder="Enter Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                https://github.com/Usama12167
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserAge => setUserAge(UserAge)}
                underlineColorAndroid="#f000"
                placeholder="Enter Age"
                textContentType="Number"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserHeight => setUserHeight(UserHeight)}
                underlineColorAndroid="#f000"
                placeholder="Enter height"
                textContentType="Number"
                keyboardType="numeric"
                placeholderTextColor="#8b9cb5"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={userWeight => setUserWeight(userWeight)}
                underlineColorAndroid="#f000"
                placeholder="Enter weight"
                textContentType="Number"
                keyboardType="numeric"
                placeholderTextColor="#8b9cb5"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={ContactNumber => setContactNumber(ContactNumber)}
                underlineColorAndroid="#f000"
                placeholder="Enter Phone number"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                textContentType="Number"
                keyboardType="numeric"
                returnKeyType="next"
              />
            </View>
           

            <View style={styles.SectionStyle}>
              <Picker
             
                selectedValue={selectedValue}
                style={{height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                  <Text  >jhgbvgc </Text>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                underlineColorAndroid="#f000"
                placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"
                returnKeyType="next"
                secureTextEntry={true}
                blurOnSubmit={false}
              />
            </View>

            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={styles.buttonStyle1}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('login')}>
            <Text>Login Now</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* <View>
      <Text>{bmi}</Text>
      <Text>{info}</Text>
          </View> */}
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    fontSize: 20,
    borderWidth:1,
    borderRadius:10,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent:"space-around",
  margin:15,
    
  },
  picker: {
    
    flex: 1,
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    
    
  },
  buttonStyle: {
    backgroundColor: 'skyblue',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
   
  },
  buttonStyle1: {
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 15,
    fontSize: 16,
    color: '#026139',
    fontSize: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    color: '#026139',
    fontSize: 15,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    
    borderColor: 'black',
    underlineColorAndroid:"transparent",
    
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    margin:30,
    
  },
});
