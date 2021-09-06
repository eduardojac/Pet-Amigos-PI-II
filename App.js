import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StatusBar, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RoutesStack from './src/pages/Stacks/RoutesStack';
import RoutesDrawer from './src/pages/Stacks/RoutesDrawer';
import Menu from './src/pages/Menu'

import api from './src/services/api'
 
export default () => {
  api.get("/clientes").then((response) => {
    console.log(response.data)
  })

  return (
    
    <NavigationContainer>
    <StatusBar hidden={true}/>
    <RoutesStack />
    </NavigationContainer>

  ) 
}