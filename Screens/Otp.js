import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, ActivityIndicator, Text } from 'react-native';

const OTPScreen = () => {
    const [otp, setOTP] = useState(['', '', '', '']);
    const [indicator,setIndicator] = useState(false)
    const email=useRoute().params?.email;

    const handleChange = (text, index) => {
        const newOTP = [...otp];
        newOTP[index] = text;
        setOTP(newOTP);
    }
    const handleSubmit = () => {
        const str = otp.toString().replaceAll(',', '')

        setIndicator(true);
        let data = new FormData();
        data.append('email', email);
        data.append('otp', str);
        fetch('http://10.0.2.2:8000/common/api/confirm-token', {
            method: 'post',
            body: data,
            headers: {
                Accept: 'application/json',
            },
        })
            .then(res => res.json())
            .then(async success => {
                console.log('successss',success)
                  
            })
            .catch(error => {
                console.log('error while Forget Password', error);
            })
            .finally(() => {
                setIndicator(false);
            });
    };
    //   const ResendOTP = () => {
    //     setIndicatorResMod(true);
    //     setResendIndicator(true);
    //     let data = new FormData();
    //     data.append('email', email);
    //     data.append('role', 'recruiter');
    //     fetch('http://10.0.2.2:8000/common/api/forget-password', {
    //       method: 'post',
    //       body: data,
    //       headers: {
    //         Accept: 'application/json',
    //       },
    //     })
    //       .then(res => res.json())
    //       .then(async success => {
    //         if (success.status == 200) {
    //           console.log('thissssssss');
    //           atmpts = 5;
    //           setModal(false);
    //           pin1Ref.current.focus();
    //         } else {
    //           console.log('Success error while Forget Password', success);
    //         }
    //       })
    //       .catch(error => {
    //         console.log('error while Forget Password', error);
    //       })
    //       .finally(() => {
    //         setIndicatorResMod(false);
    //         setResendIndicator(false);
    //       });
    //   };

    //   const handleSubmit = () => {
    //     const str=otp.toString().replaceAll(',','')
    //     console.log('otpppp',str)
    //     // Submit the OTP code
    //   }

    return (
        <View style={styles.container}>
            {otp.map((digit, index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    onChangeText={text => handleChange(text, index)}
                    value={digit}
                    maxLength={1}
                    keyboardType="number-pad"
                />
            ))}
             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              {indicator ?
                <ActivityIndicator /> :
                <Text>{'SUBMIT'}</Text>
              }
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '20%',
        textAlign: 'center',
        marginRight: 5,
    },
    button: {
        width: 100,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop: 20,
    },
});

export default OTPScreen;
