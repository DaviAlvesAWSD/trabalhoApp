import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        //Formato do Cabeçalho
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '3%',
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
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingTop: 20
    },
    pageTitle:{
        color: "#f5f5f5",
        fontSize: 30,
        fontWeight: "bold"
    },
    Insumos:{
        width:"100%",
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 5
    },
    searchButton:{
        backgroundColor: "#03B6EF",
        borderRadius: 5,
        padding: 10,

        position:"absolute",
        top:"5.1%",
        left: "78%"
    },
    searchInput:{
        position:"absolute",
        top: "5%",
        left: "5%",
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
    },
    Table:{
        width:"70%",
        flexDirection: "row",
        justifyContent:"space-between",
        position:"absolute",
        top: "8.3%",
        left: "6%"
    },
    textTable:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#4b4b4b"
    },
    list:{
        marginTop: "50%"
    },
    deleteTask:{
        justifyContent: "center",
        paddingLeft: 15,
        position:"absolute",
        marginLeft: "80%",
        top: "30%"
    },
    DescriptionTask:{
        width: "85%",
        alignContent: "flex-start",
        backgroundColor: "#b8b8b881",
        padding: 12,
        paddingHorizontal: 20,

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
    iconButton:{
        color:'#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
});

export default styles