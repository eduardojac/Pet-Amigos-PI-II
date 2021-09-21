import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E2E1',
        alignItems: 'center',
        justifyContent: 'center'
    
    },
    pet:{
        
        fontSize: hp('6.5%'),
        left: hp('5.5%'), 
        color: '#C41D00',
        fontWeight: 'bold',
        
    },
    amigos:{
       
        fontSize: hp('6.3%'),
        left: hp('9.4%'),
        fontWeight: 'bold',
        bottom: 14,

    },
    logo:{
        marginVertical: 10,
        bottom: 25
    },  

    
    botaoCliente: {

        backgroundColor: '#C41D00',
        height: hp('20%'),
        width: wp ('28%'),
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        borderRadius: wp ('2%'),
        fontSize: 18,
        right: 70,
        color: '#FFF',
        top: hp ('7%'),
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,

        
    },
    botaoParceiro:{
        backgroundColor: '#C41D00',
        height: hp('20%'),
        width: wp ('28%'),
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        borderRadius: wp ('2%'),
        fontSize: 18,
        color: '#FFF',
        left: hp ('10%'),
        bottom: hp ('13.0%'),
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        

    },
    textBotaoCliente:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize: hp('2.6%'),
    },
    textBotaoParceiro:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize: hp('2.6%'),
    },

    botaoJaTenhoCadastro:{
        bottom: ('4%'),
    },

})

export {styles};