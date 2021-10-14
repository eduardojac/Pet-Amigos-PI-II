import React from 'react'
import { styles } from '../Perfil/styles'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { DrawerItem } from '@react-navigation/drawer';
import firebase from '../../../firebaseconection';
import { useState, useEffect } from 'react';

export default function Perfil() {

    // Foto de Perfil

    // Nome e email do usuário
    const [email, setEmail] = useState('');
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setEmail(user.email);

        }
    });

    const emailDoLogado = firebase.auth().currentUser.email
    const [nome, setNome] = useState('');

    firebase.firestore().collection('clientes').where("email", "==", emailDoLogado)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data().nome);
                setNome(doc.data().nome);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    // Quantidade de Pets e Quantidade de Agendamentos
    const user_id = firebase.auth().currentUser.uid

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
                        id: doc.id,

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
                        id: doc.id,

                    })
                })
                setQtdAgenda(data.length)
            })

    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.containerTexto}>
                <Image style={styles.avatar} source={require('../../../assets/src/MenuAvatar.png')} />
                <Text style={styles.textoNome}>{nome}</Text>
            </View>
            <View style={styles.informacoesPerfil}>
                <Text style={styles.textoEmail}>Email: {email}</Text>
                <Text style={styles.textoPets}>Pets Cadastrados: {qtdPet}</Text>
                <Text style={styles.textoAgendamentos}>Agendamentos Ativos: {qtdAgenda}</Text>
            </View>
            <TouchableOpacity style={styles.acessoMenu} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={35} color="black" />
            </TouchableOpacity>
        </View>
    )
}