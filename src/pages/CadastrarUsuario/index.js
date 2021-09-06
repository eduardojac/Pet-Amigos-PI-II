import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from '../CadastrarUsuario/styles.js'
import { useNavigation } from '@react-navigation/native';
import firebase from '../../../firebaseconection';


export default function CadastrarUsuario() {
    
    const cadastrado = () =>
    Alert.alert("Cadastro realizado com sucesso!")
      
    const falhacadastro = () =>
    Alert.alert("Não foi possível realizar o seu cadastro!",
    "Lembre-se de que o email deve ser válido e sua senha deverá conter no mínimo 6 caracteres")
    

    const navigation = useNavigation();

    const AbrirFazerLogin = () => {
        navigation.reset({
            routes: [{ name: 'FazerLogin' }]  
        })
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) => {
        setPassword(txtPassword)
    }
    const Cadastramento = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        cadastrado()
        navigation.navigate('FazerLogin')
        }).catch(() => {
        falhacadastro()
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textoPet}>Pet</Text>

            <Text style={styles.textoAmigos}>Amigos</Text>

            <Image style={styles.logo} source={require('../../../assets/src/patinhaLogin.png')} />

            <TextInput
                style={styles.inputNome}
                placeholder='Nome' >
            </TextInput>

            <TextInput
                style={styles.inputEmail}
                placeholder='Email' value={email} onChangeText={txtEmail => onChangeEmail(txtEmail)}>
            </TextInput>

            <TextInput
                style={styles.inputSenha}
                secureTextEntry={true}
                placeholder='Senha' value={password} onChangeText={txtPassword => onChangePassword(txtPassword)}>
            </TextInput>

            <TextInput
                style={styles.inputConfirmarSenha}
                secureTextEntry={true}
                placeholder='Confirmar senha'>
            </TextInput>

            <TouchableOpacity style={styles.botaoCadastrar} onPress={Cadastramento}>
                <Text style={styles.textBotaoCadastrar}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoJaTemCadastro} onPress={AbrirFazerLogin}>
                <Text style={{ fontSize: 17 }}>Já tem cadastro? Acesse!</Text>
            </TouchableOpacity>



        </SafeAreaView>

    )
}
