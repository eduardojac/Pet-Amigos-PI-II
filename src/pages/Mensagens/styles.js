import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ededed',
    },
    // containerTexto: {
    //     // flex: hp('0.2%'),
    //     backgroundColor: '#C41D00',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderBottomWidth: 2,
    //     borderBottomColor: '#a31a02',
    //     // height: hp('18%'),
    // },
    botaoMenu: {
        // flex: hp('0.029%'),
        height:hp('18%'),
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
        right: wp('47%'),
         bottom: hp('10%'),
        position: 'absolute',
    },

    textoMensagem:{
        color: 'white',
        bottom: hp('0.7%'),
        top: hp('3%'),
        fontSize: hp('4%'),
        fontWeight: 'bold' 
    },

    acessoMenu: {
        // backgroundColor: 'white',
        width: hp('7%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        bottom: hp('5%'),
        right: wp('80%'),
        borderRadius: 9,
        borderTopLeftRadius: 0.5,
        position: 'absolute'
    },

    textoNome: {
        fontSize: hp('3.5%'),
        //fontFamily: 'Arial',
        fontWeight: 'bold',
        color: 'white',
        //alignItems: 'center',
        top: hp('52%') // Só p apresentar pro prof (Voltar pro 30%)
    },
    informacoesPerfil: {
        flex: 0.1, // Só p apresentar pro prof
        paddingLeft: hp('5%'),
        paddingTop: hp('1.5%'),
        top: hp('5%')
    },
    textoEmail: {
        fontSize: hp('1.8%'),
        color: '#7d7c7c',
        //fontFamily: 'Gill Sans'

    },
    textoPets: {
        fontSize: hp('1.8%'),
        paddingTop: hp('1.5%'),
        color: '#7d7c7c',
        //fontFamily: 'Gill Sans'

    },
    textoAgendamentos: {
        fontSize: hp('1.8%'),
        paddingTop: hp('1.5%'),
        color: '#7d7c7c',
        //fontFamily: 'Gill Sans'

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
      },
      viewModal:{
        flex: 1,
        justifyContent: 'center', 
    },
    telaModal:{
        backgroundColor: 'white',
        borderRadius: 10,
        minHeight: 300,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      logo:{
        marginVertical: 10,
        bottom: 25,
        height: 180,
        width: 180
    },  
    
    avatarPlaceHolder:{
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: "gray",
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center",
        bottom: 35
    },
    avatar:{
        position: "absolute",
        width: 50,
        height: 50,
        borderRadius: 80,
        left: 3

    },
    botaoCadastrar:{
        marginVertical: 20,
        backgroundColor: '#C41D00',
        height: hp('6.5%'),
        width: wp('40%'),
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
        borderRightColor: '#000'
    },

    textBotaoCadastrar:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: hp('2.5%') 
    },
    loading:{
        top: hp('23.5%'),
        alignItems: 'center',
        
    },
    botaoModal:{
        alignItems: 'center',
        justifyContent: 'center',
        bottom: hp('18%'),
        left: wp('20%')
    },
    boxLista:{
        backgroundColor: '#FFF', 
        width: wp('100%'),
        height: hp('10%'),
        flex: 1,
        marginVertical: 1,      
        justifyContent: 'center',
    }
})

export { styles };
