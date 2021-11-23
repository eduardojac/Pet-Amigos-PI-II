import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    viewPerfil: {
        flex: 0.3,
        backgroundColor: '#C41D00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoUsuario: {
        fontSize: wp ('4.5%'),
        fontWeight: 'bold',
        color: '#FFF', 
        top: hp ('8.5%'),
        color: 'black',
        
    },
    textoMenu:{
        left: wp('9%'),
        fontSize: wp ('7%'),
        top: hp ('6%'),
        fontWeight: 'bold',
        color: 'black',
        
    },
    botaoSair: {
        marginTop: hp ('37%')
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        right: wp ('24%'),
        bottom: hp ('2%'),
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
    },
    drawerGeral:{
        backgroundColor: '#E1E2E1',
    },

}) 

export {styles};