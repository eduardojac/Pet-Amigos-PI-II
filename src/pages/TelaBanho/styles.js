import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0C0C0',
        alignItems: 'center',

    },
    acessoMenu: {
        backgroundColor: 'white',
        width: hp('7%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        top: hp('6.8%'),
        right: wp('38%'),
        borderRadius: 9,
        borderTopLeftRadius: 0.5,

    },
    texto: {
        fontSize: hp('4%'),
        top: hp('10%'),
        left: wp('3%')
    },
    inputLocal: {
        backgroundColor: '#FFF',
        borderRadius: wp('2%'),
        width: wp('90%'),
        height: hp('6.5%'),
        padding: 10,
        top: hp('10%'),

    },
    iconeLocal: {
        left: wp('40%'),
        top: hp('5%')

    },
    iconePesquisa: {
        left: wp('40%'),
        top: hp('7.5%')

    },

    inputPesquisar: {
        backgroundColor: '#FFF',
        borderRadius: wp('2%'),
        width: wp('90%'),
        height: hp('6.5%'),
        padding: 10,
        marginVertical: 10,
        top: hp('14%'),

    },
    iconeBanho:{
        bottom: hp('35%')
    }
})

export { styles };