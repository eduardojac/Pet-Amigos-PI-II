import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';



import Loading from '../Loading'
import FazerLogin from '../FazerLogin'
import EscolherPerfil from '../EscolherPerfil'
import RecuperarSenha from '../RecuperarSenha'
import CadastrarUsuario from '../CadastrarUsuario'
import CadastrarParceiro from '../CadastrarParceiro'
import RoutesDrawer from './RoutesDrawer'
import Home from '../Home'
import TelaBanho from '../TelaBanho'
import TelaPasseio from '../TelaPasseio'
import TelaPet from '../TelaPet'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator 
    
    initialRouteName="Loading"
    screenOptions={{
        headerShown: false
        
    }}
    >
        
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="FazerLogin" component={FazerLogin} />
        <Stack.Screen name="EscolherPerfil" component={EscolherPerfil}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario}/>
        <Stack.Screen name="CadastrarParceiro" component={CadastrarParceiro}/>
        <Stack.Screen name="Home" component={RoutesDrawer}/>  
        <Stack.Screen name="TelaBanho" component={TelaBanho} />   
        <Stack.Screen name="TelaPasseio" component={TelaPasseio} />  
        <Stack.Screen name="TelaPet" component={TelaPet} />  
             
    </Stack.Navigator>

        
);

//<Stack.Screen name="TelaBanho" component={TelaBanho}/>