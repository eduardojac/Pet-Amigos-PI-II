import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../EscolherPerfil/styles.js'

export default function EscolherPerfil() {

    // Navegação entre telas
    const navigation = useNavigation();

    const AbrirTelaLogin = () => {
        navigation.reset({
            routes: [{ name: 'FazerLogin' }]
        })
    }

    const AbrirCadastroUsuario = () => {
        navigation.reset({
            routes: [{ name: 'CadastrarUsuario' }]
        })

    }

    const AbrirCadastroParceiro = () => {
        navigation.reset({
            routes: [{ name: 'CadastrarParceiro' }]
        })

    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.area}>
                <SafeAreaView>
                    <Text style={styles.pet}>Pet</Text>
                    <Text style={styles.amigos}>Amigos</Text>
                </SafeAreaView>


                <SafeAreaView >
                    <Image style={styles.logo}
                        source={require('../../../assets/src/patinhaLogin.png')}
                    />
                </SafeAreaView>
            </View>



            <TouchableOpacity style={styles.botaoCliente} onPress={AbrirCadastroUsuario}>
                <Text style={styles.textBotaoCliente}>CLIENTE</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.botaoParceiro} onPress={AbrirCadastroParceiro}>
                <Text style={styles.textBotaoParceiro}>PARCEIRO</Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.botaoJaTenhoCadastro} onPress={AbrirTelaLogin}>
                <Text style={{ fontSize: 17 }}>Já tem cadastro? Acesse!</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}


