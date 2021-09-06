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
    textoPrincipal:{
        fontSize: wp ('6%'),
        fontWeight: 'bold',
        color: 'black',
        top: hp('4%')
    },
    textoNome:{
        fontSize: wp ('8%'),
        fontWeight: 'bold',
        paddingTop: 50
    },
    textoBanho:{
        fontSize: wp ('8%'),
        fontWeight: 'bold',
        paddingTop: 50,
        
    },
    textoPasseio:{
        fontSize: wp ('8%'),
        fontWeight: 'bold',
        paddingTop: 50
    }
})

export { styles };