import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextComponent } from 'react-native'
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
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  async function handlePress() {

  }


  const AbrirHome = () => {
    navigation.reset({
      routes: [{ name: 'Home' }]
    })
  }

  const user_id = firebase.auth().currentUser.uid
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState(null)

  firebase.firestore().collection('clientes').where("id", "==", user_id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data().nome);
                setNome(doc.data().nome);
                setFoto(doc.data().foto)
                setId(doc.id)

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

  useEffect(() => {
    const subscribe = firebase.firestore().collection('chatId').onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let data: any = change.doc.data();
          data.createdAt = data.createdAt.toDate()
          setMessages((prevMessage) => GiftedChat.append(prevMessage,data));
        }
      })
    })

    return () => subscribe()
  }, [])

  function onSend(messages: IMessage[]){
    firebase.firestore().collection('chatId').doc(Date.now().toString()).set(messages[0])
  }

  return (
    <View style={styles.container}>
      <View style={styles.botaoMenu}>
        <TouchableOpacity style={styles.acessoMenu} onPress={AbrirHome}>
          <Ionicons name="arrow-back-circle-outline" size={50} color="black" style={{ backgroundColor: "#C41D00" }} />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>Mensagens</Text>   
      </View>
      <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          showAvatarForEveryMessage={true}
          user={{
            _id: user_id,
            name: nome,
            avatar:  foto
          }}
        />
    </View>
  )
}

/* <Feather name="menu" size={35} color="black" />



    */