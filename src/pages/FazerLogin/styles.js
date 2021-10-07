import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {StyleSheet} from 'react-native'
 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E2E1',
        alignItems: 'center',
    
    },
    pet:{
        
        fontSize: hp('6.5%'),
        right: hp('5%'), 
        color: '#C41D00',
        fontWeight: 'bold',
        
    },
    amigos:{
       
        fontSize: hp('6.5%'),
        left: hp('8.2%'),
        fontWeight: 'bold',
        bottom: 20     
    },
    logo:{
        marginVertical: 10,
        bottom: 25
    },
    
    inputLogin:{
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

    inputSenha:{
        backgroundColor: '#FFF',
        borderRadius: wp ('2%'),
        width: wp('90%'),
        height: hp('6.5%'),
        padding: 10,
        marginVertical: 10,
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
    },

    botaoAcessar:{
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
        borderRightColor: '#000',
        bottom: hp ('1%')
    },
    
    textBotaoAcessar:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize: 17,
        
    },
    botaoEsqueceuSenha:{
        top: hp('6%')
    },
    
    botaoCadastro:{
        top: hp('2%')
    },
    iconeEmail:{
        right: wp('9%'),
        top: hp('2%')
    },
    iconeOlho:{
        right: wp('9%'),
        top: hp('3.2%')
    },
    inputArea:{
        flexDirection: 'row',
        width: '90%',
        
    }

})

    export {styles};