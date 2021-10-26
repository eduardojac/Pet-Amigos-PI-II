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

    botaoJaTemCadastro:{
        top: wp('20%')
    },
    informacaoEmail:{
        fontSize:hp('2.5%'),
        fontWeight: 'bold',
    }

})

export {styles};