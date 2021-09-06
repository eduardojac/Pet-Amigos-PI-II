import React from 'react';
import {View, Text, TextInput, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {styles} from '../CadastrarParceiro/styles.js'
import {useNavigation} from '@react-navigation/native';

export default function CadastrarUsuario () { 
    const navigation = useNavigation();

    const AbrirFazerLogin = () => {
        navigation.reset({
        routes: [{name: 'FazerLogin'}]
    })

}
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textoPet}>Pet</Text>

            <Text style={styles.textoAmigos}>Amigos</Text>

            <Image style={styles.logo} source={require('../../../assets/src/patinhaLogin.png')} />  
            
            <TextInput 
                style={styles.inputNome}
                placeholder= 'Nome'>
            </TextInput>

            <TextInput 
                style={styles.inputEmail}
                placeholder= 'Email'>
            </TextInput>

            <TextInput 
                style={styles.inputSenha}
                secureTextEntry= {true}
                placeholder= 'Senha'>
            </TextInput>

            <TextInput 
                style={styles.inputConfirmarSenha}
                secureTextEntry= {true}
                placeholder= 'Confirmar senha'>
            </TextInput>

            <TouchableOpacity style={styles.botaoCadastrar} >
                <Text style={styles.textBotaoCadastrar}>CADASTRAR</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.botaoJaTemCadastro} onPress={AbrirFazerLogin}>
                <Text style={{fontSize: 17}}>Já tem cadastro? Acesse!</Text>
            </TouchableOpacity>


            
            </SafeAreaView>
    
    )}