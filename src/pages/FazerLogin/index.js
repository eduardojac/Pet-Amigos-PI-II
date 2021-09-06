import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Alert } from 'react-native';
import { styles } from '../FazerLogin/styles.js';
import firebase from '../../../firebaseconection';
import Home from '../Home';

export default function FazerLogin() {

    const falha = () =>
    Alert.alert("Usuário ou senha incorretos!")
    

    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) => {
        setPassword(txtPassword)
    }
    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            navigation.navigate('Home')
        }).catch(() => {
            falha()
        })
    }

    /*const AbrirHome = () => {
        navigation.reset({
            routes: [{ name: 'Home' }]
        })
    }*/

    const AbrirTelaPerfil = () => {
        navigation.reset({
            routes: [{ name: 'EscolherPerfil' }]
        })
    }

    const AbrirRecuperarSenha = () => {
        navigation.reset({
            routes: [{ name: 'RecuperarSenha' }]
        })
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.pet}>Pet</Text>
            <Text style={styles.amigos}>Amigos</Text>

            <Image style={styles.logo} source={require('../../../assets/src/patinhaLogin.png')} />

            <TextInput style={styles.inputLogin} placeholder='Login' value={email} onChangeText={txtEmail =>onChangeEmail(txtEmail)}></TextInput>

            <TextInput style={styles.inputSenha} placeholder='Senha' secureTextEntry={true} value={password} onChangeText={txtPassword =>onChangePassword(txtPassword)}></TextInput>


            <TouchableOpacity style={styles.botaoAcessar} onPress={login}>
                <Text style={styles.textBotaoAcessar}>ACESSAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoCadastro} onPress={AbrirTelaPerfil}>
                <Text style={{ fontSize: 17 }}>Não tem cadastro? Cadastre-se!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoEsqueceuSenha} onPress={AbrirRecuperarSenha}>
                <Text style={{ fontSize: 17 }}>Esqueci minha senha</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}


