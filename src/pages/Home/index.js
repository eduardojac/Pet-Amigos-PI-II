import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Alert } from 'react-native'
import { useNavigation,useRoute } from '@react-navigation/native'
import { styles } from '../Home/styles'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import firebase from '../../../firebaseconection';
import { firestore } from 'firebase'
import { DrawerItem } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api'

export default function Home() {

    //const {email} = this.props.route.params
    //Passar o email para a tela
    //const [email, setEmail] = useState('');
    //const [id,setId] = useState('');


    /*firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setEmail(user.email);
        }

    }); */
   // api.get('clientes/'id)




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

    return (

        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.ola}>Bem vindo,</Text>
                <Text style={styles.papai}>o que deseja?</Text>

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

                <TouchableOpacity style={styles.botaoSair} onPress={AbrirAgenda}>
                    <Text style={styles.textSair}>AGENDA</Text>
                    <AntDesign name="calendar" size={30} color="black" />
                </TouchableOpacity>




            </View>

            <TouchableOpacity style={styles.botaoEmail} disabled={true} >
                <Text style={styles.textEmail}></Text>
                <Feather style={styles.iconeEmail} name="user" size={24} color="black" />

            </TouchableOpacity>


            <TouchableOpacity style={styles.acessoMenu} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={35} color="black" />
            </TouchableOpacity>

        </SafeAreaView >

    )
}