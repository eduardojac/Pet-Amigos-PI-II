import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../Mensagens/styles'
import { Feather } from '@expo/vector-icons';
import { GiftedChat } from 'react-native-gifted-chat'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DrawerItem } from '@react-navigation/drawer';

export default function Mensagens() {
  const [mensagens, setMensagens] = useState([]);
  const navigation = useNavigation();

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
        <TouchableOpacity style={styles.acessoMenu} onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={35} color="black" />
        </TouchableOpacity>
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