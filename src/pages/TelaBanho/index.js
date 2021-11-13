import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, FlatList, PermissionsAndroid } from 'react-native';
import { styles } from '../TelaBanho/styles.js';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import firebase from '../../../firebaseconection';
import { firestore } from 'firebase';
import * as Location from 'expo-location';

//import Geocoder from 'react-native-geocoding';
//import { ListItem } from 'react-native-elements';



//import { request, PERMISSIONS } from 'react-native-permissions';
//import Geolocation from '@react-native-community/geolocation';
// import { Platform } from 'react-native';


export default function TelaBanho({ route }) {

    //Navegação entre telas
    const navigation = useNavigation();

    const AbrirAgendamento = (empresa, cidade, telefone, foto) => {
        navigation.navigate('Agendamento', {
            empresa: empresa,
            cidade: cidade,
            telefone: telefone,
            foto: foto
        })
    }
    const AbrirHome = () => {
        navigation.reset({
            routes: [{ name: 'Home' }]
        })
    }

    // Pegar o nome do usuário
    const [empresa, setEmpresa] = useState('')
    const [dados, setDados] = useState('')
    const [cidade, setCidade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [data, setData] = useState('')

    //Exibir lista de parceiros cadastrados
    const ListaParceiros = () => {
        firebase.firestore().collection('parceiros')
        parceiros.get().then((snapshot) => {
            snapshot.docs.forEach(doc => {

            })
        })
    }
    const ref = firebase.firestore().collection('parceiros');
    useEffect(() => {
        ref.onSnapshot(querySnapshot => {
            const data = []
            querySnapshot.forEach(doc => {
                data.push({
                    ...doc.data(),
                    key: doc.id
                })
            })
            setData(data)
            setOriginalData(data)

        })
        return;
    }, [])

    // Filtro de parceiros
    const [originalData, setOriginalData] = useState([])

    function search(s) {
        let arr = JSON.parse(JSON.stringify(originalData));
        setData(arr.filter((d) => d.empresa.toLowerCase().includes(s)))
    }

    return (

        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirHome}>
                <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
            </TouchableOpacity>

            <Text style={styles.texto}>É hora de dar banho</Text>

            <Text style={styles.texto}>no seu pet!</Text>

            <TextInput style={styles.inputPesquisar} placeholder={'Pesquise pelo seu PetShop favorito'} onChangeText={(s) => search(s)} autoCapitalize="none"/>

            <AntDesign style={styles.iconePesquisa} name="search1" size={24} color="black" />

            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}

                renderItem={({ item }) => (


                    <TouchableOpacity onPress={() => AbrirAgendamento(item.empresa, item.cidade, item.telefone, item.foto)}>

                        <View style={styles.boxLista}>
                            <Image style={styles.avatarBanho} source={{ uri: item.foto }} />
                            <Text style={{ color: 'black', fontSize: 25, left: 35, bottom: 65, fontWeight: 'bold', color: '#C41D00' }}>{item.empresa}</Text>
                            <Text style={{ color: 'black', fontSize: 15, left: 45, bottom: 50, fontWeight: 'bold' }}>{item.cidade} - {item.telefone}</Text>
                        </View>
                    </TouchableOpacity>

                )}
            />

        </SafeAreaView>

    )
}

    // pegar localização do usuário


    /* 
     const [coords, setCoords] = useState(null);
 
 
     const pegarLoc = async () => {
         alert('Aceitar Localizção');
         
 
 
         if (status !== 'granted') {
             setErrorMsg('Permissão negada para acessar a Localização!')
             return;
         }
 
         let location = await Location.getLastKnownPositionAsync({});
         setCoords(location.coords.latitude, location.coords.longitude);*/

    /*
    const pegarLoc = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            alert('Permissão negada para acessar a Localização!');
            return;
        } else {
            navigation.navigate('Mapa');
        }     

    } 
*/