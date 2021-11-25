import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Alert, ActivityIndicator } from 'react-native';
import { styles, LoadingIcon } from '../Config/styles.js';
import firebase from '../../../firebaseconection';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { render } from 'react-dom';
import { Appearance } from 'react-native';

export default function Config() {

    //Navegação entre telas
    const navigation = useNavigation();

    const adaptarTema = () => {
        const colorScheme = Appearance.getColorScheme();
        if (colorScheme === 'dark') {
            useColorScheme();
        }
    }

    const AbrirHome = () => {
        navigation.reset({
            routes: [{ name: 'Home' }]
        })
    }

    const AbrirAjuda = () => {
        navigation.reset({
            routes: [{ name: 'Ajuda' }]
        })
    }

    const AbrirSobre = () => {
        navigation.reset({
            routes: [{ name: 'Sobre' }]
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.topConfigDiv}>
                <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirHome}>
                    <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
                </TouchableOpacity>
                <Text style={styles.txtConfig}>Configurações</Text>
            </View>
            <View>
                <View style={styles.divOpcoes}>
                    <TouchableOpacity>
                        <Text style={styles.txtAparencia}>Idioma (Português Brasil)</Text>
                        <View style={styles.hdivider} />
                    </TouchableOpacity>
                    <Text style={styles.txtOpcoes}>Versão  1.0</Text>
                    <View style={styles.hdivider} />
                    <TouchableOpacity>
                        <Text style={styles.txtAjuda} onPress={AbrirAjuda}>Ajuda</Text>
                        <View style={styles.hdivider} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text onPress={AbrirSobre} style={styles.txtOpcoes}>Sobre</Text>
                        <View style={styles.hdivider} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}