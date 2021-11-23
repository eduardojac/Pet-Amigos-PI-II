import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    containerGeral:{
        flex: 1,
        backgroundColor:'#E1E2E1',

    },
    iconeVoltar:{
        left:wp('10%'),
        paddingTop:hp('5%')
    },
    inputRelatar:{

        backgroundColor: '#FFF',
        borderRadius: wp ('2%'),
        width: wp('90%'),
        height: hp('10%'),
        padding: 10,
        left:wp('4%'),
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        
    },
    inputArea:{
        paddingTop:hp('8%'),
        flexDirection: 'row',
        width: '90%',
        
    },
    botaoEnviar:{
        marginVertical: 20,
        backgroundColor: '#C41D00',
        height: hp('6.5%'),
        width: wp('30%'),
        borderRadius: wp ('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: '#000',
        borderLeftColor: '#000',
        borderTopColor: '#000',
        borderRightColor: '#000',
        top: hp ('6%'),
        left:wp('34%')
    },
    textBotaoEnviar:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize: 17,
        
    },
})

export { styles };