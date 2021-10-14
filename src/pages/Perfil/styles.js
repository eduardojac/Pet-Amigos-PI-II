import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ededed'
    },
    containerTexto: {
        flex: hp('0.08%'),
        backgroundColor: '#C41D00',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#a31a02'
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
    acessoMenu: {
        backgroundColor: 'white',
        width: hp('7%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: hp('87%'),
        right: wp('80%'),
        borderRadius: 9,
        borderTopLeftRadius: 0.5,
        position: 'absolute'
    },

    textoNome: {
        fontSize: hp('2.5%'),
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: 'white',
        //alignItems: 'center',
        top: hp('14%')
    },
    informacoesPerfil: {
        paddingLeft: hp('5%'),
        paddingTop: hp('1.5%'),
        top: hp('5%')
    },
    textoEmail: {
        fontSize: hp('1.8%'),
        color: '#7d7c7c',
        fontFamily: 'Gill Sans'

    },
    textoPets: {
        fontSize: hp('1.8%'),
        paddingTop: hp('1.5%'),
        color: '#7d7c7c',
        fontFamily: 'Gill Sans'

    },
    textoAgendamentos: {
        fontSize: hp('1.8%'),
        paddingTop: hp('1.5%'),
        color: '#7d7c7c',
        fontFamily: 'Gill Sans'

    },
    textoDados: {
        fontSize: hp('2%'),
        paddingLeft: hp('1%'),
        paddingTop: hp('0.2%')
    },
    hdivider: {
        margin: 'auto',
        // marginTop: hp('80%'),
        width: hp ('30%'),
        height:hp('0.2%'),
        backgroundColor:'#7d7c7c',
        position: 'relative',
        left: hp('1%'),
        opacity: 0.2,
        borderRadius: 1,
        // boxShadow: '3px',
        shadowColor: 'green',
      }
})

export { styles };
