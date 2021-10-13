import React from 'react'
import { View, Text } from 'react-native'
import firebase from '../../../firebaseconection';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

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

    const [qtdPet,setQtdPet] = useState('')
    const [qtdAgenda, setQtdAgenda] = useState('')

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
        <View>
            <Text>Nome: {nome}</Text>
            <Text>Email: {email}</Text>
            <Text>Pets Cadastrados: {qtdPet}</Text>
            <Text>Agendamentos Ativos: {qtdAgenda}</Text>
        </View>
    )
}