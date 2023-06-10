import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        //Formato do Cabeçalho
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '70px',
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
        marginLeft: "5%"
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
        width:"90%",
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 30,
        marginLeft: "5%"
        
    },
    textTable:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#4b4b4b"
    },
    list:{
        marginTop: "5%"
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
        justifyContent: "center",
        alignItems:"center",
        color: "#282b2db5"
    },
    DescriptionTaskStatus:{
        width: "20%",
        alignContent: "flex-start",
        backgroundColor: "#b8b8b881",
        justifyContent: "center",
        alignItems:"center",

        color: "#282b2db5"
    },
    buttonNewSolicitacao:{
        width:'60px',
        height:'60px',
        position:'fixed',
        bottom: 30,
        left:20,
        backgroundColor: '#03B6EF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: "center"
    },
    iconButton:{
        color:'#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
});

export default styles