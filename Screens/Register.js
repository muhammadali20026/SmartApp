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
import background from '../Image/background.png';
import  DropDownPicker  from 'react-native-dropdown-picker';
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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
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
    <View style={styles.container}>
      <Text style={styles.successTextStyle}>Rgister Here</Text>

      <View style={styles.container}>
        <ScrollView>
          <Image style={styles.back} source={background} />

          <View style={{alignItems: 'center'}}></View>

          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserName => setUserName(UserName)}
                underlineColorAndroid={'white'}
                placeholder="Enter Name"
                placeholderTextColor="white"
                autoCapitalize="sentences"
                keyboardType="name"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserAge => setUserAge(UserAge)}
                underlineColorAndroid={'white'}
                placeholder="Enter Age"
                textContentType="Number"
                placeholderTextColor="white"
                keyboardType="numeric"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserHeight => setUserHeight(UserHeight)}
                underlineColorAndroid={'white'}
                placeholder="Enter height"
                textContentType="Number"
                keyboardType="numeric"
                placeholderTextColor="white"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={userWeight => setUserWeight(userWeight)}
                underlineColorAndroid={'white'}
                placeholder="Enter weight"
                textContentType="Number"
                keyboardType="numeric"
                placeholderTextColor="white"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={ContactNumber => setContactNumber(ContactNumber)}
                underlineColorAndroid={'white'}
                placeholder="Enter Phone number"
                placeholderTextColor="white"
                autoCapitalize="sentences"
                textContentType="Number"
                keyboardType="numeric"
                returnKeyType="next"
              />
            </View>

            <View style={styles.SectionStyle}>
              {/* <Picker
                selectedValue={selectedValue}
                underlineColorAndroid={"white"}
                style={{height: 50, width: 150 ,color:"red"}}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Text>jhgbvgc </Text>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker> */}
              <DropDownPicker 
                open={open}
                //underlineColorAndroid={'white'}
                value={value}
                placeholder="Select Gender"
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                underlineColorAndroid={'white'}
                placeholder="Enter Email"
                placeholderTextColor="white"
                keyboardType="email-address"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter Password"
                placeholderTextColor="white"
                returnKeyType="next"
                secureTextEntry={true}
                underlineColorAndroid={'white'}
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
            <Text style={{color: 'white', marginTop: 18}}>Login Now</Text>
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
    // inputView: {
    //   // backgroundColor: "skyblue",

    //    borderRadius: 30,
    //    width: "70%",
    //   flexDirection:"row",
    //    margin: 20,
    //    borderTopLeftRadius: 30,
    //    borderTopRightRadius: 30,
    //    alignItems: "center",

    //  },
    flexDirection: 'row',
    height: 40,
    fontSize: 20,
    //borderWidth:1,
    borderRadius: 10,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 15,
  },
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  picker: {
    flex: 1,
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
  buttonStyle: {
    backgroundColor: 'white',
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
    // color: '#026139',
    fontSize: 15,
  },
  buttonTextStyle: {
    // color: '#FFFFFF',
    paddingVertical: 10,
    color: '#026139',
    fontSize: 15,
  },
  inputStyle: {
    flex: 1,
    color: 'black',

    borderColor: 'black',
    underlineColorAndroid: 'transparent',
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
    margin: 30,
  },
  back: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 10,
    zIndex: -1,
  },
});
