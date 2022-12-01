
import { View,StyleSheet,TouchableOpacity,Text,TextInput } from "react-native";
import React,{useState} from "react";

const Reset = () => {
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
          <View style={styles.text}>
            <Text>{'Please enter your email to reset your password:'}</Text>
            <TextInput
              style={styles.form}
              value={email}
              placeholder={'Your account email'}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.form}>
                <Text style={styles.button}>{'Request password reset'}</Text>
              </View>
            </TouchableOpacity>
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
     // backgroundColor:"skyblue",
    },
    button:{
        

    },
    text:{
alignItems:"center",
marginTop:50,
justifyContent: "center",

    },
    form:{
        width: 300,
        borderRadius: 250,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        
        backgroundColor: "skyblue",
    },

});  