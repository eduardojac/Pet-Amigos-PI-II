import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextComponent, FlatList, Image } from 'react-native'
import { styles } from '../Mensagens/styles'
import { Feather } from '@expo/vector-icons';
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DrawerItem } from '@react-navigation/drawer';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements/dist/buttons/Button';
import firebase from '../../../firebaseconection';

export default function Mensagens() {

  const navigation = useNavigation();

  const AbrirHome = () => {
    navigation.reset({
      routes: [{ name: 'Home' }]
    })
  }
  const abrirChatPrivado = (nome, email, foto,id) => {
    navigation.navigate('ChatPrivado', {
      nome: nome.split(" ")[0],
      email: email,
      foto: foto,
      id: id
    })
  }

  const [data, setData] = useState('')
  const user_id = firebase.auth().currentUser.uid
  
  //Exibir lista de usuários (exceto o logado)

  const ref = firebase.firestore().collection('clientes').where('id', "!=", user_id);
  useEffect(() => {
    ref.onSnapshot(querySnapshot => {
      const data = []
      querySnapshot.forEach(doc => {
        data.push({
          ...doc.data(),
          key: doc.id
        })
      })
      setData(data)

    })
    return;
  }, [])

 
  return (
    <View style={styles.container}>
      <View style={styles.botaoMenu}>
        <TouchableOpacity style={styles.acessoMenu} onPress={AbrirHome}>
          <Ionicons name="arrow-back-circle-outline" size={50} color="black" style={{ backgroundColor: "#C41D00" }} />
        </TouchableOpacity>
        <Text style={styles.textoMensagem}>Mensagens</Text>
      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <FlatList

          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => abrirChatPrivado(item.nome, item.email, item.foto, item.id)}>
              <View style={styles.boxLista}>
                <Text style={{ color: 'black', fontSize: 15, left: 60, fontWeight: 'bold', color: '#C41D00' }}>{item.nome}</Text>
                <Text style={{ color: 'black', fontSize: 15, left: 60, top: 10 }}>{item.email}</Text>
                <Image style={styles.avatar} source={{ uri: item.foto }}></Image>
                <Text style={{bottom: 10000}}>{item.id}</Text>
              </View>
            </TouchableOpacity>

          )}
        />
      </View>
    </View>

  )
}