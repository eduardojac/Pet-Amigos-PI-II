import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E2E1',
        alignItems: 'center',

    },
    iconeVoltar:{
        right: wp('38%'),
        top: hp('2%')
    

    },
    texto: {
        fontSize: 25,
        top: 25
        
    },
    inputLocal: {
        borderRadius: wp('2%'),
        width: wp('90%'),
        height: hp('6.5%'),
        padding: 10,
        top: hp('4%'),   
        backgroundColor: '#C41D00',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
    },
    iconeLocal: {
        left: wp('40%'),
        bottom: hp('1%'),
        
    },
    iconePesquisa: {
        left: wp('40%'),
        bottom: hp('1.5%'),      

    },

    inputPesquisar: {
        backgroundColor: '#FFF',
        borderRadius: wp('2%'),
        width: wp('90%'),
        height: hp('6.5%'),
        padding: 10,
        marginVertical: 10,
        top: hp('5%'),
        
    },
    iconeBanho:{
        bottom: hp('12.5%'),
        right: wp('8.5%')
    },

})

export { styles };