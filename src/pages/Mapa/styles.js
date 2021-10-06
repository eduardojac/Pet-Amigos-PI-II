import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  
    container:{
        flex: 1,
    },

    iconeVoltar:{
        right: wp('45%'),
        bottom: hp('2.8%')
    
    },

    botaoConfirmar:{
        backgroundColor: '#ff6347',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: hp('40%'),
        height: hp('7%'),
        width: '90%',
        borderRadius: wp ('6%'),
        borderBottomWidth: 2, 
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderTopColor: 'white',
        borderRightColor: 'white',
        
        

        
    },

    textBotaoConfirmar:{
        color:'black',
        fontSize: 17,
        bottom: 30
        
        
    },

    indicarLocal:{
        backgroundColor: 'black',
        
    },
    textoIndicar:{
        top: hp('3.5%'),
        fontSize: 15,
        fontWeight: 'bold'
    }

})

export {styles};

/*backgroundColor: '#C41D00',
        
        justifyContent: 'center',
        alignItems: 'center',
        
        top: hp ('74.5%'),*/