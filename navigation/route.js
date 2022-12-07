import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavigationComponent from './index';
import { Provider, useSelector } from 'react-redux'

import DrawerScreen from '../drawerNavigation/index';

const Routes = () => {
  const isLogin = useSelector((data)=>data.auth.isLoggedIn)

  console.log({isLogin});
  
  return(
  isLogin ?
    <DrawerScreen />
  :
    <NavigationComponent />
  )
}



export default Routes




