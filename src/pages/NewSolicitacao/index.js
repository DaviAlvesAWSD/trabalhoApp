import React, {useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity}  from "react-native"

import { Picker } from "@react-native-picker/picker";

import { collection, onSnapshot, query, addDoc} from "firebase/firestore";
import styles from "./style"
import firebaseApp from "../../config/firebaseconfig.js";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const database = getFirestore(firebaseApp);

const auth = getAuth();
const user = auth.currentUser;


// Função para inserir um documento
const addDocument = async (
  descricao,
  idInsumo,
  idUsuario, 
  paciente,
  quantidade,
  status,
  navigation
  ) => {
  try {
    const docRef = await addDoc(collection(database, "SolicitacaoInsumo"), {
      descricao: descricao,
      idInsumo: idInsumo,
      idUsuario: idUsuario,
      paciente: paciente,
      quantidade: quantidade,
      status: status,
      // ... outros campos e valores
    });
    console.log("Documento inserido com ID: ", docRef.id);
    navigation.navigate("Solicitacao insumo");
  } catch (error) {
    console.error("Erro ao inserir o documento: ", error);
  }
};


export default function NewSolicitacao({navigation, route}){
  
  const [descricao, setDescricao] = useState("");
  const [idInsumo, setIdInsumo] = useState("");
  const [idUsuario, setIdUsuario] = useState("");
  const [paciente, setPaciente] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [status, setStatus] = useState(0);

  const [task, setTask] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");

  function addSolic(){
    setIdUsuario(user);
    addDocument(
      descricao, 
      idInsumo, 
      idUsuario,
      paciente,
      quantidade,
      0,
     navigation);
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

  return(
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Picker
          style={styles.input}
          selectedValue={idInsumo}
          onValueChange={(itemValue) => setIdInsumo(itemValue)}
        >
          <Picker.Item label="Selecione uma opção" value="" />
          {task.map((option) => (
            <Picker.Item
              key={option.id}
              label={option.nome}
              value={option.id}
            />
          ))}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor='#838383'
          onChangeText={setDescricao} 
        />
        <TextInput
          style={styles.input}
          placeholder="Nome paciente"
          placeholderTextColor='#838383'
          onChangeText={setPaciente} 
        />
        <TextInput
          style={styles.input}
          placeholder="quantidade"
          placeholderTextColor='#838383'
          onChangeText={setQuantidade} 
        />
        
        <TouchableOpacity style={styles.buttonSolicitar}>
          <Text 
          style={{color:'#fff', fontSize:20}}
          onPress={() =>{addSolic()}}
          >Solicitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}