import React, { useState, useEffect } from 'react';
import { FlatList, Text, Image, View, SafeAreaView, TouchableOpacity, TextInput, Alert, DrawerLayoutAndroidComponent, LogBox } from 'react-native';
import { styles } from '../TelaPet/styles.js';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import firebase from '../../../firebaseconection';
import Modal from 'react-native-modal'
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'

export default function TelaPet(route) {

    // Warnings para ignorar
    LogBox.ignoreLogs([
        "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function"
    ])

    // Navegação entre telas
    const navigation = useNavigation();

    const AbrirHome = () => {
        navigation.reset({
            routes: [{ name: 'Home' }]
        })
    }

    const AbrirTelaPet = () => {
        navigation.reset({
            routes: [{ name: 'TelaPet' }]
        })
    }

    // Pegar o id do usuário logado e filtrar dados
    const user_id = firebase.auth().currentUser.uid

    const [data, setData] = useState('')
    const [qtd, setQtd] = useState('')

    useEffect(() => {
        firebase.firestore()
            .collection('pet')
            .where('user_id', '==', user_id)
            .onSnapshot((query) => {
                const data = []
                query.forEach(doc => {
                    data.push({
                        ...doc.data(),
                        id: doc.id,

                    })
                })
                setData(data)
                setQtd(data.length)
            })

    }, []);

    // Cadastrar pet 
    const [nome, setNome] = useState('')
    const [especie, setEspecie] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')

    const cadastrarPet = async () => {
        if (nome == "" || especie == "" || sexo == "" || idade == "") {
            //falhacadastro()
            setMostraCadastro(false)
            setMostraErro(true)
        } else {
            firebase.firestore().collection('pet').add({ nome: nome, especie: especie, sexo: sexo, idade: idade, user_id: user_id })
            cadastrado() 
            setMostraCadastro(false)
            AbrirTelaPet()
        }
    }

    const onChangeNome = (txtNome) => {
        setNome(txtNome)
    }
    const onChangeEspecie = (txtEspecie) => {
        setEspecie(txtEspecie)
    }
    const onChangeSexo = (txtSexo) => {
        setSexo(txtSexo)
    }
    const onChangeIdade = (txtIdade) => {
        setIdade(txtIdade)
    }
    const cadastrado = () =>
        Alert.alert("Cadastro realizado com sucesso!")

    const falhacadastro = () =>
        Alert.alert("Não foi possível realizar o seu cadastro!",
            "Preencha todos os campos")

    const falhaAtualizar = (id) =>
        Alert.alert("Não foi possível atualizar seu pet!",
            "Preencha todos os campos")


    // Editar pet
    const EditarPet = (id) => {
        if (nome == "" || especie == "" || sexo == "" || idade == "") {
            //falhaAtualizar()
            setMostraErro(true)
        } else {
            firebase.firestore().collection('pet').doc(id).update({ nome: nome, especie: especie, sexo: sexo, idade: idade, user_id: user_id })
            atualizado(id);
            setMostraEdicao(false);
            AbrirTelaPet()
            
        }
    }
    const atualizado = () =>
        Alert.alert("Atualizado com sucesso!")

    // Excluir um pet 
    const AlertaExcluir = (id) => {
        Alert.alert(
            'Excluir',
            'Tem certeza que deseja excluir esse pet?',
            [
                { text: 'Cancelar' },
                { text: 'Sim', onPress: () => ExcluirPet(id) }
            ])

    }

    const ExcluirPet = async (id) => {
        firebase.firestore().collection('pet').doc(id).delete()
    }

    // Abrir modal de cadastramento
    const [mostraCadastro, setMostraCadastro] = useState(false);
    const [mostraEdicao, setMostraEdicao] = useState(false);
    const [pegarId, setPegarId] = useState('');

    const abrirModalCadastro = () => {
        setMostraCadastro(true)

    }
    const abrirModalEditar = async (id) => {
        setMostraEdicao(true)
        setPegarId(id)
    }

    // Abrir modal de erro
    const [mostraErro, setMostraErro] = useState(false)
    const [mostraSucesso, setMostraSucesso] = useState(false)

    return (

        <View style={{ flex: 1 }}>

            <View style={styles.container}>

                <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirHome}>
                    <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
                </TouchableOpacity>
                <Text style={styles.texto}>Meu Pet</Text>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 30, flex: 0.2 }}>
                <TouchableOpacity style={styles.botaoAdicionar} onPress={abrirModalCadastro}>
                    <Text style={styles.textoAdd}>Adicionar novo pet</Text>
                    <AntDesign style={{ left: 105, bottom: 12 }} name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.textoLinha}>__________________________________________________</Text>


                <Modal
                    onBackdropPress={() => setMostraCadastro(false)}
                    isVisible={mostraCadastro}>
                    <View style={styles.viewModal}>
                        <View style={styles.telaModal}>
                            <TouchableOpacity style={{ right: 140 }} onPress={() => { setMostraCadastro(false) }}>
                                <EvilIcons name="chevron-down" size={50} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.textoPet}>Novo Pet</Text>

                            <View>
                                <TextInput style={styles.input} placeholder={'Nome'} placeholderTextColor='#808080' onChangeText={txtNome => onChangeNome(txtNome)}></TextInput>
                                <MaterialCommunityIcons name="tag-text-outline" size={24} color="black" style={styles.icone} />
                            </View>

                            <View>

                                <TextInput style={styles.input} placeholder={'Espécie'} placeholderTextColor='#808080' onChangeText={txtEspecie => onChangeEspecie(txtEspecie)}></TextInput>
                                <MaterialIcons name="pets" size={24} color="black" style={styles.icone} />
                            </View>

                            <View>
                                <TextInput style={styles.input} placeholder={'Sexo'} placeholderTextColor='#808080' onChangeText={txtSexo => onChangeSexo(txtSexo)}></TextInput>
                                <FontAwesome name="intersex" size={24} color="black" style={styles.icone} />
                            </View>

                            <View>
                                <TextInput type={Number} style={styles.input} placeholder={'Idade'} placeholderTextColor='#808080' onChangeText={txtIdade => onChangeIdade(txtIdade)}></TextInput>
                                <FontAwesome name="birthday-cake" size={24} color="black" style={styles.icone} />
                            </View>

                            <TouchableOpacity style={styles.botaoAdd} onPress={cadastrarPet}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FFF' }}>Adicionar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

                <Modal
                    onBackdropPress={() => setMostraEdicao(false)}
                    isVisible={mostraEdicao}>
                    <View style={styles.viewModal}>
                        <View style={styles.telaModal}>
                            <TouchableOpacity style={{ right: 140 }} onPress={() => { setMostraEdicao(false) }}>
                                <EvilIcons name="chevron-down" size={50} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.textoPet}>Editar Pet</Text>

                            <View>
                                <TextInput style={styles.input} placeholder={'Nome'} placeholderTextColor='#808080' onChangeText={txtNome => onChangeNome(txtNome)}></TextInput>
                                <MaterialCommunityIcons name="tag-text-outline" size={24} color="black" style={styles.icone} />
                            </View>

                            <View>

                                <TextInput style={styles.input} placeholder={'Espécie'} placeholderTextColor='#808080' onChangeText={txtEspecie => onChangeEspecie(txtEspecie)}></TextInput>
                                <MaterialIcons name="pets" size={24} color="black" style={styles.icone} />
                            </View>

                            <View>
                                <TextInput style={styles.input} placeholder={'Sexo'} placeholderTextColor='#808080' onChangeText={txtSexo => onChangeSexo(txtSexo)}></TextInput>
                                <FontAwesome name="intersex" size={24} color="black" style={styles.icone} />
                            </View>

                            <View>
                                <TextInput type={Number} style={styles.input} placeholder={'Idade'} placeholderTextColor='#808080' onChangeText={txtIdade => onChangeIdade(txtIdade)}></TextInput>
                                <FontAwesome name="birthday-cake" size={24} color="black" style={styles.icone} />
                            </View>

                            <TouchableOpacity style={styles.botaoAdd} onPress={() => EditarPet(pegarId)}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Atualizar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

            </View>
            <View style={styles.viewLista}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) =>
                    (
                        <TouchableOpacity disabled={true} >

                            <View style={styles.boxLista}>
                                <TouchableOpacity style={styles.botaoEditar} onPress={() => abrirModalEditar(item.id)}><Feather name="edit" size={24} color="green" /></TouchableOpacity>

                                <TouchableOpacity style={styles.botaoExcluir} onPress={() => AlertaExcluir(item.id)}><AntDesign name="delete" size={24} color="#C41D00" /></TouchableOpacity>

                                <Text style={styles.textoNome}>{item.nome}</Text>
                                <Text style={styles.textoEspecie}>{item.especie}</Text>
                                <Text style={styles.textoSexoEIdade}>{item.sexo}, {item.idade}</Text>
                                <Image style={styles.avatarBanho} source={require('../../../assets/src/DogTag.jpg')} />

                            </View>
                        </TouchableOpacity>

                    )}
                />
            </View> 
                <SCLAlert
                    theme="warning"
                    show={mostraErro}
                    title="Oops..."
                    subtitle="Todos os campos devem ser preenchidos"
                    onRequestClose={() => setMostraErro(false)}
                >
                    <SCLAlertButton theme="warning" onPress={() => setMostraErro(false)}>Entendido</SCLAlertButton>
                </SCLAlert>
                <SCLAlert
                    theme="success"
                    show={mostraSucesso}
                    title="Sucesso"
                    subtitle="Seu novo pet foi cadastrado"
                    onRequestClose={() => setMostraSucesso(false)}
                >
                    <SCLAlertButton theme="warning" onPress={() => setMostraSucesso(false)}>Entendido</SCLAlertButton>
                </SCLAlert>

        </View>

    )
}