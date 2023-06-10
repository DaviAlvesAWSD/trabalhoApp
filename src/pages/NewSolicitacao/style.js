import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        //Formato do Cabeçalho
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '11%',
        backgroundColor: '#03B6EF',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        //Alinhando Cabeçalho
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    backButton: {
        backgroundColor: "#03B6EF",
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        margin:0,
        marginRight: 70
      },
      statusBall: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 8,
      },
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingTop: 20
    },
    pageTitle:{
        color: "#f5f5f5",
        fontSize: 30,
        fontWeight: "bold",
        marginRight:100
    },
    Insumos:{
        width:"100%",
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 5
    },
    SearchContent:{
        flexDirection: "row",
        marginTop: "20%"
    },
    searchButton:{
        backgroundColor: "#03B6EF",
        borderRadius: 5,
        padding: 10,
    },
    searchInput:{
        //Formatando Caixa de texto
        width: '70%',
        height: '45px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        borderColor: '#03B6EF',
        backgroundColor: '#fff',
        borderWidth: 1,
        paddingLeft: 40,
        fontSize: 18,
        marginLeft: 20,
        marginRight:20
    },
    Table:{
        width:"85%",
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 30,
        marginLeft: 30
        
    },
    textTable:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#4b4b4b"
    },
    list:{
        marginTop: 10
    },
    deleteTask:{
        justifyContent: "center",
        paddingLeft: 15,
       

    },
    DescriptionTask:{
        width: "85%",
        alignContent: "flex-start",
        backgroundColor: "#b8b8b881",
        padding: 12,
        paddingHorizontal: 20,

        color: "#282b2db5"
    },
    DescriptionTaskPaciente:{
        width: "85%",
        alignContent: "flex-start",
        backgroundColor: "#b8b8b881",
        padding: 12,
        paddingHorizontal: 30,
        paddingTop:30,
        color: "#282b2db5"
    },
    DescriptionTaskQtd:{
        width: "85%",
        alignContent: "flex-start",
        backgroundColor: "#b8b8b881",
        padding: 12,
        paddingHorizontal: 80,
        paddingTop:30,
        color: "#282b2db5"
    },
    DescriptionTaskStatus:{
        width: "85%",
        alignContent: "flex-start",
        backgroundColor: "#b8b8b881",
        padding: 0,
        paddingRight: 50,
        paddingTop:30,
        color: "#282b2db5"
    },
    buttonNewSolicitacao:{
        width:'60px',
        height:'60px',
        position:'absolute',
        bottom: 30,
        left:20,
        backgroundColor: '#03B6EF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonNewTask:{
        width:60,
        height:60,
        position:"fixed",
        bottom: 30,
        left:20,
        backgroundColor:"#F92e6a",
        borderRadius:50,
        justifyContent:"center",
        alignItems: "center"
       },
    buttonSolicitar:{
        top:50,
        width:'300px',
        backgroundColor: '#03B6EF',
        paddingLeft:110,
        paddingRight:50,
        paddingTop:10,
        paddingBottom:10,
        borderTopLeftRadius:'15px',
        borderTopRightRadius:'15px',
        borderBottomLeftRadius:'15px',
        borderBottomRightRadius:'15px',
        marginLeft:"15%"
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
        marginTop:10,
        marginLeft:"15%"
    },
    formContainer:{
        justifyContent:"center",
        marginTop: "20%",
    },
    iconButton:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"bold",
       }
});

export default styles