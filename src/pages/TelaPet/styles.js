import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 0.407,
        backgroundColor: '#C41D00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewLista:{
        flex: 1,
        alignItems: 'center'
    },
    texto:{
        fontSize: 30,
        color:'#FFF',
        fontWeight: 'bold',
        bottom: 25
    },
    iconeVoltar:{
        right: wp('38%'),
        bottom: hp('2%')
    },
    botaoAdicionar:{
        width: 250,
        height: 45,
        backgroundColor:'#C41D00',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        top: 20
    },
    textoAdd:{
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 20,
        top: 12,
        right: 10
    },
    textoLinha:{
        top: 20,
        color: '#C0C0C0',
      
        marginVertical: 25,
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
        justifyContent: 'space-between',
    },
    input:{
        borderBottomWidth: 0.5,
        backgroundColor: 'white',
        width: 200,
        borderBottomColor:'gray'
    },
    textoPet:{
        fontWeight: 'bold',
        color: '#C41D00',
        fontSize: 25,
        bottom: 15
    },
    icone:{
        left: 205,
        bottom: 25
    },
    inputArea:{
        flexDirection: 'row',
        width: '90%',
    },
    botaoAdd:{
        width: 150,
        height: 35,
        backgroundColor:'#C41D00',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 7,
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,

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
    avatarBanho: {
        width: 90,
        height: 90,
        right: wp('30%'),
        bottom: wp('16.5%')
    },
    botaoEditar:{
        top: 65,
        left: 110
    },
    botaoExcluir:{
        top: 40,
        left: 140
    },
    textoNome:{
        color:'#C41D00',
        top: 10,
        fontWeight: 'bold',
        fontSize: 25,
             
    },
    textoEspecie:{
        top : 15,
        fontSize: 15,
        fontWeight: 'bold', 
        color: 'black'
    },
    textoSexoEIdade:{
        top : 20,
        fontSize: 15,
        
        color: 'black'
    }

});
export {styles};