
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  Reset from '../Screens/Reset'
import Home from '../Screens/Home';
import Profile from '../Screens/Updateprofile';
import Login from '../Screens/LoginScreen';
import Food from '../Screens/Food';
import Logout from '../Screens/Logout';
import Edit from '../Screens/Edit';
import DrawerContent from './drawerContent';
const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  
  return (
      <Drawer.Navigator  
        initialRouteName="Home"> 
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Update profile" component={Profile} />
        <Drawer.Screen name="Food plan" component={Food} />
        <Drawer.Screen name="Rest Password" component={Reset} />
        <Drawer.Screen name="Logout" component={Logout} />
        <Drawer.Screen name="Edit" component={Edit} />


      </Drawer.Navigator>
  );
  };