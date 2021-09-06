/*import { StatusBar } from 'expo-status-bar';*/
import React from 'react';
import styled from 'styled-components/native';




export const Container = styled.SafeAreaView`
         flex: 1;
         background-color: #C41D00;
         align-items: center;
         justify-content: center;

`;


export const Logo = styled.SafeAreaView`
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 28%;
        margin-top: 120px;
        margin-right: 28px;
        
`;

export const LoadingIcon = styled.ActivityIndicator`
        margin-top: 50px;
        margin-bottom: 20px;
        padding-top: 10px;
`;

export const TextPet = styled.Text`
        color: #000;
        font-weight: bold;
        font-size: 40px;
        padding-top: 40px;
        margin-top: 35px;
        margin-right: 10px;
      
`;

export const TextAmigos = styled.Text`
        color: #FFF;
        font-weight: bold;
        text-align: right;
        padding-left: 150px;
        font-size: 35px; 
`;

 export const TextArroba = styled.Text`
        color: #FFF;
        font-weight: bold;
        font-size: 15px;
        padding-top:10px;
        padding-bottom: 5px;
        margin-bottom: 15px;;
        justify-content: center;
        
`; 




