import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, Text } from 'react-native'
import Home from '../Home'
import Perfil from '../Perfil'
import Menu from '../Menu'
import TelaBanho from '../TelaBanho'
import TelaPasseio from '../TelaPasseio'
import TelaPet from '../TelaPet'
import Agendamento from '../Agendamento'
import Agenda from '../Agenda'
import AgendamentoPasseio from '../AgendamentoPasseio';
import Mensagens from '../Mensagens';
import Sobre from '../Sobre'
import Config from '../Config'
import Ajuda from '../Ajuda'
import Relatar from '../Relatar'

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
    <Drawer.Screen
      name="Agendamento"
      component={Agendamento}
    />
    <Drawer.Screen
      name="Agenda"
      component={Agenda}
    />
    <Drawer.Screen
      name="Perfil"
      component={Perfil}
    />
    <Drawer.Screen
      name="AgendamentoPasseio"
      component={AgendamentoPasseio}
    />
    <Drawer.Screen
      name="Mensagens"
      component={Mensagens}
      />
    <Drawer.Screen
      name="Sobre"
      component={Sobre}
      />
      <Drawer.Screen
      name="Config"
      component={Config}
      />
      <Drawer.Screen
      name="Ajuda"
      component={Ajuda}
      />
      <Drawer.Screen
      name="Relatar"
      component={Relatar}
      />      
    
  </Drawer.Navigator>


)

