import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, } from 'react-native';
import MapView from 'react-native-maps';
import { styles } from '../Mapa/styles.js';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { StyleSheet } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import Modal from 'react-native-modal';
import firebase from '../../../firebaseconection';




export default function Mapa() {

    const navigation = useNavigation();


    const AbrirTelaHome = () => {
        navigation.reset({
            routes: [{ name: 'Home' }]
        })
    }

    const [coords, setCoords] = useState()


    let [regiao, setRegiao] = useState({

        latitude: -23.4422149,
        longitude: -46.92355431,
        latitudeDelta: 0.014,
        longitudeDelta: 0.014

    });


    useEffect(() => {

        Location.installWebGeolocationPolyfill();
        navigator.geolocation.getCurrentPosition(posicao => {
            setRegiao({
                latitude: posicao.coords.latitude,
                longitude: posicao.coords.longitude,
                latitudeDelta: 0.014,
                longitudeDelta: 0.014
            })
            setCoords(posicao.coords.latitude + "," + posicao.coords.longitude)
        });
    }, []);


    const [mostrarModal, setMostrarModal] = useState(false);

    const ConfirmarLocal = () => {
        
        setMostrarModal(true)

    
        
    }

    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [pontRef, setPontRef] = useState('');
    const [bairro, setBairro] = useState('');

    const onChangeEndereco = (txtEndereco) => {
        setEndereco(txtEndereco)
    }

    const onChangeNumero = (txtNumero) => {
        setNumero(txtNumero)
    }

    const onChangeComplemento = (txtComplemento) => {
        setComplemento(txtComplemento)
    }

    const onChangePontRef = (txtPontRef) => {
        setPontRef(txtPontRef)
    }

    const onChangeBairro = (txtBairro) => {
        setBairro(txtBairro)
    }

    

    const preencherLoc = (endereco, numero, complemento, pontRef, bairro) => {

        if (endereco == "" || numero == "" || complemento == "") {
            alert('Preencha os campos obrigatórios!');
        } else {

            navigation.navigate('Home', {
                endereco: endereco,
                numero: numero,
                complemento: complemento,
                pontRef: pontRef,
                bairro: bairro
            })
            console.log(coords)
            gravarLocFirebase()
           setMostrarModal(false);


        }
             
    }

    // Gravar localização no banco

    const user_id = firebase.auth().currentUser.uid
    const [id, setId] = useState('')

    firebase.firestore().collection('clientes').where("id", "==", user_id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data().nome);
                setId(doc.id)

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    const gravarLocFirebase = () => { 
        firebase.firestore().collection('clientes').doc(id).update({ localizacao: coords, endereco: endereco, numero: numero, complemento: complemento });
    } 

    return (
        <View style={{backgroundColor: 'white', alignItems: 'center',}}>

            <Text style={styles.textoIndicar}>INDICAR LOCAL NO MAPA</Text>
            <Text style={styles.textoIndicar}></Text>
            <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirTelaHome}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <MapView style={{ width: '100%', height: '100%' }} region={regiao} showsUserLocation>

            </MapView>

            <TouchableOpacity style={styles.botaoConfirmar} onPress={ConfirmarLocal}>
                <Text style={styles.textBotaoConfirmar}>CONFIRMAR LOCAL</Text>
            </TouchableOpacity>

            
            <Modal
                    onBackdropPress={() => setMostrarModal(false)}
                    isVisible={mostrarModal}
                    >

                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: '#FFFFFF',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    width: '110.3%',
                    right: '5.5%',
                    top: '20%'
                    }} >
                        
                </View> 

                
                    
                <Text style ={{bottom: '55%'}}>
                   Esse é o endereço do local indicado no mapa.
               </Text>  
               <Text style ={{bottom: '55%'}}>
                   Você pode editar o texto, se necessário. 
               </Text>       
                
                
                <View style={styles.inputArea} >
                    
                
                <TextInput style={styles.inputEndereco} placeholder='Endereço' placeholderTextColor='#808080' value={endereco} onChangeText={txtEndereco => onChangeEndereco(txtEndereco)}></TextInput>

                <TextInput style={styles.inputNumero} placeholder='Número' placeholderTextColor='#808080' value={numero} onChangeText={txtNumero => onChangeNumero(txtNumero)}></TextInput>

                <TextInput style={styles.inputComplemento} placeholder='Complemento' placeholderTextColor='#808080' value={complemento} onChangeText={txtComplemento => onChangeComplemento(txtComplemento)}></TextInput>

                <TextInput style={styles.inputPontoRef} placeholder='Ponto de Referência (opcional)' placeholderTextColor='#808080' value={pontRef} onChangeText={txtPontRef => onChangePontRef(txtPontRef)}></TextInput>

                <TextInput style={styles.inputBairro} placeholder='Bairro' placeholderTextColor='#808080' value={bairro} onChangeText={txtBairro => onChangeBairro(txtBairro)}></TextInput>



                <TouchableOpacity style={styles.botaoContinuar} onPress={() => preencherLoc(endereco, numero, complemento)}>
                <Text style= {styles.textContinuar}>CONTINUAR</Text>
                </TouchableOpacity>

                </View>

                
                
                
                
                
                


                
                 
                    
            </Modal>
            
        </View >


    );
}
