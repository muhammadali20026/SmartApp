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

const Signup = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userHeight, setUserHeight] = useState('');
  const [userWeight, setUserWeight] = useState('');
  const [userAge, setUserAge] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [Gender, setGender] = useState('');

  const [userPassword, setUserPassword] = useState('');

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
    if (!Gender) {
      alert('Please fill  Gender ');
      return;
    }
    if (!ContactNumber) {
      alert('Please fill  your phone Number ');
      return;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
      }}>
      <Text style={styles.successTextStyle}>Rgister Here</Text>

      <View style={{flex: 1, backgroundColor: 'white'}}>
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
              />

            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserAge => setUserAge(UserAge)}
                underlineColorAndroid="#f000"
                placeholder="Enter Age"
                textContentType='Number'
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
                textContentType='Number'
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
                textContentType='Number'
                keyboardType="numeric"
                placeholderTextColor="#8b9cb5"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={ContactNumber =>
                  setContactNumber(ContactNumber)
                }
                underlineColorAndroid="#f000"
                placeholder="Enter Phone number"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                textContentType='Number'
                keyboardType="numeric"
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={Gender =>
                  setGender(Gender)
                }
                underlineColorAndroid="#f000"
                placeholder="Gender"
                
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
              />
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
    </View>
  );
};
export default Signup;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    borderRadius: 50,

    backgroundColor: 'white',
  },
  buttonStyle: {
    backgroundColor: 'skyblue',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
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
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
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
    padding: 30,
  },
});
