import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/LoginScreen';
import Register from '../Screens/Register';
import SplashScreen from 'react-native-splash-screen'
import Reset from '../Screens/Reset';
import Home from '../Screens/Home';
import Food from '../Screens/Food';
//import DrawerScreen from '../drawerNavigation';
import Edit from '../Screens/Edit';
const Stack = createNativeStackNavigator();

const NavigationComponent = () => {

  SplashScreen.hide();
  

  return (
      <Stack.Navigator>
       
        {/* <Stack.Screen name='DrawerScreen' component={DrawerScreen} options ={ { headerShown : false }} /> */}
        <Stack.Screen name='login' component={Login} options ={ { headerShown : false }} />
        <Stack.Screen name='signup' component={Register} options ={ { headerShown : false }} />
        <Stack.Screen name='reset' component={Reset} options ={ { headerShown : false }} />
        <Stack.Screen name='home' component={Home} options ={ { headerShown : false }} />
        <Stack.Screen name='list' component={Food} options ={ { headerShown : false }} />
        {/* <Stack.Screen name='edit' component={Edit} options ={ { headerShown : false }} /> */}

         

      </Stack.Navigator>
      
  );
  

};


// const  DrawerScreen=()=> {
  
//   return (
//       <Drawer.Navigator initialRouteName="Home">
        
//         <Drawer.Screen name="home" component={Home} />
//         <Drawer.Screen name="update profile" component={Profile} />
//       </Drawer.Navigator>
//   );
//   };



export default NavigationComponent






/*

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/Register';
import SplashScreen from 'react-native-splash-screen'




const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  SplashScreen.hide();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };


function HomeScreen({ navigation }) {
 
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
*/