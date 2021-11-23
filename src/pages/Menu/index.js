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
import { useNavigation,useRoute } from '@react-navigation/native';
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

  const AbrirMensagens = () => {
    navigation.reset({
      routes: [{ name: 'Mensagens' }]
    })
  }

  const AbrirConfig = () => {
    navigation.reset({
      routes: [{ name: 'Config'}]
    })
  }



    // Pegar o nome do usuário logado
    const user_id = firebase.auth().currentUser.uid

    firebase.firestore().collection('clientes').where("id", "==", user_id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data().nome);
                setNome(doc.data().nome.split(" ")[0]);
                setFotoUrl(doc.data().foto)
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        }); 

    const [nome, setNome] = useState(''); 
    const [fotoUrl, setFotoUrl] = useState('https://www.immotop.lu/files/default-logo.png')

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.viewPerfil}>
        <Text style={styles.textoMenu}>{nome}</Text>
        <Image style={styles.avatar} source={{uri: fotoUrl}} />
      </View>
      <DrawerContentScrollView {...props} style= {styles.drawerGeral}>

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
        <DrawerItem onPress={AbrirMensagens}
          icon={({ size, color }) => (
            <Feather name="message-circle" size={24} color="black" />
          )}
          label="Mensagens" />
        <DrawerItem onPress={AbrirConfig}
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