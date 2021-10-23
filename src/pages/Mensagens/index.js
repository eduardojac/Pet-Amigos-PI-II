import React, { useState, useCallback, useEffect } from 'react'
import {View, Text} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

export default function Mensagens () {
    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {
      setMensagens([
        {
          _id: 1,
          text: 'Hello developer',
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
        <GiftedChat
          messages={mensagens}
          showAvatarForEveryMessage={true}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          
        />
        
      )
    }