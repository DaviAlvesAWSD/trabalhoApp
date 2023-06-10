import React, {useState, useEffect} from "react";
import {FontAwesome} from "@expo/vector-icons"
import { 
    View,
    SafeAreaView, 
    Text,
    TouchableOpacity,
    FlatList,
    TextInput
} from "react-native";

import firebaseApp from "../../config/firebaseconfig";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut  } from "firebase/auth";

import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import styles from "./style.js"

import Fuse from 'fuse.js';

export default function TelaPrincipal({navigation, route}){
    const [task, setTask] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredTask, setFilteredTask] = useState([]); // Novo estado para armazenar os resultados filtrados
  

    const database = getFirestore(firebaseApp);

    function deleteTask(id){
        const docRef = doc(collection(database, 'Insumo'), id);
        
        deleteDoc(docRef)
        .then(() => {
            console.log('Documento excluido com sucesso!!');
        })
        .catch((error) => {
            console.error('Erro ao excluir documento:', error);
        })
    }

    const handleLogout = async () => {
        const auth = getAuth(firebaseApp);
    
        try {
          await signOut(auth);
          console.log("Usuário deslogado com sucesso");
          navigation.navigate("Login")
          // Você pode redirecionar para a tela de login ou para qualquer outra tela apropriada aqui
        } catch (error) {
          console.log("Erro ao fazer logout:", error);
        }
      }

    useEffect(()=>{
        const q = query(collection(database ,"Insumo"));

        const pesquisar = onSnapshot(q, (snapshot) => {
            const list = []
            snapshot.docs.forEach((doc) =>{
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list)
            console.log(task);
        })    
        
        return () => pesquisar();
    }, []);

    const handleSearch = () => {
        const fuse = new Fuse(task, { keys: ['nome', 'tipo'] });
        
        // Verificar se o texto de pesquisa está vazio
        if (searchText === '') {
            setFilteredTask(task); // Atribuir todos os dados à lista de tarefas filtradas
        } else {
            const results = fuse.search(searchText);
            setFilteredTask(results.map((result) => result.item));
        }
    };

    useEffect(() => {
        const fuse = new Fuse(task, { keys: ['nome', 'tipo'] });
        
        // Verificar se o texto de pesquisa está vazio
        if (searchText === '') {
          setFilteredTask(task); // Atribuir todos os dados à lista de tarefas filtradas
        }
      }, [searchText, task]);

    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.pageTitle}>
                        Insumos
                    </Text>
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => {
                            handleLogout()
                        }}
                    >
                        <FontAwesome
                        name="sign-out"
                        size={20}
                        color="#fff"
                        style={styles.logoutIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.SearchContent}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Pesquisar"
                        onChangeText={(text) => setSearchText(text)}
                        value={searchText}
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <FontAwesome name="search" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.Table}>
                    <Text style={styles.textTable}>Nome</Text>
                    <Text style={styles.textTable}>Tipo</Text>
                    <Text style={styles.textTable}>Qtd</Text>
                </View>
                <FlatList 
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    data={filteredTask }
                    renderItem={({item}) => {
                        return (
                            <View style={styles.Insumos}>
                                <Text
                                    style={styles.DescriptionTask}  
                                >
                                {item.nome}
                                </Text>
                                <Text style={styles.DescriptionTask}>
                                    {item.tipo}
                                </Text>
                                <Text style={styles.DescriptionTaskQtd}>
                                    {item.quantidade}
                                </Text>
                            </View>
                        )
                    }}
                />
                <TouchableOpacity 
                    style={styles.buttonNewSolicitacao}
                    onPress={() => {
                        setSearchText('');
                        navigation.navigate("Solicitacao insumo", route.params.idUser);
                    }}
                >
                    <Text style={styles.iconButton}>+</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
