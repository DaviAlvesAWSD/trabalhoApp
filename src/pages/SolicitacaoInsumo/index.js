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
import { getFirestore } from "firebase/firestore";
import firebaseApp from "../../config/firebaseconfig";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import styles from "./style.js"

import Fuse from 'fuse.js';

export default function SolicitacaoInsumo({navigation, route}){
    const [task, setTask] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredTask, setFilteredTask] = useState([]); // Novo estado para armazenar os resultados filtrados

    const database = getFirestore(firebaseApp);


    useEffect(()=>{
        const q = query(collection(database ,"SolicitacaoInsumo"));

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
        const fuse = new Fuse(task, { keys: ['descricao', 'paciente', 'quantidade', 'status'] });
        
        // Verificar se o texto de pesquisa está vazio
        if (searchText === '') {
            setFilteredTask(task); // Atribuir todos os dados à lista de tarefas filtradas
        } else {
            const results = fuse.search(searchText);
            setFilteredTask(results.map((result) => result.item));
        }
    };

    useEffect(() => {
        const fuse = new Fuse(task, { keys: ['descricao', 'paciente', 'quantidade', 'status'] });
        
        // Verificar se o texto de pesquisa está vazio
        if (searchText === '') {
          setFilteredTask(task); // Atribuir todos os dados à lista de tarefas filtradas
        }
      }, [searchText, task]);

    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => {
                            setSearchText('');
                            navigation.goBack();
                        }}
                    >
                        <FontAwesome name="arrow-left" size={20} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>
                        Solicitações
                    </Text>
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
                    <Text style={styles.textTable}>paciente</Text>
                    <Text style={styles.textTable}>Qtd</Text>
                    <Text style={styles.textTable}>Status</Text>
                </View>
                <FlatList 
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                    data={filteredTask}
                    renderItem={({item}) => {
                        let statusColor;

                        if (item.status === 0) {
                        statusColor = "gray";
                        } else if (item.status === 1) {
                        statusColor = "green";
                        } else if (item.status === 2) {
                        statusColor = "red";
                        }
                        
                        return (
                            <View style={styles.Insumos}>
                                <Text
                                    style={styles.DescriptionTask}
                                   // onPress={() =>  {
                                    //    navigation.navigate("Details",{
                                    //    id: item.id,
                                    //    nome: item.nome,
                                    //    paciente: item.paciente,
                                    //    quantidade: item.quantidade,
                                   //     status: item.status
                                    //    })
                                   // }}
                                >
                                {item.descricao}
                                </Text>
                                <Text style={styles.DescriptionTask}>
                                    {item.paciente}
                                </Text>
                                <Text style={styles.DescriptionTask}>
                                    {item.quantidade}
                                </Text>
                                <View style={styles.DescriptionTaskStatus}>
                                    <Text style={[styles.statusBall, {backgroundColor: statusColor}]}>
                                    </Text>
                                </View>
                            </View>
                        )
                    }}
                />
                <TouchableOpacity 
                    style={styles.buttonNewSolicitacao}
                    onPress={() => {
                        setSearchText('');
                        navigation.navigate("New Solicitacao", route.params.idUser);
                    }}
                >
                    <Text style={styles.iconButton}>+</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}