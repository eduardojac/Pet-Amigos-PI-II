import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E2E1',
        // alignItems: 'center',
    },

    txtConfig: {
        fontSize: hp('4%'),
        bottom: hp('0.7%'),
        fontWeight: 'bold',
        color: 'white'
    },

    iconeVoltar: {
        right: wp('40%'),
    },
    divOpcoes: {
        top: hp('5%'),
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    hdivider: {
        margin: 'auto',
        // marginTop: hp('80%'),
        width: hp('100%'),
        height: hp('0.2%'),
        backgroundColor: '#7d7c7c',
        position: 'relative',
        // left: hp('0%'),
        opacity: 0.2,
        borderRadius: 1,
        // boxShadow: '3px',
    },
    topConfigDiv: {
        // flex: hp('0.029%'),
        height: hp('18%'),
        backgroundColor: '#C41D00',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#a31a02'
    },
    txtAparencia: {
        fontSize: hp('2.5%'),
        color: '#43464B',
        left: wp('5%'),
        fontWeight: 'bold',
        // paddingTop: hp('1%')
    },
    txtOpcoes: {
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        color: '#43464B',
        paddingTop: hp('5%'),
        left: wp('5%'),
    },

    txtAjuda:{
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        color: '#43464B',
        paddingTop: hp('4%'),
        left: wp('5%'),
    }

})

export { styles };