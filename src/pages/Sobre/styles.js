import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    containerGeral:{
        flex: 1,
        backgroundColor:'#E1E2E1',
        // alignItems: 'center',
    },
    topSobreDiv: {
        // flex: hp('0.029%'),
        height: hp('18%'),
        backgroundColor: '#C41D00',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#a31a02'
    },

    txtSobre: {
        fontSize: hp('4%'),
        bottom: hp('0.7%'),
        fontWeight: 'bold',
        color: 'white'
    },
    hdivider: {
        margin: 'auto',
        // flex: 1,
        marginTop: hp('7%'),
        width: hp('100%'),
        height: hp('0.2%'),
        backgroundColor: '#7d7c7c',
        position: 'relative',
        // left: hp('0%'),
        opacity: 0.2,
        borderRadius: 1,
        // boxShadow: '3px',
    },
    iconeVoltar:{
        right:wp('39%')
    },
    containerTermos:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    conteudoBV:{
        top:hp('5%'),
        fontSize:hp('2.3%'),
        textAlign: 'center',
        padding:wp('4%')
    },
    txtTermos:{
        top:hp('3%'),
        fontSize:hp('5%'),
        fontWeight:'bold',
    },

    conteudoTermos:{
        top:hp('2%'),
        fontSize:hp('2.3%'),
        textAlign: 'center',
        padding:wp('4%')
    },

    containerServicos:{
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtServicos:{
        top:hp('1%'),
        fontSize:hp('5%'),
        fontWeight:'bold',
    },

    conteudoServicos:{
        top:hp('1%'),
        fontSize:hp('2.3%'),
        textAlign: 'center',
        padding:wp('4%')
    },
})

export { styles };