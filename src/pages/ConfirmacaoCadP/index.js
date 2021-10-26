import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Text, View, SafeAreaView, Image, TextInput } from 'react-native';
import { styles } from '../ConfirmacaoCadP/styles.js';

export default function ConfirmacaoCadP() {

    //Navegação entre telas
    const navigation = useNavigation();

    const AbrirFazerLogin = () => {
        navigation.reset({
            routes: [{ name: 'FazerLogin' }]
        })
    }
    return (
        <SafeAreaView style={styles.container}>


            <Text style={styles.textoPet}>Pet</Text>

            <Text style={styles.textoAmigos}>Amigos</Text>

            <Image style={styles.logo} source={require('../../../assets/src/patinhaLogin.png')} />

            <Text style={styles.informacaoEmail}>Cadastro em análise, verifique seu email nos próximos 10 dias para verificar o retorno</Text>

            <TouchableOpacity style={styles.botaoJaTemCadastro} onPress={AbrirFazerLogin}>
                <Text style={{ fontSize: 17 }}>Voltar a tela inicial</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}