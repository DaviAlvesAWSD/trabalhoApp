import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title:{
        fontSize: 48,
        color: "#03B6EF",
        marginBottom: 10,
        fontWeight: "bold",   
        textShadow: "rgba(83, 83, 83, 0.493) 2px 1px 5px"
    },
    input:{
        //Formatando Caixa de texto
        boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
        backgroundColor:'rgba(255, 255, 255, 1)',
        width:'300px',
        height:'45px',
        borderTopLeftRadius:'15px',
        borderTopRightRadius:'15px',
        borderBottomLeftRadius:'15px',
        borderBottomRightRadius:'15px',
        paddingLeft:40,
        marginTop: 15
    },
    btnLogin:{
        //Formatando Botão
          width:'250px',
          height:'46px',
          padding:10,
          backgroundColor:'#10AADB',
          borderTopLeftRadius:'25px',
          borderTopRightRadius:'25px',
          borderBottomLeftRadius:'25px',
          borderBottomRightRadius:'25px',
          //Alinhando Botão de Login
          position: 'absolute',
          textAlign:'center',
          top:'73%',
          boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    textBtnLogin:{
        fontSize:20,
        color:'#FFFFFF',
        fontWeight: 'bold',
      },
    contentAlert:{
        marginTop:20,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center"
    },
    warningAlert:{
        paddingLeft:10,
        color:"#bdbdbd",
        fontSize:16
    }
})

export default styles