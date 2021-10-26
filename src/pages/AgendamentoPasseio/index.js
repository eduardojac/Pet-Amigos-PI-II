import React, { useState, useEffect } from 'react'
import { View, Title, Text, Image, TouchableOpacity, Alert, Touchable, FlatList } from 'react-native'
import { styles } from '../Agendamento/styles'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default function AgendamentoPasseio({ route }) {

    // Navegação entre telas

    const navigation = useNavigation();

    const AbrirTelaPasseio = () => {
        navigation.reset({
            routes: [{ name: 'TelaPasseio' }]
        })
    }

    const AbrirAgenda = () => {
        navigation.reset({
            routes: [{ name: 'Agenda' }]
        })
    }

    // Ano, mês, dia e hora do Modal
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    const horas = ['8:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']

    const [anoSelecionado, setAnoSelecionado] = useState(0)
    const [mesSelecionado, setMesSelecionado] = useState(0)
    const [diaSelecionado, setDiaSelecionado] = useState(0)
    const [horaSelecionada, setHoraSelecionada] = useState(null)
    const [listaDias, setListaDias] = useState([]);
    const [listaHoras, setListaHoras] = useState([]);
    const [diaSemana, setDiaSemana] = useState([])

    useEffect(() => {
        if (diaSelecionado > 0) {
            let d = new Date(diaSelecionado, mesSelecionado, diaSelecionado);
            let year = d.getFullYear();
            let month = d.getMonth(); + 1;
            let day = d.getDate();
            month = month < 10 ? '0' + month : month;
            day = day < 10 ? '0' + day : day;
            let selDate = year + '-' + month + '-' + day;

            setListaHoras(horas);
        }
    }, [diaSelecionado]);


    useEffect(() => {
        let today = new Date();
        setAnoSelecionado(today.getFullYear());
        setMesSelecionado(today.getMonth());
        setDiaSelecionado(today.getDate());
    }, []);

    const voltarMes = () => {
        let mountDate = new Date(anoSelecionado, mesSelecionado, 1);
        mountDate.setMonth(mountDate.getMonth() - 1);
        setAnoSelecionado(mountDate.getFullYear());
        setMesSelecionado(mountDate.getMonth());
        setDiaSelecionado(1);
    }

    const avancarMes = () => {
        let mountDate = new Date(anoSelecionado, mesSelecionado, 1);
        mountDate.setMonth(mountDate.getMonth() + 1);
        setAnoSelecionado(mountDate.getFullYear());
        setMesSelecionado(mountDate.getMonth());
        setDiaSelecionado(1);
    }

    useEffect(() => {
        let daysInMonth = new Date(anoSelecionado, mesSelecionado + 1, 0).getDate();
        let newListaDias = [];

        for (let i = 1; i <= daysInMonth; i++) {
            let d = new Date(anoSelecionado, mesSelecionado, i);
            let year = d.getFullYear();
            let month = d.getMonth(); + 1;
            let day = d.getDate();
            month = month < 10 ? '0' + month : month;
            day = day < 10 ? '0' + day : day;
            let selDate = year + '-' + month + '-' + day;

            newListaDias.push({
                status: dias[d.getDay()] != 'Dom' ? true : false,
                weekday: dias[d.getDay()],
                number: i      
                
            })
            setDiaSemana(dias[d.getDay()])
            
        }

        setListaDias(newListaDias);
        setDiaSelecionado(1);
        setListaHoras([]);
        setHoraSelecionada(0);

    }, [mesSelecionado, anoSelecionado]);

    // Modal de Realizar Agendamento
    const [visible, setVisible] = useState(false);
    const [servico, setServico] = useState('')
    const [preco, setPreco] = useState('')

    const abrirModalRapido = () => {
        setVisible(true)
        setServico('Passeio Rápido')
        setPreco('R$ 60.00')
    }
    const abrirModalLongo = () => {
        setVisible(true)
        setServico('Passeio Longo')
        setPreco('R$ 90.00')
    }


    //Cadastrar 
    const cadastrarPet = async () => {

        if (horaSelecionada == "" ) {
            falhaAgendamento()
        } else {
            firebase.firestore().collection('agendamento').add({ servico: servico, empresa: route.params?.empresa, cidade: route.params?.cidade, mes: meses[mesSelecionado], dia: diaSelecionado, horario: horaSelecionada, preco: preco, user_id: user_id})    
            agendado()
            AbrirAgenda()

        }
    }
    const agendado = () =>
        Alert.alert("Cadastro realizado com sucesso!")

    const falhaAgendamento = () =>
        Alert.alert("Não foi possível realizar seu agendamento!",
            "Preencha um horário")


    const user_id = firebase.auth().currentUser.uid

    return (
        <View style={styles.container}>

            <View style={styles.container1}>
                <TouchableOpacity style={styles.botaoVoltar} onPress={AbrirTelaPasseio} >

                    <Ionicons name="arrow-back-circle-outline" size={50} color="black" />

                </TouchableOpacity>

                <Image style={styles.patinha} source={require('../../../assets/src/Anotar.png')} />

            </View>
            <View style={styles.container2}>

                <Modal
                    onBackdropPress={() => setVisible(false)}
                    isVisible={visible}>
                    <View style={styles.telamodal}>
                        <View style={styles.modal}>
                            <TouchableOpacity style={{ right: 140 }} onPress={() => { setVisible(false) }}>
                                <EvilIcons name="chevron-down" size={50} color="black" />
                            </TouchableOpacity>

                            <TouchableOpacity disabled={true} style={styles.boxServico}>
                                <Text style={{ fontWeight: 'bold' }}>  {servico}</Text>
                                <Text style={{ fontWeight: 'bold' }}>{preco}  </Text>
                            </TouchableOpacity>

                            <TouchableOpacity disabled={true} style={styles.boxDatas}>

                                <View style={styles.tamanhodata}>
                                    <TouchableOpacity onPress={voltarMes} style={styles.setaVoltar}>
                                        <Entypo name="chevron-left" size={24} color="black" />
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', bottom: 16 }}>{meses[mesSelecionado]} {anoSelecionado} </Text>
                                    <TouchableOpacity onPress={avancarMes} style={styles.setaAvancar}>
                                        <Entypo name="chevron-right" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>

                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    
                                    {listaDias.map((item, key) => (
                                        
                                        <TouchableOpacity
                                            key={key}
                                            
                                            onPress={() => item.status ? setDiaSelecionado(item.number) : null}
                                            style={{
                                                opacity: item.status ? 1 : 0.5,
                                                backgroundColor: item.number === diaSelecionado ? '#FF5700' : '#FFFFFF',
                                                width: 45,
                                                borderRadius: 10,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            
                                                
                                            }}
                                        >
                                            <Text style={styles.diaSemana}>{item.weekday}</Text>
                                            <Text style={styles.numero}>{item.number}</Text>
                                            
                                        </TouchableOpacity>
                                    ))}

                                </ScrollView>


                            </TouchableOpacity>

                            {listaHoras.length > 0 &&
                                <TouchableOpacity disabled={true} style={styles.boxHorarios}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        {listaHoras.map((item, key) => (
                                            <TouchableOpacity
                                                key={key}
                                                onPress={() => setHoraSelecionada(item)}
                                                
                                                style={{
                                                    backgroundColor: item === horaSelecionada ? '#FF5700' : '#FFFFFF',
                                                    width: 75,
                                                    height: 30,
                                                    borderRadius: 10,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    top: 7
                                                }}
                                            >
                                                <Text style={styles.listaHorarios}>{item}</Text>

                                            </TouchableOpacity>
                                        ))}
                                    </ScrollView>
                                </TouchableOpacity>
                            }

                            <TouchableOpacity style={styles.boxAgendar} onPress={cadastrarPet}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Agendar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>

                <Image style={styles.avatarBanho} source={require('../../../assets/src/Dog.png')} />
                <Text style={styles.nomeEmpresa}>{route.params?.empresa}</Text>
                <Text style={styles.dadosEmpresa}>{route.params?.cidade} {route.params?.telefone}</Text>
                <Text style={styles.divisao}>__________________________________________________</Text>
                <Text style={styles.escolha}>Escolha seu serviço</Text>

                <Text style={styles.textBanho}>Passeio Rápido</Text>
                <TouchableOpacity style={styles.btnBanho} onPress={abrirModalRapido}>
                    <Text style={styles.txtBanho}>R$ 60.00</Text>
                </TouchableOpacity>

                <Text style={styles.textTosa}>Passeio Longo</Text>
                <TouchableOpacity style={styles.btnTosa} onPress={abrirModalLongo}>
                    <Text style={styles.txtTosa}>R$ 90.00</Text>
                </TouchableOpacity>


            </View>


        </View>

    )
}