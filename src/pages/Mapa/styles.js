import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  
    container:{
        flex: 1,
    },

    iconeVoltar:{
        right: wp('38%'),
        top: hp('2%')
    
    },

    botaoConfirmar:{
        backgroundColor: '#ff6347',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 30,
        width: 300,
        top: 500,
        left: wp('10%'),
        

        
        
        
        
    },

    textBotaoConfirmar:{
        color:'black',
        fontSize: 17,
        
        
    }

})

export {styles};

/*backgroundColor: '#C41D00',
        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp ('6%'),
        top: hp ('74.5%'),*/