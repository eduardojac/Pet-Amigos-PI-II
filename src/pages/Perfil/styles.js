import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTexto: {
        flex: 0.330,
        backgroundColor: '#C41D00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        // right: wp('47%'),
        // bottom: hp('10%'),
        position: 'absolute',
    },
    acessoMenu:{
        backgroundColor: 'white',
        width: hp('7%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: hp ('87%'),
        right: wp ('80%'),
        borderRadius:9,
        borderTopLeftRadius:0.5,
        position: 'absolute'
    },
    informacoesPerfil: {

    },
    textoNome: {
        fontSize: hp('2.5%'),
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: 'white',
        //alignItems: 'center',
        top:hp('11%')
    },
    textoEmail: {

    },
    textoPets: {

    },
    textoAgendamentos: {

    },
})

export { styles };
