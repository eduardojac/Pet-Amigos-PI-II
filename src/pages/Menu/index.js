import React, { useState } from 'react'
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
import firebase from '../../../firebaseconection';

export default function Menu(props) {

  // Navegação entre telas
  const navigation = useNavigation();

  const AbrirFazerLogin = () => {
    navigation.reset({
      routes: [{ name: 'FazerLogin' }]

    })
  }

  const AbrirHome = () => {
    navigation.reset({
      routes: [{ name: 'Home' }]
    })
  }

  const AbrirPerfil = () => {
    navigation.reset({
      routes: [{ name: 'Perfil' }]
    })
  }

    // Pegar o nome do usuário logado
    const emailDoLogado = firebase.auth().currentUser.email

    firebase.firestore().collection('clientes').where("email", "==", emailDoLogado)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data().nome);
                setPegar(doc.data().nome);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        }); 

    const [pegar, setPegar] = useState(''); 


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.viewPerfil}>
        <Text style={styles.textoMenu}>Pet Amigos</Text>
        <Text style={styles.textoUsuario}>{pegar}</Text>

        <Image style={styles.avatar} source={require('../../../assets/src/MenuAvatar.png')} />
      </View>
      <DrawerContentScrollView {...props}>

        <DrawerItem onPress={AbrirHome}
          icon={({ size, color }) => (
            <AntDesign name="home" size={24} color="black" />
          )}
          label="Tela Inicial" />
        <DrawerItem onPress={AbrirPerfil}
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