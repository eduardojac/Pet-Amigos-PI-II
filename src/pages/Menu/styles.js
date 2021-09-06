import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    viewPerfil: {
        flex: 0.3,
        backgroundColor: '#FF5700',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoUsuario: {
        left: wp ('8%'),
        fontSize: wp ('5.5%'),
        fontWeight: 'bold',
        color: '#FFF'

    },
    botaoSair: {
        marginTop: hp ('28%')
    }
    
}) 

export {styles};