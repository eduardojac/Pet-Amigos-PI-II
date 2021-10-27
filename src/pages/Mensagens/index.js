import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../Mensagens/styles'
import { Feather } from '@expo/vector-icons';
import { GiftedChat } from 'react-native-gifted-chat'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DrawerItem } from '@react-navigation/drawer';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function Mensagens() {
  const [mensagens, setMensagens] = useState([]);
  const navigation = useNavigation();

  const AbrirHome = () => {
    navigation.reset({
      routes: [{ name: 'Home' }]
    })
  }

  useEffect(() => {
    setMensagens([
      {
        _id: 1,
        text: 'Hello Developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMensagens(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.botaoMenu}>
        <TouchableOpacity style={styles.acessoMenu} onPress={AbrirHome}>
          <Ionicons name="arrow-back-circle-outline" size={50} color="black" style={{backgroundColor: "#C41D00"}} />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>Mensagens</Text>
      </View>

      <GiftedChat
        messages={mensagens}
        showAvatarForEveryMessage={true}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />

    </View>
  )
}
// <Feather name="menu" size={35} color="black" />