import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Alert, ActivityIndicator } from 'react-native';
import { styles, LoadingIcon } from '../Ajuda/styles.js';
import firebase from '../../../firebaseconection';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { render } from 'react-dom';

export default function Ajuda(){
        //Navegação entre telas

        const navigation = useNavigation();

        const AbrirConfig = () => {
            navigation.reset({
                routes: [{ name: 'Config' }]
            })
        }

        const AbrirRelatar = () => {
            navigation.reset({
                routes: [{ name: 'Relatar' }]
            })
        }


        return (
    
            <View style={styles.containerGeral}>
                <View style={styles.topSobreDiv}>
                    <TouchableOpacity style={styles.iconeVoltar} onPress={AbrirConfig}>
                        <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.txtAjuda}>Central de Ajuda</Text> 
                    </View>
                <View style={styles.divOpcoes}>
                <TouchableOpacity>
                        <Text style={styles.txtSuporte}>Suporte</Text>
                        <View style={styles.hdivider} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={AbrirRelatar}>
                        <Text style={styles.txtRelatar}>Relatar um problema</Text>
                        <View style={styles.hdivider} />
                </TouchableOpacity>    

                    </View>
                    </View>
    )
}