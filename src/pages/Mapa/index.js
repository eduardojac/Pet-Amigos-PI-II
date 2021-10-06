import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { styles } from '../Mapa/styles.js';
import {Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';



export default function Mapa() {

    const navigation = useNavigation();
    const AbrirTelaBanho = () => {
        navigation.reset({
            routes: [{ name: 'TelaBanho' }]
        })
    }


    let [regiao,setRegiao] = useState({

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
        <View style={styles.container}>

            

            <MapView style={{width: '100%' , height: '100%'}} region={regiao} showsUserLocation>
                <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirTelaBanho}>
                    <Ionicons name="arrow-back-circle-outline" size={50} color="grey" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoConfirmar} onPress={ConfirmarLocal} >
                <Text style={styles.textBotaoConfirmar}>CONFIRMAR LOCAL</Text>
                </TouchableOpacity>
            

            </MapView> 

        </View>
    
    ); 
}