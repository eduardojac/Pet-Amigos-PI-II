import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../TelaPasseio/styles.js';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 




export default function TelaPasseio() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.acessoMenu} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={35} color="black" />
            </TouchableOpacity>


            <TextInput style={styles.inputLocal} placeholder='Brasília DF'>

            </TextInput>
            <MaterialIcons style={styles.iconeLocal} name="my-location" size={24} color="black" />
            <Text style={styles.texto}>Vamos passear com seu pet, Fulano de Tal</Text>

            <TextInput style={styles.inputPesquisar} placeholder='Encontre seu guia favorito'></TextInput>
            <AntDesign style={styles.iconePesquisa} name="search1" size={24} color="black" />
            <Foundation style={styles.iconePasseio} name="guide-dog" size={80} color="black" />
        </SafeAreaView>
    )
}