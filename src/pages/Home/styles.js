import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E1E2E1',
        alignItems: 'center',
    },

    ola:{
        fontSize: hp('3.5%'),
        //alignItems: 'center',
        padding: 10,
        top:hp('25%')
    },

    papai:{
        fontSize: hp('3.5%'),
        alignItems: 'center',
        padding: 10,
        top:hp('22.5%'),
        left:hp('5%')
    },

    pet:{    
        fontSize: hp('6.5%'),
        right: hp('0.2%'), 
        color: '#C41D00',
        fontWeight: 'bold',
        bottom:hp('7%')
        
    },
    amigos:{
        fontSize: hp('6.5%'),
        left: hp('6.0%'),
        fontWeight: 'bold',
        bottom: hp('8.5%')     
    },

    botaoBanho:{
        backgroundColor:'#C41D00',   
        width: wp('35%'),
        right:hp('9%'),
        borderRadius: 7,
        height: hp('16%'),
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderTopColor: '#000',
        borderRightColor: '#000',
        top: hp('10%')
    },

    textBanho:{
        fontWeight:'bold',
        color:'#FFF',
        fontSize:hp('3.3%'),
        padding: hp('1%')
    },

    botaoPasseio:{
        backgroundColor:'#C41D00',
        width: wp('35%'),
        left:hp('15%'),
        borderRadius: 7,
        height: hp('16%'),
        alignItems: 'center',
        justifyContent:'center',
        bottom:hp('2%'),
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderTopColor: '#000',
        borderRightColor: '#000',
        bottom: hp('5.8%')
    },

    textPasseio:{
        fontWeight:'bold',
        color:'#FFF',
        fontSize:hp('3.3%'),
        padding: hp('1%')
    },

    botaoMeuPet:{
        backgroundColor:'#C41D00',
        width: wp('35%'),
        right:hp('9%'),
        borderRadius: 7,
        height: hp('16%'),
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderTopColor: '#000',
        borderRightColor: '#000',
    },

    textMeuPet:{
        fontWeight:'bold',
        color:'#FFF',
        fontSize:hp('3.3%'),
        padding: hp('1%')
    },

    botaoSair:{
        backgroundColor:'#C41D00',
        width: wp('35%'),
        left:hp('15%'),
        borderRadius: 7,
        height: hp('16%'),
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderTopColor: '#000',
        borderRightColor: '#000',
        bottom:hp('15.9%')
    },

    textSair:{
        fontWeight:'bold',
        color:'#FFF',
        fontSize:hp('3.3%'),
        padding: hp('1%')
    },
    acessoMenu:{
        backgroundColor: 'white',
        width: hp ('7%'),
        height: hp ('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: hp ('95%'),
        right: wp ('38%'),
        borderRadius:9,
        borderTopLeftRadius:0.5,
        
    },
    estilo: {
        top: hp ('25%'),
        height: hp ('5%')
    },
    botaoEmail:{
        width: wp('90%'),
        height: hp('5%'),
        backgroundColor: "#FFFFFF",
        bottom: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1, 
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderRadius: 7
    },
    textEmail:{
        fontWeight: 'bold',
        top: hp('1.8%'),
        
    },
    iconeEmail:{
        right: wp('40%'),
        bottom: hp('1.5%'),
        
    }
    

})

export {styles};