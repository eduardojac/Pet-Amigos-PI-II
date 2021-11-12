import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Alert, ActivityIndicator } from 'react-native';
import { styles, LoadingIcon } from '../Sobre/styles.js';
import firebase from '../../../firebaseconection';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { render } from 'react-dom';

export default function Sobre() {
    //Navegação entre telas

    const navigation = useNavigation();

    const AbrirConfig = () => {
        navigation.reset({
            routes: [{ name: 'Config' }]
        })
    }
    return (

        <View style={styles.containerGeral}>
            <View style={styles.topSobreDiv}>
                <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirConfig}>
                    <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
                </TouchableOpacity>
                <Text style={styles.txtSobre}>Sobre</Text>
            </View>
            <View style={styles.containerTermos}>
                <View >
                    <Text style={styles.txtTermos}>Termos de Uso</Text>
                </View>
                <View>
                    <Text style={styles.conteudoBV}>Bem-vindo(a) ao PetAmigos!</Text>
                    <Text style={styles.conteudoTermos}> Estes Termos de Uso governam seu uso no aplicativo. Ao criar uma conta ou utilizar o PetAmigos, o usuário concorda com os termos propostos.</Text>
                </View>
            </View>
            <View style={styles.hdivider}></View>
            <View style={styles.containerServicos}>
                <View>
                    <Text style={styles.txtServicos}>Serviços</Text>
                </View>
                <View>
                    <Text style={styles.conteudoServicos}>Concordamos em fornecer um meio prático de comunicação entre cliente e empresa cadastrada em nosso aplicativo. Os serviços dependem do que cada empresa fornece para o seu pet e com supervisão de nossa equipe para que o usuário confie no serviço escolhido. Oferecemos segurança e todos os meios de contato para que nosso suporte juntamente com a prestadora de serviços resolvam da melhor maneira possível dúvidas ou questionamentos.</Text>
                </View>
            </View>
        </View>
    )
}