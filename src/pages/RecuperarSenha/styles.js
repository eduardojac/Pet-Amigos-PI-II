import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E2E1',
        alignItems: 'center',
        
    },
    
    textoPet:{
        fontSize: hp('6.5%'),
        right: hp('6.5%'), 
        color: '#C41D00',
        fontWeight: 'bold',
        
    },
    textoAmigos:{
        fontSize: hp('6.5%'),
        left: hp('6%'),
        fontWeight: 'bold',
        bottom: 20
    },
    logo:{
        marginVertical: 10,
        bottom: 25
    }, 

    inputEmail:{
        backgroundColor: '#FFF',
        borderRadius: wp ('2%'),
        width: wp('90%'),
        height: hp('6.5%'),
        padding: 10,
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        
    },
    
    InformacaoEmail:{
        fontSize: hp('2.8%'),
        alignItems: 'center',
        padding: 10
    },
    
    botaoEnviarEmail:{
        marginVertical: 20,
        backgroundColor: '#C41D00',
        height: hp('6.5%'),
        width: wp('30%'),
        borderRadius: wp ('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderTopColor: '#000',
        borderRightColor: '#000'
    },

    textEnviarEmail:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: hp('2.5')
        
       
    },

    botaoJaTemCadastro:{
        top: wp('20%')
    }

})

export {styles};