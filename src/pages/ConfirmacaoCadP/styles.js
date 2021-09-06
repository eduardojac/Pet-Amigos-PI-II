import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        
    },
    
    textoPet:{
        fontSize: hp('6.5%'),
        right: hp('6.5%'), 
        color: '#FF5700',
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
    }

})

export {styles};