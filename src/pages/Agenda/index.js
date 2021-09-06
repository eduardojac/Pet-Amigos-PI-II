import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../Agenda/styles.js';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';
import Modal from 'react-native-modal'
import { EvilIcons } from '@expo/vector-icons';

export default function Agenda() {

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

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container}>

                <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirHome}>
                    <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
                </TouchableOpacity>
                <Text style={styles.texto}>Agendamentos</Text>
            </View>

            <View style={{ alignItems: 'center', marginVertical: 30, flex: 0.2 }}>
                <TouchableOpacity style={styles.botaoAdicionar} onPress={abrirModalEscolha}>
                    <Text style={styles.textoAdd}>Realizar agendamento</Text>
                    <AntDesign style={{ left: 105, bottom: 12 }} name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.textoLinha}>__________________________________________________</Text>
            </View>

            <Modal
                onBackdropPress={() => setMostraEscolha(false)}
                isVisible={mostraEscolha}>
                <View style={styles.viewModal}>
                    <View style={styles.telaModal}>
                        <TouchableOpacity  style={{ right: 140 }} onPress={() => { setMostraEscolha(false) }}>
                            <EvilIcons name="chevron-down" size={50} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.textoPet}>Agendar</Text>

                        <TouchableOpacity onPress={AbrirTelaBanho} style={styles.botaoBanho}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}>Banho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={AbrirTelaPasseio} style={styles.botaoPasseio}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Passeio</Text>
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

                                <Text style={styles.textoEmpresa}>{item.empresa}, {item.cidade}</Text>
                                <Text style={styles.textoServico}>{item.servico}</Text>
                                <Text style={styles.textoDia}>{item.dia}</Text>
                                <Text style={styles.textoMes}>{item.mes}</Text>
                                <Text style={styles.textoHorario}>{item.horario}</Text>
                            
                                <Text style={styles.textoPreco}>{item.preco}</Text>

                            </View>
                        </TouchableOpacity>

                    )}
                />
            </View>


        </View>
    )
}