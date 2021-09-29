import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Text, View, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import { styles } from '../RecuperarSenha/styles.js';
import { useState } from 'react';
import firebase from 'firebase';
// import auth from '@react-native-firebase/auth'

export default function RecuperarSenha() {

    //Navegação entre telas
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const AbrirFazerLogin = () => {
        navigation.reset({
            routes: [{ name: 'FazerLogin' }]
        })
    }
    const recover = () => {
        if (email !== '') {
            console.log(email);
            firebase.auth().sendPasswordResetEmail(email).then(
                (response) => {
                    Alert.alert('Atenção', `Enviamos um email de recuperação de senha para o seguinte endereço: ${email}`,
                     [{text: 'OK', onPress: ()=> AbrirFazerLogin()}]
                    )  
                }
            ).catch(
                (e) => {
                    console.log('ForgotPassword: recover:' + e);
                    switch (e.code) {
                        case 'auth/user-notfound':
                            Alert.alert('Erro', `${email} não encontrado ou não cadastrado`);
                            break;
                        case 'auth/invalid-email':
                            Alert.alert('Erro', `Endereço ${email} não encontrado ou não cadastrado `);
                            break;
                        case 'auth/user-disabled':
                            Alert.alert('Erro', `${email} não encontrado ou não cadastrado`);
                            break;

                    }
                }
            )
        } else{
            Alert.alert('Por favor, preencher email')
        }
    }
    // const [email, setEmail] = useState('')
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.textoPet}>Pet</Text>

            <Text style={styles.textoAmigos}>Amigos</Text>

            <Image style={styles.logo} source={require('../../../assets/src/patinhaLogin.png')} />

            <Text style={styles.InformacaoEmail}>Lhe enviaremos um email com mais informações sobre como recuperar sua senha</Text>

            <TextInput style={styles.inputEmail} onChangeText={(t) => setEmail(t)} placeholder='Email'></TextInput>

            <TouchableOpacity style={styles.botaoEnviarEmail} >
                <Text style={styles.textEnviarEmail} onPress={recover} >ENVIAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoJaTemCadastro} onPress={AbrirFazerLogin}>
                <Text style={{ fontSize: 17 }}>Já tem cadastro? Acesse!</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}