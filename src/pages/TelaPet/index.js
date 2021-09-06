import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../TelaPet/styles.js';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function TelaPet() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.acessoMenu} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={35} color="black" />
            </TouchableOpacity>
            <FontAwesome5 name="cat" size={200} color="black" />
            <Text style={styles.textoPrincipal}>Confira alguns dados sobre seu pet: </Text>



            <Text style={styles.textoNome}> 
            <MaterialCommunityIcons name="tag-text-outline" size={24} color="#FF3D00" /> Nome: 
            </Text>
            <Text style={styles.textoBanho}>
            <FontAwesome name="shower" size={24} color="#0066FF" /> Banhos tomados: </Text>
            <Text style={styles.textoPasseio}>
            <Foundation name="guide-dog" size={30} color="#8800FF" /> Passeios realizados: </Text>
            
            
             
        </SafeAreaView>
    )
}