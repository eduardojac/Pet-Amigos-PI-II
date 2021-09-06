import React, { useEffect } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { Container, Logo, LoadingIcon, TextPet, TextAmigos, TextArroba } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

export default () => {

  //Tela de loading
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token')
      if (token !== null) {
        // validar
      } else {
        navigation.navigate('FazerLogin')
      }
    }
    checkToken();


  }, []);


  return (

    <Container>


      <Logo>
        <Image
          source={require('../../../assets/src/patinha.png')} />
      </Logo>


      <TextPet>
        <Text>Pet</Text>
      </TextPet>


      <TextAmigos>
        <Text>Amigos</Text>
      </TextAmigos>


      <LoadingIcon size="large" color="#FFFFFF" />

      <TextArroba>
        <Text>Cuidando do seu pet!</Text>
      </TextArroba>

    </Container>

  );
}


