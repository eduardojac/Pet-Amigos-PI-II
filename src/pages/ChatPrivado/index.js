import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextComponent, FlatList, Image } from 'react-native'
import { styles } from '../ChatPrivado/styles'
import { Feather } from '@expo/vector-icons';
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DrawerItem } from '@react-navigation/drawer';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements/dist/buttons/Button';
import firebase from '../../../firebaseconection';
import { concat } from 'react-native-reanimated';

export default function ChatPrivado({ route }) {

  const navigation = useNavigation();
  const AbrirMensagens = () => {
    navigation.reset({
      routes: [{ name: 'Mensagens' }]
    })
  }
  const abrirChatPrivado = () => {
    navigation.reset({
      routes: [{ name: 'ChatPrivado' }]
    })
  }

  const [data, setData] = useState('')
  const user_id = firebase.auth().currentUser.uid

  const [messages, setMessages] = useState([]);

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


  const origemDestino = user_id + route.params?.id
  const destinoOrigem = route.params?.id + user_id

    useEffect(() => {
      const subscribe = firebase.firestore().collection('chatId').where('user._id', 'in', [origemDestino, destinoOrigem]).onSnapshot((querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let data: any = change.doc.data();
            data.createdAt = data.createdAt.toDate()
            setMessages((prevMessage) => GiftedChat.append(prevMessage, data));

          }
        })
      })
      return () => subscribe()
    }, [])

  function onSend(messages: IMessage[]) {
    firebase.firestore().collection('chatId').doc(Date.now().toString()).set(messages[0])

  }

  return (
    <View style={styles.container}>
      <View style={styles.botaoMenu}>
        <TouchableOpacity style={styles.acessoMenu} onPress={AbrirMensagens}>
          <Ionicons name="arrow-back-circle-outline" size={50} color="black" style={{ backgroundColor: "#C41D00" }} />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>{route.params?.nome}</Text>
        <Image style={styles.avatar} source={{ uri: route.params?.foto }}></Image>
      </View>

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: user_id + route.params?.id
        }}

      />

    </View>

  )
}