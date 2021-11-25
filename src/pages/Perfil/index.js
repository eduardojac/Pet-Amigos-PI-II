import React from 'react'
import { styles } from '../Perfil/styles'
import { View, Text, Image, TouchableOpacity, ActivityIndicator, LogBox, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { DrawerItem } from '@react-navigation/drawer';
import firebase from '../../../firebaseconection';
import { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal'
import UserPermissions from '../../../utilities/UserPermissions.js';
import * as ImagePicker from 'expo-image-picker'
import { DotIndicator } from 'react-native-indicators';

export default function Perfil() {

    // Warnings para ignorar
    LogBox.ignoreLogs([
        "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
        "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function"
    ])

    // Nome e email do usuário
    const [email, setEmail] = useState('');
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setEmail(user.email);

        }
    });

    const [nome, setNome] = useState('');
    const user_id = firebase.auth().currentUser.uid
    const [id, setId] = useState('')

    firebase.firestore().collection('clientes').where("id", "==", user_id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data().nome);
                setNome(doc.data().nome);
                setAnimacaoNome(false)
                setFotoUrl(doc.data().foto)
                setId(doc.id)

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    // Quantidade de Pets e Quantidade de Agendamentos
    const [qtdPet, setQtdPet] = useState('')
    const [qtdAgenda, setQtdAgenda] = useState('')
    const navigation = useNavigation();

    useEffect(() => {
        firebase.firestore()
            .collection('pet')
            .where('user_id', '==', user_id)
            .onSnapshot((query) => {
                const data = []
                query.forEach(doc => {
                    data.push({
                        ...doc.data(),
                        //id: doc.id,

                    })
                })
                setQtdPet(data.length)
            })

    }, []);

    useEffect(() => {
        firebase.firestore()
            .collection('agendamento')
            .where('user_id', '==', user_id)
            .onSnapshot((query) => {
                const data = []
                query.forEach(doc => {
                    data.push({
                        ...doc.data(),
                        //id: doc.id,

                    })
                })
                setQtdAgenda(data.length)
            })

    }, []);

    // Cadastrar foto no firebase
    const [foto, setFoto] = useState(null)
    const [fotoUrl, setFotoUrl] = useState('https://www.immotop.lu/files/default-logo.png')

    const enviarFoto = async () => {
        setAnimacao(true)
        const uploadUri = foto
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1)
        const response = await fetch(foto)
        const blob = await response.blob();
        var ref = firebase.storage().ref().child(filename);
        try {
            const task = ref.put(blob)
            task.on('state_changed', taskSnapshot => {
                console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
            });

            task.then(async () => {
                const url = await firebase.storage().ref(filename).getDownloadURL();
                console.log(url)
                firebase.firestore().collection('clientes').doc(id).update({ foto: url });
                setMostraModal(false)
                setAnimacao(false)
            });

        } catch (e) {
            Alert.alert('Por favor, insira uma foto')
            //console.log(e)
            setAnimacao(false)
           
        }

    }

    const escolherFoto = async () => {
        UserPermissions.getCameraPermission()

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            setFoto(result.uri)

        }
    }

    const [mostraModal, setMostraModal] = useState(false);
    const abrirModal = async () => {
        setMostraModal(true)
    }

    const [animacao, setAnimacao] = useState(false)
    const [animacaoNome, setAnimacaoNome] = useState(true)

    return (
        <View style={styles.container}>
            <View style={styles.containerTexto}>

                <Image style={styles.avatar} source={{ uri: fotoUrl }} />
                <Text style={styles.textoNome}>{nome}</Text>
                <DotIndicator animating={animacaoNome} size={8} style={styles.loading} />
                <TouchableOpacity onPress={abrirModal} style={styles.botaoModal}>
                    <MaterialIcons name="add-a-photo" size={50} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.informacoesPerfil}>
                <Text style={styles.textoEmail}>Email: </Text>
                <Text style={styles.textoDados}>{email}</Text>
                <View style={styles.hdivider} />
                <Text style={styles.textoPets}>Pets Cadastrados: </Text>
                <Text style={styles.textoDados}>{qtdPet}</Text>
                <View style={styles.hdivider} />
                <Text style={styles.textoAgendamentos}>Agendamentos Ativos: </Text>
                <Text style={styles.textoDados}>{qtdAgenda}</Text>
                <View style={styles.hdivider} />
            </View>
            <TouchableOpacity style={styles.acessoMenu} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={35} color="black" />
            </TouchableOpacity>

            <Modal
                onBackdropPress={() => setMostraModal(false)}
                isVisible={mostraModal}>
                <View style={styles.viewModal}>
                    <View style={styles.telaModal}>
                        <TouchableOpacity onPress={escolherFoto} style={styles.avatarPlaceHolder}>
                            <Image style={styles.logo} source={{ uri: foto }} style={styles.avatar} />
                            <MaterialIcons name="add-a-photo" size={50} color="white" style={{ marginTop: 6, marginLeft: 2 }} >
                            </MaterialIcons>
                        </TouchableOpacity>
                        <ActivityIndicator color="black" size='large' animating={animacao} />
                        <TouchableOpacity style={styles.botaoCadastrar} onPress={enviarFoto}>
                            <Text style={styles.textBotaoCadastrar}>Salvar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>


        </View>
    )
}