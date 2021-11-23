import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Text, View, SafeAreaView, TouchableOpacity, TextInput, LogBox } from 'react-native';
import { styles } from '../Agenda/styles.js';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';
import Modal from 'react-native-modal'
import { EvilIcons } from '@expo/vector-icons';

export default function Agenda() {

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

    const AbrirTelaBanho = () => {
        navigation.reset({
            routes: [{ name: 'TelaBanho' }]
        })
    }

    const AbrirTelaPasseio = () => {
        navigation.reset({
            routes: [{ name: 'TelaPasseio' }]
        })
    }

    // Alertas personalizados

    // Passar lista de agendamentos por usuário
    const user_id = firebase.auth().currentUser.uid

    const [data, setData] = useState('')

    useEffect(() => {
        firebase.firestore()
            .collection('agendamento')
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
            })

    }, []);

    // Abrir modal escolha
    const abrirModalEscolha = () => {
        setMostraEscolha(true)

    }


    const [mostraEscolha, setMostraEscolha] = useState(false);

    // Excluir agendamento
    const AlertaExcluir = (id) => {
        Alert.alert(
            'Excluir',
            'Tem certeza que deseja excluir esse agendamento?',
            [
                { text: 'Cancelar' },
                { text: 'Sim', onPress: () => ExcluirAgendamento(id) }
            ])

    }

    const ExcluirAgendamento = async (id) => {
        firebase.firestore().collection('agendamento').doc(id).delete()
    }
    //a
    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container}>

                <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirHome}>
                    <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
                </TouchableOpacity>
                <Text style={styles.textAgendamento}>Agendamentos</Text>
            </View>

            <View style={{ alignItems: 'center', marginVertical: 30, flex: 0.2 }}>
                <TouchableOpacity style={styles.botaoAdicionar} onPress={abrirModalEscolha}>
                    <Text style={styles.textAdd}>Realizar agendamento</Text>
                    <AntDesign style={{ left: 105, bottom: 12 }} name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.textLinha}>__________________________________________________</Text>
            </View>

            <Modal
                onBackdropPress={() => setMostraEscolha(false)}
                isVisible={mostraEscolha}>
                <View style={styles.viewModal}>
                    <View style={styles.telaModal}>
                        <TouchableOpacity style={{ right: 140 }} onPress={() => { setMostraEscolha(false) }}>
                            <EvilIcons name="chevron-down" size={50} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.textPet}>Agendar</Text>

                        <TouchableOpacity onPress={AbrirTelaBanho} style={styles.botaoBanho}>
                            <Text style={styles.textBanho}>Banho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={AbrirTelaPasseio} style={styles.botaoPasseio}>
                            <Text style={styles.textPasseio}>Passeio</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>


            <View style={styles.viewLista}>
                <FlatList

                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) =>
                    (

                        <TouchableOpacity disabled={true} >

                            <View style={styles.boxLista}>

                                <TouchableOpacity style={styles.botaoExcluir} onPress={() => AlertaExcluir(item.id)}><AntDesign name="delete" size={24} color="#C41D00" /></TouchableOpacity>
                                <Text style={styles.textEmpresa}>{item.empresa}, {item.cidade}</Text>
                                <Text style={styles.textServico}>{item.servico}</Text>
                                <Text style={styles.textDia}>{item.dia}</Text>
                                <Text style={styles.textMes}>{item.mes}</Text>
                                <Text style={styles.textHorario}>{item.horario}</Text>
                                <Text style={styles.textPreco}>{item.preco}</Text>

                            </View>
                        </TouchableOpacity>

                    )}
                />
            </View>


        </View>
    )
}