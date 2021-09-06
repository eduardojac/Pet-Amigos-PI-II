import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 0.407,
        backgroundColor: '#C41D00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        fontSize: 30,
        fontWeight: 'bold',
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
    textoAdd:{
        fontWeight: 'bold',
        fontSize: 20,
        top: 12,
        right: 10
    },
    textoLinha:{
        top: 20,
        color: '#C0C0C0',   
        marginVertical: 25,
    },
    botaoAdicionar:{
        width: 250,
        height: 45,
        backgroundColor: '#FF5700',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#C41D00',
        borderLeftColor: '#C41D00',
        borderTopColor: '#C41D00',
        borderRightColor: '#C41D00',
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
        top: 28,
        left: 150
    },
    botaoBanho:{
        width: 105,
        height: 90,
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor: '#FF5700',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#C41D00',
        borderLeftColor: '#C41D00',
        borderTopColor: '#C41D00',
        borderRightColor: '#C41D00',
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
        backgroundColor: '#FF5700',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#C41D00',
        borderLeftColor: '#C41D00',
        borderTopColor: '#C41D00',
        borderRightColor: '#C41D00',
        bottom: 70,
        left: 60
    },
    textoEmpresa:{
        fontSize: 15, 
        top:hp('1.5%'),
    },
    textoServico:{
        fontSize: 22,
        right:hp('14%'),
        fontWeight: 'bold',
        top:hp('3%')
    },
    textoDia:{
        bottom:hp('1.5%'),
        fontWeight: 'bold',
        fontSize: 30,
        left: wp('32')
    },
    textoMes:{
        bottom:hp('9%'),
        fontSize: 13,
        left: wp('32')
    },
    textoHorario:{
        bottom:hp('4.5%'),
        fontSize: 13,
        left: wp('32')
    },
    textoPreco:{
        right:hp('14%'),
        bottom:hp('8%'),
        fontSize: 12
    },
    textoPet:{
        fontWeight: 'bold',
        color: '#C41D00',
        fontSize: 25,
        bottom: 15
    },

});
export {styles};