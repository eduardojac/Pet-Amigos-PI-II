import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import {View, Text} from 'react-native'


import Home from '../Home'
import Usuario from '../Usuario'
import Mensagens from '../Mensagens'
import Menu from '../Menu'
import TelaBanho from '../TelaBanho'
import TelaPasseio from '../TelaPasseio'
import TelaPet from '../TelaPet'

const Drawer = createDrawerNavigator();



export default () => (
 
        <Drawer.Navigator drawerContent={props => <Menu {...props} />}
        initialRouteName="Home"
        >       
        <Drawer.Screen
        name="Home"
        component={Home}
        />
        <Drawer.Screen
        name="TelaBanho"
        component={TelaBanho}
        />
        <Drawer.Screen
        name="TelaPasseio"
        component={TelaPasseio}
        />
         <Drawer.Screen
        name="TelaPet"
        component={TelaPet}
        />

        </Drawer.Navigator>
      

    )

    