import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 0.407,
        backgroundColor: '#C41D00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textAgendamento:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'#FFF',
        bottom: 25
    },
    iconeVoltar:{
        right: wp('38%'),
        bottom: hp('2%')
    },
    boxLista:{
        backgroundColor: '#FFF', 
        width: wp('90%'),
        height: hp('15.5%'),
        borderRadius: 15,
        flex: 1,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    viewLista:{
        flex: 1,
        alignItems: 'center'
    },
    textAdd:{
        fontWeight: 'bold',
        color:'#FFF',
        fontSize: 19,
        top: 12,
        right: 10
    },
    textLinha:{
        top: 20,
        color: '#C0C0C0',   
        marginVertical: 25,
    },
    botaoAdicionar:{
        width: 250,
        height: 45,
        backgroundColor: '#C41D00',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        top: 20
    },
    viewModal:{
        flex: 1,
        justifyContent: 'center', 
    },
    telaModal:{
        backgroundColor: 'white',
        borderRadius: 10,
        minHeight: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoExcluir:{
        top: 32,
        left: 145,
    },
    botaoBanho:{
        width: 105,
        height: 90,
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor: '#C41D00',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,

        right: 70,
        top:  20,
        padding: 4
             
    },
    botaoPasseio:{
        fontWeight: 'bold',
        width: 105,
        height: 90,
        padding: 6,
        fontSize: 25,
        backgroundColor: '#C41D00',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        bottom: 70,
        left: 60
    },
    textEmpresa:{
        fontSize: 15, 
        top:hp('1.5%'),
    },
    textServico:{
        fontSize: 20,
        right:hp('12%'),
        fontWeight: 'bold',
        top:hp('3%')
    },
    textDia:{
        bottom:hp('1.5%'),
        fontWeight: 'bold',
        fontSize: 30,
        left: wp('27')
    },
    textMes:{
        bottom:hp('9%'),
        fontSize: 13,
        left: wp('27')
    },
    textHorario:{
        bottom:hp('3.8%'),
        fontSize: 13,
        left: wp('27')
    },
    textPreco:{
        right:hp('17.5%'),
        bottom:hp('7%'),
        fontSize: 12
    },
    textPet:{
        fontWeight: 'bold',
        color: '#C41D00',
        fontSize: 25,
        bottom: 15
    },

    textBanho:{
        fontSize: 20, 
        fontWeight: 'bold', 
        alignItems: 'center',
        color:'#FFF'
    },

    textPasseio:{
        fontSize: 20, 
        fontWeight: 'bold',
        color:'#FFF',
        
    },


});
export {styles};