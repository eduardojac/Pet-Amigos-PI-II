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
  /* const [messages, setMessages] = useState([]);
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
         }}
       />
     </View>
   )
 } */
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

  //const [Id, setId] = useState('')
  //const [IdDoUsuario, setIdDoUsuario] = useState('')

  /*//Exibir lista de usuários
  firebase.firestore().collection('clientes').where("id", "==", user_id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push({
          ...doc.data(),
          key: doc.id
        })
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data().nome);
        setData(data)
        setNome(doc.data().nome);
        setAnimacaoNome(false)
        setFotoUrl(doc.data().foto)
        setId(doc.id)
 
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    }); */

  //Exibir lista de parceiros cadastrados

  const ref = firebase.firestore().collection('clientes').where('id', "!=", user_id);
  useEffect(() => {
    ref.onSnapshot(querySnapshot => {
      const data = []
      querySnapshot.forEach(doc => {
        data.push({
          ...doc.data(),
          key: doc.id
        })
        // setId(doc.id)
        //setIdDoUsuario(doc.data().id)
      })
      setData(data)


    })
    return;
  }, [])

  /*firebase.firestore().collection('clientes').where("id", "!=", user_id)
    .get()
    .then((querySnapshot) => {
      const data = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data().nome);
        data.push({
          ...doc.data(),
          key: doc.id
        })
        //setId(doc.id)
        //setIdDoUsuario(doc.data().id)
      });
      setData(data) 'user.destino', '==', route.params?.id
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });  */

  //.where('user._id','==', user_id).where('user.destino', '==', route.params?.id)  É TIPO UMA DESSA: where('user._id','==', user_id || 'user._id', '==', route.params?.id).where('destino', '==', route.params?.id)

  /*const adicionarDestino = () => {
    firebase.firestore().collection('chatId').add({destino: route.params?.id});
  }*/

  /* async function filtros() {
     const origem = firebase.firestore().collection('chatId').where('user._id', 'in', [user_id,route.params?.id]).
     const destino = firebase.firestore().collection('chatId').where('destino', 'in', [user_id,route.params?.id])

     const [
       origemSnapshot,
       destinoSnapshot
     ] = await Promise.all([origem,destino])

     const eOrigem = origemSnapshot.docs
     const eDestino = destinoSnapshot.docs
     
     return _.concat(eOrigem,eDestino)

   } */

  useEffect(() => {
    const subscribe = firebase.firestore().collection('chatId').where('user.destino', 'in', [user_id, route.params?.id]).where('user._id', '==', user_id).onSnapshot((querySnapshot) => {
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

  useEffect(() => {
    const subscribe2 = firebase.firestore().collection('chatId').where('user.destino', 'in', [user_id, route.params?.id]).where('user._id', '==', route.params?.id).onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let data: any = change.doc.data();
          data.createdAt = data.createdAt.toDate()
          setMessages((prevMessage) => GiftedChat.append(prevMessage, data));

        }
      })
    })
    return () => subscribe2()
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
          _id: user_id,
          destino: route.params?.id
        }}

      />

    </View>

  )
}