import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import MapView from 'react-native-maps';
import { styles } from '../Mapa/styles.js';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { StyleSheet } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';


export default function Mapa() {

    const navigation = useNavigation();
    const AbrirTelaBanho = () => {
        navigation.reset({
            routes: [{ name: 'TelaBanho' }]
        })
    }


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
        });
    }, []);


    const ConfirmarLocal = () => {
        alert('Que pressa é essa ? Relaxa.. Cena dos próximos capítulos!')
    }


    return (
        <View style={{backgroundColor: 'white', alignItems: 'center',}}>

            <Text style={styles.textoIndicar}>INDICAR LOCAL NO MAPA</Text>
            <Text style={styles.textoIndicar}></Text>
            <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirTelaBanho}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <MapView style={{ width: '100%', height: '100%' }} region={regiao} showsUserLocation>

            </MapView>

            <TouchableOpacity style={styles.botaoConfirmar} onPress={ConfirmarLocal}>
                <Text style={{ fontWeight: 'bold' }}>CONFIRMAR LOCAL</Text>
            </TouchableOpacity>
        </View >


    );
}
