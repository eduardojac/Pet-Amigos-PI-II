import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
    
    },
    pet:{
        
        fontSize: hp('6.5%'),
        right: hp('5%'), 
        color: '#FF5700',
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
        
        
    },

    inputSenha:{
        backgroundColor: '#FFF',
        borderRadius: wp ('2%'),
        width: wp('90%'),
        height: hp('6.5%'),
        padding: 10,
        marginVertical: 10,
    },

    botaoAcessar:{
        marginVertical: 20,
        backgroundColor: '#FF5700',
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
        top: hp ('2%')
    },
    
    textBotaoAcessar:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize: 17,
        
    },
    botaoEsqueceuSenha:{
        top: hp('12%')
    },
    
    botaoCadastro:{
        top: hp('7,6%')
    },
    

})

    export {styles};