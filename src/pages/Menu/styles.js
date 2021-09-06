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
        top: hp ('6.5%'),
        color: 'black',
        
    },
    textoMenu:{
        left: wp('4%'),
        fontSize: wp ('7%'),
        fontWeight: 'bold',
        color: 'black',
        
    },
    botaoSair: {
        marginTop: hp ('28%')
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        right: wp ('27%'),
        bottom: hp ('10%')
    
    }
}) 

export {styles};