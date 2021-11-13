import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#C41D00',
        
           
    },
    container1:{
        flex: 0.4,
        backgroundColor: '#C41D00',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    container2:{
        flex:0.6,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 80,
        alignItems: 'center'              
    },
    botaoVoltar:{
        right: wp('38%')
    },
    escolha:{
        fontWeight: 'bold',
        fontSize: wp('6%'),
        color: 'black',
        
        bottom: hp('8%')
        
    },
    textBanho:{
        right: hp('12%'),
        fontSize: wp('6%'),
        bottom: hp('1%'),
        color: '#C41D00',
        fontWeight: 'bold',
    },
    textTosa:{
        right: hp('12%'),
        fontSize: wp('6%'),
        bottom: hp('1%'),
        color: '#C41D00',
        fontWeight: 'bold',
    },
    textBanhoETosa:{
        right: hp('11%'),
        fontSize: wp('6%'),
        bottom: hp('1%'),
        color: '#C41D00',
        fontWeight: 'bold',
    },
    btnBanho:{
        backgroundColor:'#C41D00',
        width: wp('25%'),
        height: hp('7%'),
        left: wp('25%'),
        bottom: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderTopColor: '#000',
        borderRightColor: '#000',
        borderRadius: 7, 
    },
    btnTosa:{
        backgroundColor:'#C41D00',
        width: wp('25%'),
        height: hp('7%'),
        bottom: hp('7%'),
        left: wp('25%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderTopColor: '#000',
        borderRightColor: '#000',
        borderRadius: 7,
    },
    btnBanhoETosa:{
        backgroundColor:'#C41D00',
        width: wp('25%'),
        height: hp('7%'),
        bottom: hp('7%'),
        left: wp('25%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderTopColor: '#000',
        borderRightColor: '#000',
        borderRadius: 7,
    },
    txtBanho:{
        fontWeight: 'bold',
        color:'#FFF'
    
    },
    txtTosa:{
        fontWeight: 'bold',
        color:'#FFF',
    },
    txtBanhoETosa:{
        fontWeight: 'bold',
        color:'#FFF',
    },
    avatarBanho: {
        width: 100,
        height: 100,
        right: wp ('30%'),
        bottom: hp ('4%'),
        borderRadius: 7,
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        
    },
    patinha:{
        bottom: hp('4%'),
        width: 200,
        height: 200
    },
    nomeEmpresa:{
        fontWeight: 'bold',
        fontSize: hp('3.5%'),
        left: wp('15%'),
        bottom: hp('13%')
    },
    dadosEmpresa:{
        left: wp('15%'),
        bottom: hp('12.5%'),
        fontSize: hp('2%'),
    },
    divisao:{
        bottom: hp('10%'),
        color: '#C0C0C0'
    },
    modal:{
        backgroundColor: '#C41D00',
        borderRadius: 10,
        minHeight: 300,
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    telamodal:{
        flex: 1,
        justifyContent: 'flex-end', 
           
    },
    boxServico:{
        backgroundColor: 'white',
        width: 305,
        height: 35,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',  
        borderBottomWidth: 1, 
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderRadius: 7 
        
    },
    boxAgendar:{
        backgroundColor: 'white',
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        bottom: 5,
        borderBottomWidth: 1, 
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderRadius: 7
    },
    boxDatas:{
        backgroundColor: 'white',
        width: 305,
        height: 100,   
        alignItems: 'center',
        paddingBottom: 5,       
        borderRadius: 5,
        borderBottomWidth: 1, 
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderRadius: 7 
        
    },
    boxHorarios:{
        backgroundColor: 'white',
        width: 305,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
             
    },
    setaVoltar:{
        right: 65,
        alignItems: 'center',
        top: 4.5
        
    },
    setaAvancar:{
        left: 60,
        bottom: 38,
        alignItems: 'center'
    },

    listaDias:{
        alignItems: 'flex-end'
    },
    
    listaHorarios:{
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 10

    },
    diaSemana:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    diaNumero:{
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tamanhodata:{
        height: 50
    }
});

export {styles};