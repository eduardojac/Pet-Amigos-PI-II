import React, { useState, useEffect } from 'react';
//import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../Home/styles'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Home() {

    const navigation = useNavigation();

    const AbrirFazerLogin = () => {
        navigation.reset({
            routes: [{ name: 'FazerLogin' }]
        })
    }

    const AbrirTelaBanho = () => {
        navigation.reset({
            routes: [{ name: 'TelaBanho' }]
        })
    }

    const AbrirTelaPasseio = () => {
        navigation.reset({
            routes: [{ name: 'TelaPasseio' }]
        })
    }
    const AbrirTelaPet = () => {
        navigation.reset({
            routes: [{ name: 'TelaPet' }]
        })
    }

    return (


        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.ola}>O que deseja,</Text>
                <Text style={styles.papai}>Papai de Pet</Text>


                <Text style={styles.pet}>Pet</Text>

                <Text style={styles.amigos}>Amigos</Text>

                <TouchableOpacity style={styles.botaoBanho} onPress={AbrirTelaBanho}>
                    <Text style={styles.textBanho}>BANHO</Text>
                    <FontAwesome name="bathtub" size={30} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoPasseio} onPress={AbrirTelaPasseio}>
                    <Text style={styles.textPasseio}>PASSEIO</Text>
                    <Foundation name="guide-dog" size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoMeuPet} onPress={AbrirTelaPet}>
                    <Text style={styles.textMeuPet}>MEU PET</Text>
                    <MaterialIcons name="pets" size={30} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoSair} onPress={AbrirFazerLogin}>
                    <Text style={styles.textSair}>SAIR</Text>
                    <MaterialIcons name="logout" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.acessoMenu} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={35} color="black" />
            </TouchableOpacity>


        </SafeAreaView>

    )
}