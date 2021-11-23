import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from '../CadastrarParceiro/styles.js'
import { useNavigation } from '@react-navigation/native';
import firebase from '../../../firebaseconection';
import { TextInputMask } from 'react-native-masked-text';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'

export default function CadastrarParceiro() {

    // Navegação entre telas
    const navigation = useNavigation();

    const AbrirFazerLogin = () => {
        navigation.reset({
            routes: [{ name: 'FazerLogin' }]
        })
    }

    // Cadastrar no banco e Autenticação
    const [empresa, setEmpresa] = useState('')
    const [cpf, setCpf] = useState('')
    const [cidade, setCidade] = useState('')
    const [telefone, setTelefone] = useState('')

    const [mostraErro, setMostraErro] = useState(false)
    const [mostraSucesso, setMostraSucesso] = useState(false)


    const cadastrado = () =>
        Alert.alert("Cadastro realizado com sucesso!")

    const falhacadastro = () =>
        Alert.alert("Não foi possível realizar o seu cadastro!",
            "Preencha todos os campos")

    const Inserir = () => {

        if (empresa == "" || cpf == "" || cidade == "" || telefone == "") {
            //falhacadastro()
            setMostraErro(true)

        } else {
            firebase.firestore().collection('parceiros').add({ empresa: empresa, cpf: cpf, cidade: cidade, telefone: telefone, foto: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pet-shop-logo-design-template-bc892cbf4691f21d905feb883e9ff0ee_screen.jpg?ts=1570445501' });
            //cadastrado()
            //navigation.navigate('ConfirmacaoCadP')
            setMostraSucesso(true)
        }
    }

    const onChangeEmpresa = (txtEmpresa) => {
        setEmpresa(txtEmpresa)
    }

    const onChangeCpf = (txtCpf) => {
        setCpf(txtCpf)
    }
    const onChangeCidade = (txtCidade) => {
        setCidade(txtCidade)
    }

    const onChangeTelefone = (txtTelefone) => {
        setTelefone(txtTelefone)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textoPet}>Pet</Text>

            <Text style={styles.textoAmigos}>Amigos</Text>

            <Image style={styles.logo} source={require('../../../assets/src/patinhaLogin.png')} />

            <TextInput
                style={styles.inputNomeEmpresa}
                placeholder='Empresa' onChangeText={txtEmpresa => onChangeEmpresa(txtEmpresa)}>
            </TextInput>

            <TextInputMask
                style={styles.inputCPFCNPJ}
                maxLength={18}
                placeholder='CPF/CNPJ'

                type={'cpf'} value={cpf} onChangeText={txtCpf => onChangeCpf(txtCpf)} />


            <TextInput
                style={styles.inputCidade}
                placeholder='Cidade' onChangeText={txtCidade => onChangeCidade(txtCidade)}>
            </TextInput>

            <TextInputMask
                style={styles.inputTelefone}
                maxLength={15}
                type={'cel-phone'}
                options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                }}
                placeholder='Telefone' value={telefone} onChangeText={txtTelefone => onChangeTelefone(txtTelefone)} />


            <TouchableOpacity style={styles.botaoCadastrar} onPress={Inserir}>
                <Text style={styles.textBotaoCadastrar}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoJaTemCadastro} onPress={AbrirFazerLogin}>
                <Text style={{ fontSize: 17 }}>Já tem cadastro? Acesse!</Text>
            </TouchableOpacity>

            <SCLAlert
                theme="success"
                show={mostraSucesso}
                title="Cadastro realizado"
                subtitle="Seus serviços estarão disponíveis no aplicativo em breve"
                onRequestClose={() => setMostraSucesso(false)}
            >
                <SCLAlertButton theme="success" onPress={() => navigation.navigate('FazerLogin')}>Entendido</SCLAlertButton>
            </SCLAlert>
            <SCLAlert
                theme="danger"
                show={mostraErro}
                title="Cadastro inválido"
                subtitle="Preencha todos os campos"
                onRequestClose={() => setMostraErro(false)}
            >
                <SCLAlertButton theme="danger" onPress={() => setMostraErro(false)}>Tentar novamente</SCLAlertButton>
            </SCLAlert>

        </SafeAreaView>

    )
}