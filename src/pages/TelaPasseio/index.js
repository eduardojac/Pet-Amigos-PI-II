import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { styles } from '../TelaPasseio/styles.js';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import firebase from '../../../firebaseconection';
import { firestore } from 'firebase';

export default function TelaPasseio() {

    //Navegação entre telas
    const navigation = useNavigation();

    const AbrirHome = () => {
        navigation.reset({
            routes: [{ name: 'Home' }]
        })
    }

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirHome}>
            <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
            </TouchableOpacity>

            <TextInput style={styles.inputLocal} placeholder='Brasília DF'></TextInput>

            <MaterialIcons style={styles.iconeLocal} name="my-location" size={24} color="black" />
            <Text style={styles.texto}>Vamos passear</Text>

            <Text style={styles.texto}>com seu pet!</Text>

            <TextInput style={styles.inputPesquisar} placeholder='Pesquise pelo seu parceiro favorito'></TextInput>

            <AntDesign style={styles.iconePesquisa} name="search1" size={24} color="black" />

            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
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
