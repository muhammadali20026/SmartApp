
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
import Theme from '../Screens/theme';
const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  
  return (
      <Drawer.Navigator  
        initialRouteName="Home" > 
        {/* headerStyle: {{
            backgroundColor: '#307ecc', //Set Header color
          }}, */}
        <Drawer.Screen name="Home" component={Home} options={{ headerStyle: {
            backgroundColor: '#47a89a', //Set Header color
          }} }/>
        <Drawer.Screen name="Update profile" component={Profile}  options={{ headerStyle: {
            backgroundColor: '#47a89a',}}}/> 
        <Drawer.Screen name="Food plan" component={Food}   options={{ headerStyle: {
            backgroundColor: '#47a89a',}}}/>
        <Drawer.Screen name="Reset Password" component={Reset}   options={{ headerStyle: {
            backgroundColor: '#47a89a',}}}/>
        <Drawer.Screen name="Logout" component={Logout}   options={{ headerStyle: {
            backgroundColor: '#47a89a',}}}/>
        <Drawer.Screen name="Edit" component={Edit}  options={{ headerStyle: {
            backgroundColor: '#47a89a',}}}/>
             <Drawer.Screen name="theme" component={Theme}  options={{ headerStyle: {
            backgroundColor: '#47a89a',}}}/>


      </Drawer.Navigator>
  );
  };