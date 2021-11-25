import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Alert, LogBox, TextInput } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { styles } from '../Home/styles'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation, EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import firebase from '../../../firebaseconection';
import { firestore } from 'firebase'
import { DrawerItem } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { DotIndicator } from 'react-native-indicators';
import * as Location from 'expo-location';

export default function Home({ route }) {
    // Navegação entre telas
    const navigation = useNavigation();

    const AbrirAgenda = () => {
        navigation.reset({
            routes: [{ name: 'Agenda' }]
        })
    }

    const AbrirTelaBanho = () => {
        navigation.reset({
            routes: [{ name: 'TelaBanho' }]
        })
    }

    const AbrirTelaPasseio = () => {
        navigation.reset({
            routes: [{ name: 'TelaPasseio' }]
        })
    }
    const AbrirTelaPet = () => {
        navigation.reset({
            routes: [{ name: 'TelaPet' }]
        })
    }


    // Warnings para ignorar
    LogBox.ignoreLogs([
        "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
        "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function"
    ])

    //Passar o email para a tela
    const [email, setEmail] = useState('');
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setEmail(user.email);

        }
    });

    // Pegar o nome do usuário logado
    const user_id = firebase.auth().currentUser.uid

    const [animacao, setAnimacao] = useState(true)
    const [nome, setNome] = useState(nome);

    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')

    firebase.firestore().collection('clientes').where("id", "==", user_id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data().nome);
                setEndereco(doc.data().endereco + ", ");
                setNumero(doc.data().numero + " - ")
                setComplemento(doc.data().complemento)

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    firebase.firestore().collection('clientes').where("id", "==", user_id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data().nome);
                setNome(doc.data().nome.split(" ")[0] + ",");
                setAnimacao(false)

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    // pegar localização
    const pegarLoc = async () => {


        let { status } = await Location.requestForegroundPermissionsAsync();


        if (status !== 'granted') {
            alert('Permissão negada para acessar a Localização!');
            return;
        } else {
            navigation.navigate('Mapa');

        }


    }

    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.ola}>Olá {nome}</Text>
            <Text style={styles.papai}>o que deseja?</Text>
            <DotIndicator animating={animacao} size={8} style={styles.loading} />

            <Text style={styles.pet}>Pet</Text>
            <Text style={styles.amigos}>Amigos</Text>

            <TouchableOpacity style={styles.botaoBanho} onPress={AbrirTelaBanho}>
                <Text style={styles.textBanho}>BANHO</Text>
                <FontAwesome name="bathtub" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoPasseio} onPress={AbrirTelaPasseio}>
                <Text style={styles.textPasseio}>PASSEIO</Text>
                <Foundation name="guide-dog" size={40} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoMeuPet} onPress={AbrirTelaPet}>
                <Text style={styles.textMeuPet}>MEU PET</Text>
                <MaterialIcons name="pets" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoAgenda} onPress={AbrirAgenda}>
                <Text style={styles.textAgenda}>AGENDA</Text>
                <AntDesign name="calendar" size={30} color="black" />
            </TouchableOpacity>



            <TouchableOpacity style={styles.botaoEmail} disabled={true} >
                <Text style={styles.textEmail}>{email}</Text>
                <Feather style={styles.iconeEmail} name="user" size={24} color="black" />

            </TouchableOpacity>
            <TouchableOpacity style={styles.acessoMenu} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={35} color="black" />
            </TouchableOpacity>


            <View style={{ bottom: '183%', width: 350, justifyContent: 'center', flexDirection: 'row' }}>
                    <Text onPress={pegarLoc}>{endereco + numero + complemento} </Text> 
                    <EvilIcons style={{left: 2, bottom: 10}}name="chevron-down" size={45} color="black" onPress={pegarLoc}/>
            </View>


        </SafeAreaView >

    )
}