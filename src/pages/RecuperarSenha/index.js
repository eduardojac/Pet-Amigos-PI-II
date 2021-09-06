import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {TouchableOpacity, Text, View, SafeAreaView, Image, TextInput} from 'react-native';
import {styles} from '../RecuperarSenha/styles.js';

export default function RecuperarSenha() {
    const navigation = useNavigation();

    const AbrirFazerLogin = () => {
        navigation.reset({
        routes: [{name: 'FazerLogin'}]
})
    }
    return (
        <SafeAreaView style={styles.container}>

        

       

           
       
        <Text style= {styles.textoPet}>Pet</Text>      
             
        <Text style = {styles.textoAmigos}>Amigos</Text>

        <Image style = {styles.logo} source={require('../../../assets/src/patinhaLogin.png')} />   

        <Text style = {styles.InformacaoEmail}>Lhe enviaremos um email com mais informações sobre como recuperar sua senha</Text>

        <TextInput style={styles.inputEmail} placeholder= 'Email'></TextInput>
         
        <TouchableOpacity style={styles.botaoEnviarEmail} >
                <Text style={styles.textEnviarEmail}>ENVIAR</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.botaoJaTemCadastro} onPress={AbrirFazerLogin}>
            <Text style={{fontSize: 17}}>Já tem cadastro? Acesse!</Text>
        </TouchableOpacity>

        </SafeAreaView>
    )
}