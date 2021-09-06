import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../TelaBanho/styles.js';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 



export default function TelaBanho() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            
            <TouchableOpacity style={styles.acessoMenu} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={35} color="black" />
            </TouchableOpacity>


            <TextInput style={styles.inputLocal} placeholder='Brasília DF'>

            </TextInput>
            <MaterialIcons style={styles.iconeLocal} name="my-location" size={24} color="black" />
            <Text style={styles.texto}>É hora de dar banho no seu pet, Fulano de Tal</Text>

            <TextInput style={styles.inputPesquisar} placeholder='Pesquise pelo seu PetShop favorito'></TextInput>
            <AntDesign style={styles.iconePesquisa} name="search1" size={24} color="black" />
            <FontAwesome style={styles.iconeBanho} name="shower" size={50} color="black"/>
        </SafeAreaView>
    )
}
