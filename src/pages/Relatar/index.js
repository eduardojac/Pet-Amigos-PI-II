import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Alert, ActivityIndicator } from 'react-native';
import { styles, LoadingIcon } from '../Relatar/styles.js';
import firebase from '../../../firebaseconection';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { render } from 'react-dom';

export default function Relatar() {

    //Navegação entre telas
    const AbrirHome = () => {
        navigation.reset({
            routes: [{ name: 'Home' }]
        })
    }


    const navigation = useNavigation();

    const AbrirAjuda = () => {
        navigation.reset({
            routes: [{ name: 'Ajuda' }]
        })
    }

    return (
        <View style={styles.containerGeral}>
            <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirAjuda}>
                <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
            </TouchableOpacity>
            <View style={styles.inputArea}>
                <TextInput style={styles.inputRelatar} placeholder='Descreva resumidamente, o que está acontecendo?'>
                </TextInput>
            </View>
            <TouchableOpacity style={styles.botaoEnviar} onPress={AbrirHome}>
                <Text style={styles.textBotaoEnviar}>ENVIAR</Text>
            </TouchableOpacity>
        </View>
    )
}