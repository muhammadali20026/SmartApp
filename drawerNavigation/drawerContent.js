
import * as React from 'react';
//import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  Reset from '../Screens/Reset'
import Home from '../Screens/Home';
import Profile from '../Screens/Updateprofile';
import Login from '../Screens/LoginScreen';
import Food from '../Screens/Food';
import Logout from '../Screens/Logout';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerContent() {
  
  return (
<View>
    <Food></Food>
    </View>
    //   <Drawer.Navigator  initialRouteName="Home">
    //   {/* drawerContent={()=> < Edit />} initialRouteName="Home"> */}
    //     <Drawer.Screen name="home" component={Home} />
    //     <Drawer.Screen name="update profile" component={Profile} />
    //     <Drawer.Screen name="Food plan" component={Food} />
    //     <Drawer.Screen name="Rest Password" component={Reset} />
    //     <Drawer.Screen name="Logout" component={Logout} />
    


    //   </Drawer.Navigator>
  );
  };