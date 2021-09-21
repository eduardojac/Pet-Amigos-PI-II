import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { styles } from '../TelaBanho/styles.js';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import firebase from '../../../firebaseconection';
import { firestore } from 'firebase';
//import { request, PERMISSIONS } from 'react-native-permissions';
//import Geolocation from '@react-native-community/geolocation';
// import { Platform } from 'react-native';


export default function TelaBanho() {

    //Navegação entre telas
    const navigation = useNavigation();

    const AbrirAgendamento = (empresa, cidade, telefone) => {
        navigation.navigate('Agendamento', {
        empresa: empresa, 
        cidade: cidade, 
        telefone: telefone
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

        })
        return;
    }, [])


    // Filtro das empresas
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(data);

    useEffect(() => {
        if(searchText === ''){
            setList(data);
        } else {
            setList(
                data.filter( item => {
                    if(item.empresa.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
                        return true;
                    } else{
                        return false;
                    }
                })
            );
        } 
    }, [searchText]);

    // pegar localização do usuário
   // const [coords, setCoords] = useState(null );

    /*const pegarLocalizacao = async () => {
        setCoords(null);
        let result = await request(

            Platform.OS === 'ios' ? 
            PERMISSIONS.IOS.LOCATION_ALWAYS 
            :
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        ); 

        if (result == 'granted') {
            Geolocation.getCurrentPosition((info) => {
                setCoords(info.coords);
            });
        } 
 

    } */

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirHome}>
            <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
            </TouchableOpacity>

            <TextInput style={styles.inputLocal} placeholder='Onde você está?'></TextInput>

            <MaterialIcons style={styles.iconeLocal} name="my-location" size={24} color="black"/>
            <Text style={styles.texto}>É hora de dar banho</Text>

            <Text style={styles.texto}>no seu pet!</Text>

            <TextInput style={styles.inputPesquisar} placeholder={'Pesquise pelo seu PetShop favorito'} value={searchText} onChangeText={(t) => setSearchText(t)}/>

            <AntDesign style={styles.iconePesquisa} name="search1" size={24} color="black" />
            
            <FlatList
                showsVerticalScrollIndicator={false}
                data={list}
                renderItem={({ item }) => (
                
                    <TouchableOpacity onPress={() => AbrirAgendamento(item.empresa, item.cidade, item.telefone)}>
                        
                        <View style={styles.boxLista}>

                            <Text style={{ color: 'black', fontSize: 25, left: 35, top: 30, fontWeight: 'bold', color: '#FF5700' }}>{item.empresa}</Text>

                            <Text style={{ color: 'black', fontSize: 15, left: 45, top: 40, fontWeight: 'bold' }}>{item.cidade} - {item.telefone}</Text>

                            <Image style={styles.avatarBanho} source={require('../../../assets/src/banhoDog.png')} />

                        </View>
                    </TouchableOpacity>
                    
                )}
            />
            
            
        </SafeAreaView>
    )
}
