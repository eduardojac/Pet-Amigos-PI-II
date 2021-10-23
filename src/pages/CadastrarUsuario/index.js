import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from '../CadastrarUsuario/styles.js'
import { useNavigation } from '@react-navigation/native';
import firebase from '../../../firebaseconection';
import UserPermissions from '../../../utilities/UserPermissions.js';
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function CadastrarUsuario() {

    // Navegação entre telas
    const navigation = useNavigation();

    const AbrirFazerLogin = () => {
        navigation.reset({
            routes: [{ name: 'FazerLogin' }]
        })
    }

    // Cadastrar no banco e autenticação
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [senha, setSenha] = useState('')

    const Cadastramento = () => {
        if (senha === password) {   
            firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {  
                firebase.firestore().collection('clientes').add({ nome: nome, email: email, senha: password, id: firebase.auth().currentUser.uid, foto: 'https://www.immotop.lu/files/default-logo.png'});
                cadastrado()
                navigation.navigate('FazerLogin')
                 
            }).catch(() => {
                falhacadastro()
            })

        } else if (senha == "") {
            Alert.alert("Por favor, confirme sua senha")
            return;
        } else {
            Alert.alert("As senhas precisam ser as mesmas!")
            return;
        }
    }

    const cadastrado = () =>
        Alert.alert("Cadastro realizado com sucesso!")

    const falhacadastro = () =>
        Alert.alert("Não foi possível realizar o seu cadastro!",
            "Lembre-se de que o email deve ser válido e sua senha deverá conter no mínimo 6 caracteres")

    const onChangeNome = (txtNome) => {
        setNome(txtNome)
    }

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) => {
        setPassword(txtPassword)
    }

    const onChangeSenha = (txtSenha) => {
        setSenha(txtSenha)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textoPet}>Pet</Text>

            <Text style={styles.textoAmigos}>Amigos</Text>

            <Image style={styles.logo} source={require('../../../assets/src/patinha.png')} />

            <TextInput
                style={styles.inputNome}
                placeholder='Nome' onChangeText={txtNome => onChangeNome(txtNome)}>
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
                placeholder='Confirmar senha' value={senha} onChangeText={txtSenha => onChangeSenha(txtSenha)}>
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
