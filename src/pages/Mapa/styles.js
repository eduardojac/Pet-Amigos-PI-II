import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  
    container:{
        flex: 1,
    },

    iconeVoltar:{
        right: wp('45%'),
        bottom: hp('2.8%')
    
    },

    botaoConfirmar:{
        backgroundColor: '#ff6347',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: hp('40%'),
        height: hp('7%'),
        width: '90%',
        borderRadius: wp ('6%'),
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderTopColor: 'white',
        borderRightColor: 'white',
        
        

        
    },

    textBotaoConfirmar:{
        color:'black',
        fontSize: 17,
        bottom: 30
        
        
    },

    indicarLocal:{
        backgroundColor: 'black',
        
    },
    textoIndicar:{
        top: hp('3.5%'),
        fontSize: 15,
        fontWeight: 'bold'
    },
    inputArea:{
        flexDirection: 'row',
        width: '90%',
        
    }, 
    inputEndereco:{
        backgroundColor: '#FFFFFF',
        borderRadius: wp ('3%'),
        width: wp('90%'),
        height: hp('8%'),
        padding: 10,
        borderBottomWidth: 1, 
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        bottom: '100%'
    },

    inputNumero:{
        backgroundColor: '#FFFFFF',
        borderRadius: wp ('3%'),
        width: wp('30%'),
        height: hp('8%'),
        padding: 10,
        borderBottomWidth: 1, 
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        bottom: '75%',
        right: wp ('90%')
    },

    inputComplemento:{
        backgroundColor: '#FFFFFF',
        borderRadius: wp ('3%'),
        width: wp('55%'),
        height: hp('8%'),
        padding: 10,
        borderBottomWidth: 1, 
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        bottom: '75%',
        right: wp ('85%')
    },

    inputPontoRef:{
        backgroundColor: '#FFFFFF',
        borderRadius: wp ('3%'),
        width: wp('90%'),
        height: hp('8%'),
        padding: 10,
        borderBottomWidth: 1, 
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        bottom: '50%',
        right: wp ('175%')
        
    },
    
    inputBairro:{
        backgroundColor: '#FFFFFF',
        borderRadius: wp ('3%'),
        width: wp('90%'),
        height: hp('8%'),
        padding: 10,
        borderBottomWidth: 1, 
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        bottom: '25%',
        right: wp ('265%')
    },

    botaoContinuar:{
        backgroundColor: '#ff6347',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('60%'),
        height: hp('7%'),
        borderRadius: wp ('6%'),
        borderBottomWidth: 1, 
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        right: wp ('340%')       
    }
})

export {styles};

/*backgroundColor: '#C41D00',
        
        justifyContent: 'center',
        alignItems: 'center',
        
        top: hp ('74.5%'),*/