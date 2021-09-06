import React from 'react'
import { styles } from '../Menu/styles'
import { Text, View, Image } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { Feather, AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Menu(props) {

  const AbrirFazerLogin = () => {
    navigation.reset({
      routes: [{ name: 'FazerLogin' }]

    })
  }

  const AbrirHome = () => {
    navigation.reset({
        routes: [{name: 'Home'}] 
    })
}

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.viewPerfil}>
        <Text style={styles.textoUsuario}>Papai</Text>
        <Text style={styles.textoUsuario}>De Pet</Text>
      </View>
      <DrawerContentScrollView {...props}>

        <DrawerItem onPress={AbrirHome}
          icon={({ size, color }) => (
            <AntDesign name="home" size={24} color="black" />
          )}
          label="Pet Amigos" />
        <DrawerItem
          icon={({ size, color }) => (
            <FontAwesome name="user-circle-o" size={24} color="black" />
          )}
          label="Perfil" />
        <DrawerItem
          icon={({ size, color }) => (
            <Feather name="message-circle" size={24} color="black" />
          )}
          label="Mensagens" />
        <DrawerItem
          icon={({ size, color }) => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          )}
          label="Notificações" />
        <DrawerItem
          icon={({ size, color }) => (
            <Feather name="settings" size={24} color="black" />
          )}
          label="Configurações" />

        <DrawerItem style={styles.botaoSair} onPress={AbrirFazerLogin}
          icon={({ size, color }) => (
            <MaterialCommunityIcons name="logout" size={24} color="black" />
          )}
          label="Sair" />

      </DrawerContentScrollView>

    </View>


  );
}

/* Se quiser que apareça as Screens definidas no RoutesDrawer poe isso em cima do DrawerItem
<DrawerItemList {...props} /> */