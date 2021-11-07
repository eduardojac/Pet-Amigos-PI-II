import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ededed',
    },
    botaoMenu: {
        height: hp('15%'),
        backgroundColor: '#C41D00',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#a31a02'
    },
    acessoMenu: {
        backgroundColor: 'white',
        width: hp('7%'),
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: hp('3%'),
        right: wp('80%'),
        borderRadius: 9,
        borderTopLeftRadius: 0.5,
        position: 'absolute'
    },

    avatar:{
        position: "absolute",
        width: 50,
        height: 50,
        borderRadius: 80,
        right: 15
    }
})

export { styles };
